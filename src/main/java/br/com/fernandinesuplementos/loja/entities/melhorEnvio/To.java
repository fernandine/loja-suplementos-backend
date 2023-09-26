package br.com.fernandinesuplementos.loja.entities.melhorEnvio;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class To implements Serializable {
    @JsonProperty(value = "postal_code")
    private String postalCode;
}

