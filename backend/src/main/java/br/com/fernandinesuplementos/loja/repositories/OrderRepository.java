package br.com.fernandinesuplementos.loja.repositories;


import br.com.fernandinesuplementos.loja.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
