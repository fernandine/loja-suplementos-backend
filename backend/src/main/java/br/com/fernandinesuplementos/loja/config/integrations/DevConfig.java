package br.com.fernandinesuplementos.loja.config.integrations;

import br.com.fernandinesuplementos.loja.services.EmailService;
import br.com.fernandinesuplementos.loja.services.SendGridEmailService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile("dev")
public class DevConfig {

    @Bean
    public EmailService emailService() {
        return new SendGridEmailService();
    }
}
