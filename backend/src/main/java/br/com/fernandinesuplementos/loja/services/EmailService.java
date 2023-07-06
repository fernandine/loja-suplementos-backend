package br.com.fernandinesuplementos.loja.services;

import br.com.fernandinesuplementos.loja.DTOs.EmailDto;

public interface EmailService {

    void sendEmail(EmailDto dto);
}
