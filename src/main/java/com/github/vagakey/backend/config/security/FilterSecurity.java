package com.github.vagakey.backend.config.security;

import com.github.vagakey.backend.repository.AuthClienteRepository;
import com.github.vagakey.backend.repository.AuthEmpresaRepository;
import com.github.vagakey.backend.utils.CpfCnpjValidator;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class FilterSecurity extends OncePerRequestFilter {

    @Autowired
    TokenSecurity tokenSecurity;

    @Autowired
    AuthClienteRepository authClienteRepository;

    @Autowired
    AuthEmpresaRepository authEmpresaRepository;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        var token = this.recoverToken(request);
        if(token!=null){



            var subject = tokenSecurity.validateToken(token);

            if(CpfCnpjValidator.isCpf(subject)){
                UserDetails userDetails = authClienteRepository.findByCpf(subject);
                var authentication = new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(authentication);
            } else {
                UserDetails userDetails1 = authEmpresaRepository.findByCnpj(subject);
                var authentication = new UsernamePasswordAuthenticationToken(userDetails1,null,userDetails1.getAuthorities());
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }




        }
        filterChain.doFilter(request,response);
    }

    private String recoverToken(HttpServletRequest request){
        var authHeader = request.getHeader("Authorization");
        if(authHeader==null) return null;
        return authHeader.replace("Bearer ","");
    }
}
