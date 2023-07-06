package br.com.fernandinesuplementos.loja.repositories;

import br.com.fernandinesuplementos.loja.entities.Discount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface DiscountRepository extends JpaRepository<Discount, Long> {

    @Query("SELECT d FROM Discount d WHERE code = :code")
    Optional<Discount> findByCode(@Param("code") String code);

    @Query("SELECT d FROM Discount d WHERE expirationDate = :date")
    List<Discount> getExpiringDiscounts(@Param("date") LocalDate date);

}