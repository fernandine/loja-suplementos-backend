package br.com.fernandinesuplementos.loja.DTOs;


import br.com.fernandinesuplementos.loja.services.validation.UserInsertValid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@UserInsertValid
public class UserInsertDto extends UserDto {

	@NotBlank(message = "Campo obrigatório")
	//@Pattern(regexp = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/")
	@Size(min = 8, message = "Deve ter no mínimo 8 caracteres")
	private String password;

	UserInsertDto() {
		super();
	}
	
	public String getPassword() {
		return password;
	}
}
