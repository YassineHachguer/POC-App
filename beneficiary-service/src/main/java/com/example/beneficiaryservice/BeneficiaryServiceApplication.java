package com.example.beneficiaryservice;

import com.example.beneficiaryservice.entities.Beneficiary;
import com.example.beneficiaryservice.repository.BeneficiaryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
public class BeneficiaryServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(BeneficiaryServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner start(BeneficiaryRepository repository) {
		return args -> {
			repository.save(new Beneficiary(null, "Yassine", "Yassine", "FR761234598765", Beneficiary.Type.PHYSIQUE));
			repository.save(new Beneficiary(null, "ALi", "Ali", "FR001122334455", Beneficiary.Type.MORALE));
			repository.save(new Beneficiary(null, "Saad", "Saad", "FR0011223347838", Beneficiary.Type.MORALE));
			repository.findAll().forEach(System.out::println);
		};
	}
}