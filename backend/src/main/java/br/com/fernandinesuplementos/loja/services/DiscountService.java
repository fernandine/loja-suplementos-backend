package br.com.fernandinesuplementos.loja.services;

import br.com.fernandinesuplementos.loja.DTOs.DiscountDto;
import br.com.fernandinesuplementos.loja.entities.Discount;
import br.com.fernandinesuplementos.loja.repositories.DiscountRepository;
import br.com.fernandinesuplementos.loja.repositories.ProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DiscountService {

    @Autowired
    private DiscountRepository discountRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Transactional(readOnly = true)
    public List<DiscountDto> findAll() {
        List<Discount> list = discountRepository.findAll();
        return list.stream()
                .map(order -> modelMapper.map(order, DiscountDto.class))
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<DiscountDto> findExpiringDiscounts(LocalDate date) {
        List<Discount> list = discountRepository.getExpiringDiscounts(date);
        return list.stream()
                .map(order -> modelMapper.map(order, DiscountDto.class))
                .collect(Collectors.toList());
    }

    public DiscountDto applyDiscount(String code, BigDecimal totalPrice, BigDecimal discountValue) {
        Optional<Discount> optionalDiscount = discountRepository.findByCode(code);

        if (optionalDiscount.isPresent()) {
            Discount discount = optionalDiscount.get();

            // Verifica se o cupom ainda é válido
            if (discount.getExpirationDate().isAfter(Instant.now())) {
                BigDecimal discountPercentage = discount.getDiscountValue();
                BigDecimal discountAmount = totalPrice.multiply(discountPercentage);

                ModelMapper modelMapper = new ModelMapper();
                DiscountDto dto = modelMapper.map(discount, DiscountDto.class);

                // Cria e retorna um DTO com as informações do desconto aplicado
                dto.setDiscountValue(discountPercentage);
                return dto;
            }
        }
        // Se o cupom não for válido ou não existir, retorna nulo
        return null;
    }


    @Transactional
    public DiscountDto insert(DiscountDto dto) {
        Discount entity = new Discount();

        entity.setCode(dto.getCode());
        entity.setDiscountValue(dto.getDiscountValue());
        entity.setExpirationDate(dto.getExpirationDate());

        entity = discountRepository.save(entity);
        return modelMapper.map(entity, DiscountDto.class);
    }
}