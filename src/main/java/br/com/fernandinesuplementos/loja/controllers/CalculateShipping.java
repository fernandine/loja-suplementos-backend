package br.com.fernandinesuplementos.loja.controllers;

import br.com.fernandinesuplementos.loja.entities.melhorEnvio.MelhorEnvioResponse;
import br.com.fernandinesuplementos.loja.services.api.MelhorEnvioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(value = "/shipment")
public class CalculateShipping {

    @Autowired
    private MelhorEnvioService service;

    @PostMapping("/consult")
    public Mono<ResponseEntity<MelhorEnvioResponse>> calculateShipping() {
        return service.calculateShipping()
                .map(response -> ResponseEntity.ok(response))
                .onErrorResume(error -> Mono.just(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()));
    }

}
