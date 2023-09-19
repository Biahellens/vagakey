package com.github.vagakey.backend.repository;

import com.github.vagakey.backend.entity.ClienteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<ClienteEntity,String> {
    Optional<ClienteEntity> findByCpf(String cpf);
}
