package dmytro.zavorotnii.LR2.webflux;

import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;
import reactor.core.publisher.Mono;

public class WebClientExample {

    private final WebClient webClient;

    public WebClientExample() {
        this.webClient = WebClient.builder()
                .baseUrl("https://dummyjson.com")
                .build();
    }

    public String getData() {
        String uri = UriComponentsBuilder.fromUriString("/users/search")
                .queryParam("q", "John")
                .toUriString();

        Mono<String> response = webClient.get()
                .uri(uri)
                .retrieve()
                .bodyToMono(String.class);

        return response.block();
    }
}
