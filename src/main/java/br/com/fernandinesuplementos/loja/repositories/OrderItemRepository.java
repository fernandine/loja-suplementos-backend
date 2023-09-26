package br.com.fernandinesuplementos.loja.repositories;


import br.com.fernandinesuplementos.loja.entities.OrderItem;
import br.com.fernandinesuplementos.loja.entities.OrderItemPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, OrderItemPK> {

}
