package br.com.fernandinesuplementos.loja.DTOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDto implements Serializable {

    private Long id;
    private String name;
}
