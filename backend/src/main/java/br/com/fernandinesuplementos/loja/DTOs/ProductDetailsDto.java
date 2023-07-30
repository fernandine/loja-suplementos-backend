package br.com.fernandinesuplementos.loja.DTOs;

import br.com.fernandinesuplementos.loja.entities.Product;
import br.com.fernandinesuplementos.loja.entities.enums.Flavors;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDetailsDto implements Serializable {

    private Long id;
    private Flavors flavors;
    private BigDecimal wheight;
    private String brand;
    private Boolean gluten;
    private Boolean lactose;
    private Boolean vegan;
}
