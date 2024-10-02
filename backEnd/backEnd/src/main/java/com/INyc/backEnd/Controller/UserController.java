package com.INyc.backEnd.Controller;


import com.INyc.backEnd.Users.User;
import com.INyc.backEnd.Users.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/INyc")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/Login")
    public List<User> getAllUsers() {
        List<User> user = userRepository.findAll();
        return user;
    }

    @PostMapping("/Login/{email}")
    @ResponseStatus(HttpStatus.OK)
    public List<User> getUsersByEmail(@PathVariable String email) {
        List<User> users = userRepository.findByEmail(email);

        if (users.isEmpty()) {
            throw new RuntimeException("User not found for email: " + email);
        }

        return users;
    }


    // Post a new account
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/SignUp")
    void createUsers(@RequestBody User user) {
        userRepository.save(user);
    }

    // Delete a user account
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void deleteUsers(@PathVariable Integer id) {
        userRepository.deleteById(id);
    }
}