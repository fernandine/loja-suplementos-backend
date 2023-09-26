package br.com.fernandinesuplementos.loja.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tb_price_range")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PriceRange {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "min_price")
    private BigDecimal minPrice;
    @Column(name = "max_price")
    private BigDecimal maxPrice;
    @OneToMany(mappedBy = "priceRange")
    private List<Product> products = new ArrayList<>();
}
