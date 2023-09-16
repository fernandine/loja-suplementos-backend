package br.com.fernandinesuplementos.loja.DTOs;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class NewPasswordDto {

    @NotBlank(message = "Campo obrigatório")
    private String token;
    @NotBlank(message = "Campo obrigatório")
    //@Pattern(regexp = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/")
    @Size(min = 8, message = "Deve ter no mínimo 8 caracteres")
    private String password;

    public NewPasswordDto() {}

    public NewPasswordDto(String token, String password) {
        this.token = token;
        this.password = password;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
