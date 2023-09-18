package com.github.vagakey.backend.controller;

import com.github.vagakey.backend.config.LoggerConfig;
import com.github.vagakey.backend.config.security.TokenSecurity;
import com.github.vagakey.backend.dto.request.AuthLoginRequest;
import com.github.vagakey.backend.dto.response.AuthLoginResponse;
import com.github.vagakey.backend.entity.ClienteEntity;
import com.github.vagakey.backend.entity.EmpresaEntity;
import com.github.vagakey.backend.repository.ClienteRepository;
import com.github.vagakey.backend.repository.EmpresaRepository;
import com.github.vagakey.backend.utils.CpfCnpjValidator;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    TokenSecurity tokenSecurity;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private EmpresaRepository empresaRepository;

    @PostMapping("/login/empresa")
    public ResponseEntity<AuthLoginResponse> loginEmpresa(@RequestBody AuthLoginRequest request){

        LoggerConfig.getLogger().info("Auth login");


        LoggerConfig.getLogger().info("IsCNPJ");

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        Optional<EmpresaEntity> empresaEntity = empresaRepository.findByCnpj(request.getLogin());
        if(empresaEntity.isPresent() && encoder.matches(request.getSenha(), empresaEntity.get().getPassword())){

                var token = tokenSecurity.generateTokenEmpresa(empresaEntity.get());
                LoggerConfig.getLogger().info("Token: {}", token);
                AuthLoginResponse response = new AuthLoginResponse();
                response.setToken(token);
                LoggerConfig.getLogger().info("Response: {}", response);
                return ResponseEntity.ok().body(response);

        }

        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();

    }

    @PostMapping("/login/cliente")
    public ResponseEntity<AuthLoginResponse> loginCliente(@RequestBody AuthLoginRequest request){

        LoggerConfig.getLogger().info("Auth login");


        LoggerConfig.getLogger().info("IsCPF");

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        Optional<ClienteEntity> clienteEntity = clienteRepository.findByCpf(request.getLogin());
        if(clienteEntity.isPresent() && encoder.matches(request.getSenha(), clienteEntity.get().getPassword())){

            var token = tokenSecurity.generateTokenClient(clienteEntity.get());
            LoggerConfig.getLogger().info("Token: {}", token);
            AuthLoginResponse response = new AuthLoginResponse();
            response.setToken(token);
            LoggerConfig.getLogger().info("Response: {}", response);
            return ResponseEntity.ok().body(response);

        }

        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

}

