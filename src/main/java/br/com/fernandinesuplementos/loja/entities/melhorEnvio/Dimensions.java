package br.com.fernandinesuplementos.loja.entities.melhorEnvio;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Dimensions implements Serializable {

    private Integer height;
    private Integer width;
    private Integer length;
    private String weight;
    @JsonProperty(value = "insurance_value")
    private String insuranceValue;

}
