package br.com.fernandinesuplementos.loja.controllers;

import br.com.fernandinesuplementos.loja.DTOs.EmailDto;
import br.com.fernandinesuplementos.loja.DTOs.NewPasswordDto;
import br.com.fernandinesuplementos.loja.services.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/auth")
public class AuthController {

    @Autowired
    private AuthService authService;
    @PostMapping(value = "/recover-token")
    public ResponseEntity<Void> createRecoverToken(@Valid @RequestBody EmailDto body) {
        authService.createRecoverToken(body);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(value = "/new-password")
    public ResponseEntity<Void> saveNewPassword(@Valid @RequestBody NewPasswordDto body) {
        authService.saveNewPassword(body);
        return ResponseEntity.noContent().build();
    }
}
