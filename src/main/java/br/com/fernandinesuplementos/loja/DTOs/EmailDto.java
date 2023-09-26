package br.com.fernandinesuplementos.loja.DTOs;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import java.io.Serializable;

public class EmailDto implements Serializable {

    @NotBlank(message = "Campo obrigatório")
    @Email(message = "Email inválido")
    private String email;

    public EmailDto() {
    }

    public EmailDto(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }
}