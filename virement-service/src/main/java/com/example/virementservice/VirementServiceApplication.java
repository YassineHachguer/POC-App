package com.example.virementservice;

import com.example.virementservice.entities.Virement;
import com.example.virementservice.repository.VirementRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

import java.math.BigDecimal;
import java.util.Date;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class VirementServiceApplication {
	public static void main(String[] args) {
		SpringApplication.run(VirementServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner seed(VirementRepository repo) {
		return args -> {
			repo.save(new Virement(null, 1L, "FR761234598765", new BigDecimal("150.00"), "Paiement facture", new Date(), Virement.Type.NORMAL));
			repo.save(new Virement(null, 2L, "FR001122334455", new BigDecimal("50.50"), "Transfert ami", new Date(), Virement.Type.INSTANT));
			repo.findAll().forEach(System.out::println);
		};
	}
}
