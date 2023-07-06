package br.com.fernandinesuplementos.loja.services;

import br.com.fernandinesuplementos.loja.DTOs.ProductDetailsDto;
import br.com.fernandinesuplementos.loja.entities.ProductDetails;
import br.com.fernandinesuplementos.loja.repositories.ProductDetailsRepository;
import br.com.fernandinesuplementos.loja.services.exceptions.DatabaseException;
import br.com.fernandinesuplementos.loja.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductDetailsService {

    @Autowired
    private ProductDetailsRepository repository;

    @Autowired
    private ModelMapper modelMapper;

    @Transactional(readOnly = true)
    public List<ProductDetailsDto> findAll() {
        List<ProductDetails> list = repository.findAll();
        return list.stream()
                .map(entity -> modelMapper.map(entity, ProductDetailsDto.class))
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ProductDetailsDto findById(Long id) {
        Optional<ProductDetails> obj = repository.findById(id);
        ProductDetails entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
        return modelMapper.map(entity, ProductDetailsDto.class);
    }

    @Transactional
    public ProductDetailsDto insert(ProductDetailsDto dto) {
        ProductDetails entity = new ProductDetails();
        copyDtoToEntity(dto, entity);
        entity = repository.save(entity);
        return modelMapper.map(entity, ProductDetailsDto.class);
    }

    @Transactional
    public ProductDetailsDto update(Long id, ProductDetailsDto dto) {
        try {
            ProductDetails entity = repository.getReferenceById(id);
            copyDtoToEntity(dto, entity);
            entity = repository.save(entity);
            return modelMapper.map(entity, ProductDetailsDto.class);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Id not found " + id);
        }
    }

    public void delete(Long id) {
        try {
            repository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException("Id not found " + id);
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Integrity violation");
        }
    }
    private void copyDtoToEntity(ProductDetailsDto dto, ProductDetails entity) {

        entity.setId(dto.getId());
        entity.setBrand(dto.getBrand());
        entity.setFlavor(dto.getFlavor());
        entity.setGluten(dto.getGluten());
        entity.setLactose(dto.getLactose());
        entity.setVegan(dto.getVegan());
        entity.setWheight(dto.getWheight());
    }
}

