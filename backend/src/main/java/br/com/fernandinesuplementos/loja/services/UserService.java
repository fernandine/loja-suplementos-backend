package br.com.fernandinesuplementos.loja.services;

import br.com.fernandinesuplementos.loja.DTOs.AddressDto;
import br.com.fernandinesuplementos.loja.DTOs.UserDto;
import br.com.fernandinesuplementos.loja.DTOs.UserInsertDto;
import br.com.fernandinesuplementos.loja.DTOs.UserUpdateDto;
import br.com.fernandinesuplementos.loja.entities.Address;
import br.com.fernandinesuplementos.loja.entities.Role;
import br.com.fernandinesuplementos.loja.entities.User;
import br.com.fernandinesuplementos.loja.projections.UserDetailsProjection;
import br.com.fernandinesuplementos.loja.repositories.AddressRepository;
import br.com.fernandinesuplementos.loja.repositories.RoleRepository;
import br.com.fernandinesuplementos.loja.repositories.UserRepository;
import br.com.fernandinesuplementos.loja.services.exceptions.DatabaseException;
import br.com.fernandinesuplementos.loja.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional(readOnly = true)
    public List<UserDto> findAll() {
        List<User> list = repository.findAll();
        return list.stream().map(UserDto::new).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public UserDto findById(Long id) {
        Optional<User> obj = repository.findById(id);
        User entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
        return new UserDto(entity);
    }

    @Transactional(readOnly = true)
    public UserDto findMe() {
        User entity = authenticated();
        return new UserDto(entity);
    }

    @Transactional
    public UserDto insert(UserInsertDto dto) {
        User entity = new User();
        copyDtoToEntity(dto, entity);

        entity.getRoles().clear();
        Role role = roleRepository.findByAuthority("ROLE_CLIENT");
        entity.getRoles().add(role);

        entity.setPassword(passwordEncoder.encode(dto.getPassword()));
        entity = repository.save(entity);
        return new UserDto(entity);
    }

    @Transactional
    public UserDto update(Long id, UserUpdateDto dto) {
        try {
            User entity = repository.getReferenceById(id);

            copyDtoToEntity(dto, entity);
            entity = repository.save(entity);
            return new UserDto(entity);        }
        catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Id not found " + id);
        }
    }

    @Transactional(propagation = Propagation.SUPPORTS)
    public void delete(Long id) {
        try {
            repository.deleteById(id);
        }
        catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException("Id not found " + id);
        }
        catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Integrity violation");
        }
    }

    private void copyDtoToEntity(UserDto dto, User entity) {

        entity.setId(dto.getId());
        entity.setFirstname(dto.getFirstname());
        entity.setLastname(dto.getLastname());
        entity.setEmail(dto.getEmail());
        entity.setPhone(dto.getPhone());
        entity.setCpf(dto.getCpf());

        entity.getAddressList().clear();

        for (AddressDto addressDto : dto.getAddressList()) {
            Address address = new Address();
            address.setId(addressDto.getId());
            address.setLogradouro(addressDto.getLogradouro());
            address.setBairro(addressDto.getBairro());
            address.setCep(addressDto.getCep());
            address.setComplemento(addressDto.getComplemento());
            address.setLocalidade(addressDto.getLocalidade());
            address.setUf(addressDto.getUf());

            entity.getAddressList().add(address);
        }
    }

    @Transactional(readOnly = true)
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        List<UserDetailsProjection> result = repository.searchUserAndRolesByEmail(username);
        if (result.size() == 0) {
            throw new UsernameNotFoundException("Email not found");
        }

        User user = new User();
        user.setEmail(result.get(0).getUsername());
        user.setPassword(result.get(0).getPassword());
        for (UserDetailsProjection projection : result) {
            user.addRole(new Role(projection.getRoleId(), projection.getAuthority()));
        }

        return user;
    }
    protected User authenticated() {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            Jwt jwtPrincipal = (Jwt) authentication.getPrincipal();
            String username = jwtPrincipal.getClaim("username");
            return repository.findByEmail(username);
        }
        catch (Exception e) {
            throw new UsernameNotFoundException("Invalid user");
        }
    }
}
