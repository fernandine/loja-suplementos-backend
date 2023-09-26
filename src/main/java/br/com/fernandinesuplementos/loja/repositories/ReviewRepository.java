package br.com.fernandinesuplementos.loja.repositories;

import br.com.fernandinesuplementos.loja.entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

}
