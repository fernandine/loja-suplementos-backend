package br.com.fernandinesuplementos.loja.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="tb_product")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "sku")
    private String sku;
    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;
    @Column(name = "unit_price")
    private BigDecimal unitPrice;
    private Long EAN;
    @Column(name = "image")
    private String image;
    @Column(name = "favorite")
    private boolean favorite;
    private boolean feature;
    private boolean sale;
    @Column(name = "date_created",
            columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant dateCreated;
    @Column(name = "units_in_stock")
    private int unitsInStock;
    @Column(name = "sales_count")
    private int salesCount;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "subcategory_id")
    private Subcategory subcategory;
    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<Review> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "product")
    private List<Discount> discounts = new ArrayList<>();
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "details_id")
    private ProductDetails details;
}
