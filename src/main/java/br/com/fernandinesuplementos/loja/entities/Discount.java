package br.com.fernandinesuplementos.loja.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.Instant;

@Entity
@Table(name = "tb_discount")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Discount implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String code;

    @Column(name = "discount_value")
    private BigDecimal discountValue;

    @Column(name = "expiration_date",
            columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant expirationDate;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

}