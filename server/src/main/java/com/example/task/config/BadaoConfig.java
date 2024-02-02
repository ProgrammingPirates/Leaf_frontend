package com.example.taskmanager.config;

import com.github.badao.repository.BadaoRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BadaoConfig {

    @Bean
    public BadaoRepository badaoRepository() {
        return new BadaoRepository();
    }
}
