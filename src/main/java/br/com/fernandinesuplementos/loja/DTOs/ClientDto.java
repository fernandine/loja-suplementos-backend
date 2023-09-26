package br.com.fernandinesuplementos.loja.DTOs;

import br.com.fernandinesuplementos.loja.entities.Address;
import br.com.fernandinesuplementos.loja.entities.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ClientDto implements Serializable {

	private Long id;
	@NotBlank(message = "Campo obrigatório")
	private String firstname;
	private String lastname;
	private String cpf;
	private String phone;
	@Email(message = "Favor entrar com email válido")
	private String email;
	private List<AddressDto> addressList = new ArrayList<>();

	public ClientDto(Long id, String firstname, String lastname, String cpf, String phone, String email) {
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.cpf = cpf;
		this.phone = phone;
		this.email = email;
	}

	public ClientDto(User entity) {
		id = entity.getId();
		firstname = entity.getFirstname();
		lastname = entity.getLastname();
		email = entity.getEmail();
		phone = entity.getPhone();
		cpf = entity.getCpf();

		for (Address address : entity.getAddressList()) {
			AddressDto addressDto = new AddressDto(address);
			addressList.add(addressDto);
		}
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<AddressDto> getAddressList() {
		return addressList;
	}

	public void setAddressList(List<AddressDto> addressList) {
		this.addressList = addressList;
	}
}