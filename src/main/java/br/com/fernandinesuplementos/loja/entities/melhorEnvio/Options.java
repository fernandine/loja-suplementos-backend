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
public class Options implements Serializable {
    @JsonProperty(value = "insurance_value")
    private Double insuranceValue;
    private Boolean receipt;
    @JsonProperty(value = "own_hand")
    private Boolean ownHand;
}
