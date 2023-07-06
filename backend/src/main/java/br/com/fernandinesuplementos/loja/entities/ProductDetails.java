package br.com.fernandinesuplementos.loja.entities;

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
    private String flavor; //sabor
    private BigDecimal wheight; // peso
    private String brand;
    private Boolean gluten;
    private Boolean lactose;
    private Boolean vegan;
    @OneToMany(mappedBy = "details")
    private List<Product> products = new ArrayList<>();

}
