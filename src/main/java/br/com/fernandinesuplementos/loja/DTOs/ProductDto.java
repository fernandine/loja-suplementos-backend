package br.com.fernandinesuplementos.loja.DTOs;

import br.com.fernandinesuplementos.loja.entities.melhorEnvio.AdditionalServices;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto implements Serializable {

    private Long id;
    private String sku;
    private String name;
    private String description;
    private Double unitPrice;
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
    private MeasureDto measure;
    private AdditionalServices additionalServices;

}
