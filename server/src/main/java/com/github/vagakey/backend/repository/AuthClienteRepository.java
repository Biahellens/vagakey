package com.github.vagakey.backend.repository;

import com.github.vagakey.backend.entity.ClienteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface AuthClienteRepository extends JpaRepository<ClienteEntity,String> {

    UserDetails findByCpf(String username);
}
