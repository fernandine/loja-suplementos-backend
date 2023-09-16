package br.com.fernandinesuplementos.loja.repositories;

import br.com.fernandinesuplementos.loja.entities.User;
import br.com.fernandinesuplementos.loja.projections.UserDetailsProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query(nativeQuery = true, value = """
				SELECT tb_user.email AS username, tb_user.password, tb_role.id AS roleId, tb_role.authority
				FROM tb_user
				INNER JOIN tb_user_role ON tb_user.id = tb_user_role.user_id
				INNER JOIN tb_role ON tb_role.id = tb_user_role.role_id
				WHERE tb_user.email = :email
			""")
	List<UserDetailsProjection> searchUserAndRolesByEmail(String email);

	User findByEmail(String email);

//	@Query("SELECT u.firstname FROM User u WHERE u.email = :email")
//	String findFirstnameByEmail(String email);

//	@Query("SELECT u.id FROM User u WHERE u.email = :email")
//	Long findIdByEmail(String email);
}
