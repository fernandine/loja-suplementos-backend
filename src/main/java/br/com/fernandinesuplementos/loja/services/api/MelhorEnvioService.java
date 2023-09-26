package br.com.fernandinesuplementos.loja.services.api;

import br.com.fernandinesuplementos.loja.entities.enums.ApiTokenIntegracao;
import br.com.fernandinesuplementos.loja.entities.melhorEnvio.MelhorEnvioRequest;
import br.com.fernandinesuplementos.loja.entities.melhorEnvio.MelhorEnvioResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class MelhorEnvioService {
    private final WebClient webClient;

    public MelhorEnvioService() {
        this.webClient = WebClient.builder()
                .baseUrl(ApiTokenIntegracao.URL_MELHOR_ENVIO_SAND_BOX + "api/v2/me/shipment")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .defaultHeader(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE)
                .defaultHeader(HttpHeaders.USER_AGENT, "jfernandine@gmail.com")
                .build();
    }

    public Mono<MelhorEnvioResponse> calculateShipping() {
        MelhorEnvioRequest request = new MelhorEnvioRequest();

        return webClient.post()
                .uri("/calculate")
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + ApiTokenIntegracao.TOKEN_MELHOR_ENVIO_SAND_BOX)
                .body(BodyInserters.fromValue(request))
                .exchange()
                .flatMap(response -> {
                    if (response.statusCode().is2xxSuccessful()) {
                        return response.bodyToMono(MelhorEnvioResponse.class)
                                .doOnSuccess(responseData -> {
                                    System.out.println("Response: " + responseData.toString());
                                });
                    } else {
                        System.err.println("Error: " + response.statusCode());
                        return Mono.empty();
                    }
                })
                .onErrorResume(error -> {
                    error.printStackTrace();
                    return Mono.empty();
                });
    }

}

