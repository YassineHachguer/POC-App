package com.example.virementservice.feign.dto;

import lombok.Data;

@Data
public class BeneficiaryDTO {
    private Long id;
    private String nom;
    private String prenom;
    private String rib;
    private String type;
}
