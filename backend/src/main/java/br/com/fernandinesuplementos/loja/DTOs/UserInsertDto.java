package br.com.fernandinesuplementos.loja.DTOs;


import br.com.fernandinesuplementos.loja.services.validation.UserInsertValid;

@UserInsertValid
public class UserInsertDto extends UserDto {

	private String password;

	UserInsertDto() {
		super();
	}
	
	public String getPassword() {
		return password;
	}
}
