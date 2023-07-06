package br.com.fernandinesuplementos.loja.controllers;

import br.com.fernandinesuplementos.loja.DTOs.ProductDetailsDto;
import br.com.fernandinesuplementos.loja.services.ProductDetailsService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "product-details")
public class ProductDetailsController {

    @Autowired
    private ProductDetailsService service;

    @GetMapping
    public ResponseEntity<List<ProductDetailsDto>> findAll() {
        List<ProductDetailsDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDetailsDto> findById(@PathVariable Long id) {
        ProductDetailsDto dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    public ResponseEntity<ProductDetailsDto> insert(@RequestBody @Valid ProductDetailsDto dto) {
        ProductDetailsDto newDto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(newDto.getId()).toUri();
        return ResponseEntity.created(uri).body(newDto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<ProductDetailsDto> update(@PathVariable Long id, @RequestBody @Valid ProductDetailsDto dto) {
        ProductDetailsDto newDto = service.update(id, dto);
        return ResponseEntity.ok().body(newDto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
