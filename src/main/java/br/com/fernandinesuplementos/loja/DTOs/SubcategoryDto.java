package br.com.fernandinesuplementos.loja.DTOs;

import br.com.fernandinesuplementos.loja.entities.Category;
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
public class SubcategoryDto implements Serializable {

    private Long id;
    private String name;
}
