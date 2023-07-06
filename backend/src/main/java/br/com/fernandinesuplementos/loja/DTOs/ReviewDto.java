package br.com.fernandinesuplementos.loja.DTOs;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewDto implements Serializable {

    private Long id;
    private String comment;
    private int rating;
    private UserDto user;
    private Long productId;

}
