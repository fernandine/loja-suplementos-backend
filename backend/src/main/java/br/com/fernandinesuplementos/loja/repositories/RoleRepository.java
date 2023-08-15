package br.com.fernandinesuplementos.loja.repositories;


import br.com.fernandinesuplementos.loja.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    Role findByAuthority(String authority);
}
