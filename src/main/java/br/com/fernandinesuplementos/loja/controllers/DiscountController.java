package br.com.fernandinesuplementos.loja.controllers;

import br.com.fernandinesuplementos.loja.DTOs.DiscountDto;
import br.com.fernandinesuplementos.loja.services.DiscountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.math.BigDecimal;
import java.net.URI;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(value = "/discounts")
public class DiscountController {

    @Autowired
    private DiscountService discountService;

    @GetMapping
    public ResponseEntity<List<DiscountDto>> findAll() {
        List<DiscountDto> list = discountService.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping("/apply")
    public ResponseEntity<DiscountDto> applyDiscount(
            @RequestParam(name = "code") String code,
            @RequestParam(name = "totalPrice") BigDecimal totalPrice,
            @RequestParam(name = "discountValue", required = false) BigDecimal discountValue){
        DiscountDto dto = discountService.applyDiscount(code, totalPrice, discountValue);
        return ResponseEntity.ok().body(dto);
    }

    @GetMapping("/expiring")
    public ResponseEntity<List<DiscountDto>> getExpiringDiscounts(
            @RequestParam(name = "date")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        List<DiscountDto> list = discountService.findExpiringDiscounts(date);
        return ResponseEntity.ok().body(list);
    }

    @PostMapping
    public ResponseEntity<DiscountDto> insert(@RequestBody DiscountDto dto) {
        dto = discountService.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }
}