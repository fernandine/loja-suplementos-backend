package br.com.fernandinesuplementos.loja.entities;

import br.com.fernandinesuplementos.loja.entities.enums.Flavors;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="tb_product_details")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDetails implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private Flavors flavors;
    private BigDecimal wheight;
    private String brand;
    private Boolean gluten;
    private Boolean lactose;
    private Boolean vegan;

    @OneToMany(mappedBy = "details")
    private List<Product> products = new ArrayList<>();

}
