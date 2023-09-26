package br.com.fernandinesuplementos.loja.entities.melhorEnvio;

import br.com.fernandinesuplementos.loja.DTOs.MeasureDto;
import br.com.fernandinesuplementos.loja.DTOs.ProductDto;
import br.com.fernandinesuplementos.loja.entities.Measure;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MelhorEnvioRequest implements Serializable {

    private From from;
    private To to;
    private List<ProductDto> products;
    private Options options;

}
