package com.example.virementservice.feign;

import com.example.virementservice.feign.dto.BeneficiaryDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "beneficiary-service", url = "${beneficiary.service.url:}")
public interface BeneficiaryClient {
    @GetMapping("/api/beneficiaries/{id}")
    BeneficiaryDTO getById(@PathVariable("id") Long id);

    @GetMapping("/api/beneficiaries/byRib")
    BeneficiaryDTO getByRib(@RequestParam("rib") String rib);
}