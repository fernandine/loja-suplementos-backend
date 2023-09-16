package br.com.fernandinesuplementos.loja.services;

import br.com.fernandinesuplementos.loja.DTOs.EmailDto;
import br.com.fernandinesuplementos.loja.DTOs.NewPasswordDto;
import br.com.fernandinesuplementos.loja.entities.PasswordRecover;
import br.com.fernandinesuplementos.loja.entities.User;
import br.com.fernandinesuplementos.loja.repositories.PassRecoverRepository;
import br.com.fernandinesuplementos.loja.repositories.UserRepository;
import br.com.fernandinesuplementos.loja.services.exceptions.ForbiddenException;
import br.com.fernandinesuplementos.loja.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Service
public class AuthService {

    @Value("${email.password-recover.token.minutes}")
    private Long tokenMinutes;
    @Value("${email.password-recover.uri}")
    private String recoverUri;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private PassRecoverRepository passRecoverRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private EmailService emailService;

//    public void validateSelfOrAdmin(long userId) {
//        User me = userService.authenticated();
//        if (!me.hasRole("ROLE_ADMIN") && !me.getId().equals(userId)) {
//            throw new ForbiddenException("Access denied");
//        }
//    }

    @Transactional
    public void createRecoverToken(EmailDto body) {
        User user = userRepository.findByEmail(body.getEmail());
        if (user == null) {
            throw new ResourceNotFoundException("Email não encontrado!");
        }

        String token = UUID.randomUUID().toString();

        PasswordRecover entity = new PasswordRecover();
        entity.setEmail(body.getEmail());
        entity.setToken(token);
        entity.setExpiration(Instant.now().plusSeconds(tokenMinutes * 60L));
        passRecoverRepository.save(entity);

        String text = "Acesse o link para definir uma nova senha\n\n"
                + recoverUri + token + ". Validade de " + tokenMinutes + " minutos";
        emailService.sendEmail(body.getEmail(), "Recuperação de Senha", text );
    }

    @Transactional
    public void saveNewPassword(NewPasswordDto body) {
        List<PasswordRecover> result = passRecoverRepository.searchValidTokens(body.getToken(),  Instant.now());
        if (result.size() == 0) {
            throw new ResourceNotFoundException("Token inválido!");
        }
        User user = userRepository.findByEmail(result.get(0).getEmail());
        user.setPassword(passwordEncoder.encode(body.getPassword()));
        userRepository.save(user);
    }
}