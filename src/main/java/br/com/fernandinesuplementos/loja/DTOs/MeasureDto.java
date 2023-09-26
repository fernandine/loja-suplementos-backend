package br.com.fernandinesuplementos.loja.DTOs;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MeasureDto implements Serializable {

    private Long id;
    private Double width;
    private Double height;
    private Double length;
    private Double weight;
    private Double insuranceValue;
    private Integer quantity;
}
