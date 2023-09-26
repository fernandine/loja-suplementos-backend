package br.com.fernandinesuplementos.loja.controllers;

import br.com.fernandinesuplementos.loja.DTOs.UserDto;
import br.com.fernandinesuplementos.loja.DTOs.UserInsertDto;
import br.com.fernandinesuplementos.loja.DTOs.UserUpdateDto;
import br.com.fernandinesuplementos.loja.services.AuthService;
import br.com.fernandinesuplementos.loja.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UserController {

	@Autowired
	private UserService service;
	
	@GetMapping
	public ResponseEntity<List<UserDto>> findAll() {
		List<UserDto> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}

	//@PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_CLIENT')")
	@GetMapping(value = "/{id}")
	public ResponseEntity<UserDto> findById(@PathVariable Long id) {
		UserDto dto = service.findById(id);
		return ResponseEntity.ok().body(dto);
	}

	//@PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_CLIENT')")
	@GetMapping(value = "/me")
	public ResponseEntity<UserDto> findMe() {
		UserDto dto = service.findMe();
		return ResponseEntity.ok().body(dto);
	}
	
	@PostMapping
	public ResponseEntity<UserDto> insert(@RequestBody @Valid UserInsertDto dto) {
		UserDto newDto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(newDto.getId()).toUri();
		return ResponseEntity.created(uri).body(newDto);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<UserDto> update(@PathVariable Long id, @RequestBody @Valid UserUpdateDto dto) {
		UserDto newDto = service.update(id, dto);
		return ResponseEntity.ok().body(newDto);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
} 
