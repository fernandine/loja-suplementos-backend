package br.com.fernandinesuplementos.loja.DTOs;

import br.com.fernandinesuplementos.loja.entities.Payment;

import java.io.Serializable;
import java.time.Instant;

public class PaymentDto implements Serializable {

	private Long id;
	private Instant moment;
	
	public PaymentDto(Long id, Instant moment) {
		this.id = id;
		this.moment = moment;
	}
	
	public PaymentDto(Payment entity) {
		id = entity.getId();
		moment = entity.getMoment();
	}

	public Long getId() {
		return id;
	}

	public Instant getMoment() {
		return moment;
	}
}
