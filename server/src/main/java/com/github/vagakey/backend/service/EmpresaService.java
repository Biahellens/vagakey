package com.github.vagakey.backend.service;


import com.github.vagakey.backend.dto.request.EmpresaPostRequest;
import com.github.vagakey.backend.dto.response.EmpresaResponse;
import com.github.vagakey.backend.entity.EmpresaEntity;
import com.github.vagakey.backend.mapper.EmpresaMapper;
import com.github.vagakey.backend.repository.EmpresaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Objects;
import java.util.Optional;

@Service
public class EmpresaService {
    
    @Autowired
    EmpresaRepository empresaRepository;

    @Autowired
    EmpresaMapper empresaMapper;

    public EmpresaResponse post(EmpresaPostRequest request) {
        Optional<EmpresaEntity> empresaEntity = empresaRepository.findByCnpj(request.getCnpj());
        if (empresaEntity.isEmpty()) {
            String encryptedPassword = new BCryptPasswordEncoder().encode(request.getSenha());
            EmpresaEntity newEmpresaEntity = empresaMapper.convertRequestToEntity(request);
            newEmpresaEntity.setSenha(encryptedPassword);
            empresaRepository.saveAndFlush(newEmpresaEntity);
            return empresaMapper.convertEntityToResponse(newEmpresaEntity);
        }

        throw new ResponseStatusException(HttpStatus.CONFLICT,"CNPJ já cadastrado");
    }

    public Boolean delete(String id) {
        Optional<EmpresaEntity> empresaEntity = empresaRepository.findById(id);
        if(empresaEntity.isPresent()){
            empresaRepository.delete(empresaEntity.get());
            return true;
        }
        return false;
    }

    public EmpresaResponse put(String id, EmpresaPostRequest request) {
        Optional<EmpresaEntity> empresaEntity = empresaRepository.findById(id);
        if (empresaEntity.isPresent()) {
            if (!Objects.equals(request.getEmail(), "")) {
                empresaEntity.get().setEmail(request.getEmail());
            }
            if (!Objects.equals(request.getRazaoSocial(), "")) {
                empresaEntity.get().setRazaoSocial(request.getRazaoSocial());
            }
            if (!Objects.equals(request.getSenha(), "")) {
                empresaEntity.get().setSenha(request.getSenha());
            }
            if (!Objects.equals(request.getTelefone(), "")) {
                empresaEntity.get().setTelefone(request.getTelefone());
            }
            empresaRepository.saveAndFlush(empresaEntity.get());
            return empresaMapper.convertEntityToResponse(empresaEntity.get());
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    public EmpresaResponse getById(String id) {
        Optional<EmpresaEntity> empresaEntity = empresaRepository.findById(id);
        if (empresaEntity.isPresent()) {
            return empresaMapper.convertEntityToResponse(empresaEntity.get());
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }
}
