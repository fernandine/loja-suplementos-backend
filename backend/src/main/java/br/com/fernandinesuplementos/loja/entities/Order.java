package br.com.fernandinesuplementos.loja.entities;

import br.com.fernandinesuplementos.loja.entities.enums.StatusOrder;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.Instant;


@Entity
@Table(name = "tb_order")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant moment;
    @Column(name = "status_order")
    private StatusOrder statusOrder;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
