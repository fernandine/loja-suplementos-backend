package br.com.fernandinesuplementos.loja.DTOs;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.Instant;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DiscountDto implements Serializable {

    private Long id;
    private String code;
    private BigDecimal discountValue;
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant expirationDate;
    private Long productId;
}

