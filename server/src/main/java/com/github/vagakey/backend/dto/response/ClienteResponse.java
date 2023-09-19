package com.github.vagakey.backend.dto.response;

import com.github.vagakey.backend.enums.RoleEnum;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClienteResponse {

    private String id;
    private String nome;
    private String cpf;
    private String email;
    private String telefone;
    private String senha;
    private RoleEnum role;
}
