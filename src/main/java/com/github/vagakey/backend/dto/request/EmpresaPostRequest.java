package com.github.vagakey.backend.dto.request;

import com.github.vagakey.backend.enums.RoleEnum;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmpresaPostRequest {

    private String id;
    private String razaoSocial;
    private String cnpj;
    @Email
    private String email;
    private String telefone;
    private String senha;
    private RoleEnum role;

}
