package com.github.vagakey.backend.repository;

import com.github.vagakey.backend.entity.EmpresaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmpresaRepository extends JpaRepository<EmpresaEntity,String> {
    Optional<EmpresaEntity> findByCnpj(String cnpj);
}
