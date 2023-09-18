package com.github.vagakey.backend.service;

import com.github.vagakey.backend.dto.request.ClientePostRequest;
import com.github.vagakey.backend.dto.response.ClienteResponse;
import com.github.vagakey.backend.entity.ClienteEntity;
import com.github.vagakey.backend.mapper.ClienteMapper;
import com.github.vagakey.backend.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


import java.util.Objects;
import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    ClienteRepository clienteRepository;

    @Autowired
    ClienteMapper clienteMapper;

    public ClienteResponse post(ClientePostRequest request) {
        Optional<ClienteEntity> clienteEntity = clienteRepository.findByCpf(request.getCpf());
        if (clienteEntity.isEmpty()) {
            String encryptedPassword = new BCryptPasswordEncoder().encode(request.getSenha());
            ClienteEntity newclienteEntity = clienteMapper.convertRequestToEntity(request);
            newclienteEntity.setSenha(encryptedPassword);
            clienteRepository.saveAndFlush(newclienteEntity);
            return clienteMapper.convertEntityToResponse(newclienteEntity);
        }

        throw new ResponseStatusException(HttpStatus.CONFLICT,"CPF já cadastrado");
    }

    public ClienteResponse getById(String id) {
        Optional<ClienteEntity> clienteEntity = clienteRepository.findById(id);
        if (clienteEntity.isPresent()) {
            return clienteMapper.convertEntityToResponse(clienteEntity.get());
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    public ClienteResponse put(String id, ClientePostRequest request) {
        Optional<ClienteEntity> clienteEntity = clienteRepository.findById(id);
        if (clienteEntity.isPresent()) {
            if (!Objects.equals(request.getEmail(), "")) {
                clienteEntity.get().setEmail(request.getEmail());
            }
            if (!Objects.equals(request.getNome(), "")) {
                clienteEntity.get().setNome(request.getNome());
            }
            if (!Objects.equals(request.getSenha(), "")) {
                clienteEntity.get().setSenha(request.getSenha());
            }
            if (!Objects.equals(request.getTelefone(), "")) {
                clienteEntity.get().setTelefone(request.getTelefone());
            }
            clienteRepository.saveAndFlush(clienteEntity.get());
            return clienteMapper.convertEntityToResponse(clienteEntity.get());
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    public Boolean delete(String id) {
        Optional<ClienteEntity> clienteEntity = clienteRepository.findById(id);
        if(clienteEntity.isPresent()){
            clienteRepository.delete(clienteEntity.get());
            return true;
        }
        return false;
    }
}
