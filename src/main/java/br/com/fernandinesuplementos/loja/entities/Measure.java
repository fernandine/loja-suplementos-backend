package br.com.fernandinesuplementos.loja.entities;

import br.com.fernandinesuplementos.loja.entities.Product;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="tb_measures")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Measure implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double width;
    private Double height;
    @Column(name= "tb_length")
    private Double length;
    private Double weight;
    @Column(name= "insurance_value")
    private Double insuranceValue;
    private Integer quantity;

    @OneToMany(mappedBy = "measure")
    private List<Product> products = new ArrayList<>();
}
