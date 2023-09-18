package com.github.vagakey.backend.mapper;

import com.github.vagakey.backend.dto.request.ClientePostRequest;
import com.github.vagakey.backend.dto.response.ClienteResponse;
import com.github.vagakey.backend.entity.ClienteEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteMapper {

    @Autowired
    private ModelMapper modelMapper;

    public ClienteEntity convertRequestToEntity(ClientePostRequest request) {
        return modelMapper.map(request,ClienteEntity.class);
    }

    public ClienteResponse convertEntityToResponse(ClienteEntity newclienteEntity) {
        return modelMapper.map(newclienteEntity,ClienteResponse.class);
    }
}
