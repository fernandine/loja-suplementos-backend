package br.com.fernandinesuplementos.loja.DTOs;

import br.com.fernandinesuplementos.loja.entities.Order;
import br.com.fernandinesuplementos.loja.entities.OrderItem;
import br.com.fernandinesuplementos.loja.entities.OrderStatus;
import jakarta.validation.constraints.NotEmpty;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

public class OrderDto {

	private Long id;
	private Instant moment;
	private OrderStatus status;
	
	private ClientDto client;
	
	private PaymentDto payment;
	
	@NotEmpty(message = "Deve ter pelo menos um item")
	private List<OrderItemDto> items = new ArrayList<>();

	public OrderDto(Long id, Instant moment, OrderStatus status, ClientDto client, PaymentDto payment) {
		this.id = id;
		this.moment = moment;
		this.status = status;
		this.client = client;
		this.payment = payment;
	}
	
	public OrderDto(Order entity) {
		this.id = entity.getId();
		this.moment = entity.getMoment();
		this.status = entity.getStatus();
		this.client = new ClientDto(entity.getClient());
		this.payment = (entity.getPayment() == null) ? null : new PaymentDto(entity.getPayment());
		for (OrderItem item : entity.getItems()) {
			OrderItemDto itemDto = new OrderItemDto(item);
			items.add(itemDto);
		}
 	}

	public Long getId() {
		return id;
	}

	public Instant getMoment() {
		return moment;
	}

	public OrderStatus getStatus() {
		return status;
	}

	public ClientDto getClient() {
		return client;
	}

	public PaymentDto getPayment() {
		return payment;
	}

	public List<OrderItemDto> getItems() {
		return items;
	}
	
	public Double getTotal() {
		double sum = 0.0;
		for (OrderItemDto item : items) {
			sum += item.getSubTotal();
		}
		return sum;
	}
}
