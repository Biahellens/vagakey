package com.github.vagakey.backend.mapper;

import com.github.vagakey.backend.dto.request.EmpresaPostRequest;
import com.github.vagakey.backend.dto.response.EmpresaResponse;
import com.github.vagakey.backend.entity.EmpresaEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmpresaMapper {

    @Autowired
    private ModelMapper modelMapper;

    public EmpresaEntity convertRequestToEntity(EmpresaPostRequest request) {
        return modelMapper.map(request,EmpresaEntity.class);
    }

    public EmpresaResponse convertEntityToResponse(EmpresaEntity newEmpresaEntity) {
        return modelMapper.map(newEmpresaEntity,EmpresaResponse.class);
    }
}
