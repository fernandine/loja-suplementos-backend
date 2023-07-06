package br.com.fernandinesuplementos.loja.config.integrations;

import br.com.fernandinesuplementos.loja.services.EmailService;
import br.com.fernandinesuplementos.loja.services.MockEmailService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile("test")
public class TestConfig {

    @Bean
    public EmailService emailService() {
        return new MockEmailService();
    }
}
