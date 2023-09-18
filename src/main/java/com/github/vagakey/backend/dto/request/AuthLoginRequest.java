package com.github.vagakey.backend.dto.request;

import lombok.Data;

@Data
public class AuthLoginRequest {

    private String login;
    private String senha;

}
