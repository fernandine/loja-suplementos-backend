package br.com.fernandinesuplementos.loja.controllers;

import br.com.fernandinesuplementos.loja.DTOs.ProductDto;
import br.com.fernandinesuplementos.loja.services.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/products")
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping
    public ResponseEntity<List<ProductDto>> findAll() {
        List<ProductDto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    // URL = /products/find?notFavorite=?
    @GetMapping("/find")
    public ResponseEntity<List<ProductDto>> find(
            @RequestParam(value = "notFavorite", defaultValue = "false") Boolean favorite) {
        List<ProductDto> list = service.findByFavorite(favorite);
        return ResponseEntity.ok().body(list);
    }

    // URL = /products/categories?name=?
    @GetMapping("/categories")
    public ResponseEntity<List<ProductDto>> findByNameCategory(@RequestParam("name") String name){
        return ResponseEntity.ok().body(service.findByName(name));
    }


    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> findById(@PathVariable Long id) {
        return ResponseEntity.ok().body(service.findById(id));
    }

    // URL = /products/best-sellers?limit=?
    @GetMapping("/best-sellers")
    public ResponseEntity<List<ProductDto>> getBestSellers(@RequestParam("limit") int limit) {
        List<ProductDto> bestSellers = service.getBestSellers(limit);
        return ResponseEntity.ok(bestSellers);
    }

    // URL = /products/most-recents?limit=?
    @GetMapping("/most-recents")
    public ResponseEntity<List<ProductDto>> getMostRecentProducts(@RequestParam("limit") int limit) {
        List<ProductDto> mostRecentProducts = service.findMostRecentProductsByCreationDate(limit);
        return ResponseEntity.ok(mostRecentProducts);
    }

//    // URL = /products/filter?brand=PUC&color=VERDE&size=P&category=5
//    @GetMapping("/filter")
//    public ResponseEntity<List<ProductDto>> filterProducts(
//            @RequestParam(name = "category", required = false) Long categoryId,
//            @RequestParam(name = "brand", required = false) List<Brands> productBrand,
//            @RequestParam(name = "color", required = false) List<Colors> productColor,
//            @RequestParam(name = "size", required = false) List<Sizes> productSizes
//    ) {
//        if (productBrand == null && productColor == null && productSizes == null && categoryId == null) {
//            // Se todos os parâmetros forem nulos, busca todos os produtos
//            List<ProductDto> allProducts = service.findAll();
//            return ResponseEntity.ok(allProducts);
//        } else {
//            // Caso contrário, faz a filtragem com base nos parâmetros fornecidos, incluindo a categoria
//            List<ProductDto> filteredProducts = service.filterProducts(productBrand, productColor, productSizes, categoryId);
//            return ResponseEntity.ok(filteredProducts);
//        }
//    }

    @PostMapping
    public ResponseEntity<ProductDto> insert(@Valid @RequestBody ProductDto dto) {
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<ProductDto> update(@PathVariable Long id, @Valid @RequestBody ProductDto dto) {
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}

