package br.com.fernandinesuplementos.loja.repositories;

import br.com.fernandinesuplementos.loja.entities.Measure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MeasuresRepository extends JpaRepository<Measure, Long> {
}
