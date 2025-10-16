package com.example.virementservice.repository;

import com.example.virementservice.entities.Virement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VirementRepository extends JpaRepository<Virement, Long> {
    List<Virement> findByBeneficiaryId(Long beneficiaryId);
}
