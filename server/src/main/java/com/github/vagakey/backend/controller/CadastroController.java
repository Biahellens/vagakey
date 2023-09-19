package com.github.vagakey.backend.controller;

import com.github.vagakey.backend.dto.request.ClientePostRequest;
import com.github.vagakey.backend.dto.request.EmpresaPostRequest;
import com.github.vagakey.backend.dto.response.ClienteResponse;
import com.github.vagakey.backend.dto.response.EmpresaResponse;
import com.github.vagakey.backend.service.ClienteService;
import com.github.vagakey.backend.service.EmpresaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/cadastro")
public class CadastroController {

    @Autowired
    ClienteService clienteService;

    @Autowired
    EmpresaService empresaService;

    @PostMapping("/cliente")
    public ResponseEntity<ClienteResponse> postCliente(@Valid @RequestBody ClientePostRequest request){
        ClienteResponse response = clienteService.post(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/cliente/{id}")
    public ResponseEntity<ClienteResponse> getByIdCliente(@PathVariable String id){
        ClienteResponse response = clienteService.getById(id);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PutMapping("/cliente/{id}")
    public ResponseEntity<ClienteResponse> putCliente(@PathVariable String id,@RequestBody ClientePostRequest request){
        ClienteResponse response = clienteService.put(id,request);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @DeleteMapping("/cliente/{id}")
    public ResponseEntity<Boolean> deleteCliente(@PathVariable String id){
        Boolean status = clienteService.delete(id);
        if(Boolean.FALSE.equals(status)){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.status(HttpStatus.OK).body(status);
    }

    @PostMapping("/empresa")
    public ResponseEntity<EmpresaResponse> postEmpresa(@Valid @RequestBody EmpresaPostRequest request){
        EmpresaResponse response = empresaService.post(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/empresa/{id}")
    public ResponseEntity<EmpresaResponse> getByIdEmpresa(@PathVariable String id){
        EmpresaResponse response = empresaService.getById(id);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PutMapping("/empresa/{id}")
    public ResponseEntity<EmpresaResponse> putEmpresa(@PathVariable String id,@RequestBody EmpresaPostRequest request){
        EmpresaResponse response = empresaService.put(id,request);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @DeleteMapping("/empresa/{id}")
    public ResponseEntity<Boolean> deleteEmpresa(@PathVariable String id){
        Boolean status = empresaService.delete(id);
        if(Boolean.FALSE.equals(status)){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.status(HttpStatus.OK).body(status);
    }

}
