package br.com.fernandinesuplementos.loja.repositories;


import br.com.fernandinesuplementos.loja.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
}
