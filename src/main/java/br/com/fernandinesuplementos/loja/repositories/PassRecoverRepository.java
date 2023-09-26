package br.com.fernandinesuplementos.loja.repositories;


import br.com.fernandinesuplementos.loja.entities.PasswordRecover;
import br.com.fernandinesuplementos.loja.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.List;

@Repository
public interface PassRecoverRepository extends JpaRepository<PasswordRecover, Long> {

    @Query("SELECT obj FROM PasswordRecover obj WHERE obj.token = :token AND obj.expiration > :now")
    List<PasswordRecover> searchValidTokens(String token, Instant now);
}
