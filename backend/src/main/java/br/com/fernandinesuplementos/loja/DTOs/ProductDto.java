package br.com.fernandinesuplementos.loja.DTOs;

import br.com.fernandinesuplementos.loja.entities.Category;
import br.com.fernandinesuplementos.loja.entities.Subcategory;
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
public class ProductDto implements Serializable {

    private Long id;
    private String sku;
    private String name;
    private String description;
    private BigDecimal unitPrice;
    private Long EAN;
    private String image;
    private boolean favorite;
    private boolean feature;
    private boolean sale;
    private int unitsInStock;
    private int salesCount;
    private CategoryDto category;
    private SubcategoryDto subcategory;
    private ProductDetailsDto details;
}
