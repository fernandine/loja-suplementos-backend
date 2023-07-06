package br.com.fernandinesuplementos.loja.DTOs;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDate;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto implements Serializable {

    private Long id;
    private String firstName;
    private String lastName;
    private String cpf;
    private String phone;
    private Instant birthDay;
    @Email
    private String email;
    private Set<RoleDto> roles;
    private Set<AddressDto> addressList;

}