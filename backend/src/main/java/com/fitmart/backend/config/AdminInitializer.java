package com.fitmart.backend.config;

import com.fitmart.backend.entity.Role;
import com.fitmart.backend.entity.User;
import com.fitmart.backend.enums.RoleName;
import com.fitmart.backend.repository.RoleRepository;
import com.fitmart.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AdminInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {

        User admin = userRepository.findByEmail("admin@fitmart.com")
                .orElse(null);

        if (admin != null) {

            admin.setPassword(
                    passwordEncoder.encode("Admin123")
            );

            userRepository.save(admin);

            System.out.println("Admin password reset successfully.");
        }
    }
}