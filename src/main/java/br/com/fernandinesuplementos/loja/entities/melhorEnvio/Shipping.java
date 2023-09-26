package br.com.fernandinesuplementos.loja.entities.melhorEnvio;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Shipping implements Serializable {

    private Integer id;
    private String name;
    private String price;
    @JsonProperty(value = "custom_price")
    private String customPrice;
    private String discount;
    private String currency;
    @JsonProperty(value = "delivery_time")
    private Integer deliveryTime;
    @JsonProperty(value = "delivery_range")
    private DeliveryRange deliveryRange;
    private Integer customDeliveryTime;
    private CustomDeliveryRange customDeliveryRange;
    private Packages packages;
    private Dimensions dimensions;
}
