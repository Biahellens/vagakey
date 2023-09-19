package com.github.vagakey.backend.config.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.github.vagakey.backend.entity.ClienteEntity;
import com.github.vagakey.backend.entity.EmpresaEntity;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenSecurity {

    @Value("${api.security.token.secret}")
    private String secret;

    @Value(("${app.name}"))
    private String appName;
    public String generateTokenClient(ClienteEntity clienteEntity){

        try{
            Algorithm algorithm = Algorithm.HMAC256(secret);
            String token = JWT.create()
                    .withIssuer(appName)
                    .withSubject(clienteEntity.getCpf())
                    .withExpiresAt(generateExpirationDate())
                    .sign(algorithm);
            return token;
        } catch (JWTCreationException e){
            throw new RuntimeException("ERROR while generation token: {}", e);

        }

    }

    public String generateTokenEmpresa(EmpresaEntity empresaEntity){

        try{
            Algorithm algorithm = Algorithm.HMAC256(secret);
            String token = JWT.create()
                    .withIssuer(appName)
                    .withSubject(empresaEntity.getCnpj())
                    .withExpiresAt(generateExpirationDate())
                    .sign(algorithm);
            return token;
        } catch (JWTCreationException e){
            throw new RuntimeException("ERROR while generation token: {}", e);

        }

    }

    public String validateToken(String token){

        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);
            return JWT.require(algorithm)
                    .withIssuer(appName)
                    .build().verify(token)
                    .getSubject();
        }catch (JWTVerificationException e){
            return "";

        }

    }

    private Instant generateExpirationDate(){
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }

}
