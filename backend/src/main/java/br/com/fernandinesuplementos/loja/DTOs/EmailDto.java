package br.com.fernandinesuplementos.loja.DTOs;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class EmailDto {

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