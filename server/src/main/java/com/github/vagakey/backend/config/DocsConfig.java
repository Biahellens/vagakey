package com.github.vagakey.backend.config;

import io.swagger.v3.oas.annotations.Hidden;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@Hidden
@RestController
@Configuration
public class DocsConfig {



    @Hidden
    @RequestMapping("/docs")
    public void apiDocumentation(HttpServletResponse response) throws IOException {
        LoggerConfig.getLogger().info("Acess Docs Swagger");
        response.sendRedirect("swagger-ui/index.html");
    }
    @Hidden
    @RequestMapping("/doc")
    public void apiDocumentation2(HttpServletResponse response) throws IOException {
        LoggerConfig.getLogger().debug("Acess Docs Swagger");
        response.sendRedirect("swagger-ui/index.html");
    }

}
