package com.github.vagakey.backend.dto.request;

import com.github.vagakey.backend.enums.RoleEnum;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ClientePostRequest {

    private String id;
    private String nome;
    private String cpf;
    @Email
    private String email;
    private String telefone;
    private String senha;
    private RoleEnum role;

}
