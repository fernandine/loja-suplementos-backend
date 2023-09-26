package br.com.fernandinesuplementos.loja.repositories;

import br.com.fernandinesuplementos.loja.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
