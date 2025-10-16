package com.example.beneficiaryservice.web;

import com.example.beneficiaryservice.entities.Beneficiary;
import com.example.beneficiaryservice.repository.BeneficiaryRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/beneficiaries")
public class BeneficiaryRestController {
    private final BeneficiaryRepository repository;

    public BeneficiaryRestController(BeneficiaryRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Beneficiary> all() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Beneficiary> getOne(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Beneficiary create(@RequestBody Beneficiary b) {
        return repository.save(b);
    }

    @GetMapping("/byRib")
    public ResponseEntity<Beneficiary> getByRib(@RequestParam String rib) {
        return repository.findByRib(rib).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
}
