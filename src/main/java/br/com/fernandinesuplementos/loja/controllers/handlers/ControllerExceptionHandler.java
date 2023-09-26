package br.com.fernandinesuplementos.loja.controllers.handlers;

import java.time.Instant;

import br.com.fernandinesuplementos.loja.DTOs.CustomErrorDto;
import br.com.fernandinesuplementos.loja.services.exceptions.EmailException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


import jakarta.servlet.http.HttpServletRequest;

@ControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(EmailException.class)
    public ResponseEntity<CustomErrorDto> email(EmailException e, HttpServletRequest request) {
        HttpStatus status = HttpStatus.BAD_REQUEST;
        CustomErrorDto err = new CustomErrorDto(Instant.now(), status.value(), e.getMessage(), request.getRequestURI());
        return ResponseEntity.status(status).body(err);
    }
}
