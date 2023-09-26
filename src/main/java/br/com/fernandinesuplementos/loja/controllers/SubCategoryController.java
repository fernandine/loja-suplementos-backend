package br.com.fernandinesuplementos.loja.controllers;

import br.com.fernandinesuplementos.loja.DTOs.SubcategoryDto;
import br.com.fernandinesuplementos.loja.services.SubCategoryService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/subcategories")
public class SubCategoryController {

    @Autowired
    private SubCategoryService service;

    @GetMapping
    public ResponseEntity<List<SubcategoryDto>> findAll() {
        List<SubcategoryDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SubcategoryDto> findById(@PathVariable Long id) {
        SubcategoryDto dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    public ResponseEntity<SubcategoryDto> insert(@RequestBody @Valid SubcategoryDto dto) {
        SubcategoryDto newDto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(newDto.getId()).toUri();
        return ResponseEntity.created(uri).body(newDto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<SubcategoryDto> update(@PathVariable Long id, @RequestBody @Valid SubcategoryDto dto) {
        SubcategoryDto newDto = service.update(id, dto);
        return ResponseEntity.ok().body(newDto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
