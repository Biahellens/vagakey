package com.github.vagakey.backend.repository;

import com.github.vagakey.backend.entity.EmpresaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface AuthEmpresaRepository extends JpaRepository<EmpresaEntity,String> {

    UserDetails findByCnpj(String username);
}
