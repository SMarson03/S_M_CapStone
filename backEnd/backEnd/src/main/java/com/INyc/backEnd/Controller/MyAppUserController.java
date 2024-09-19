package com.INyc.backEnd.Controller;

import com.INyc.backEnd.Common.*;
import com.INyc.backEnd.Model.MyAppUser;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/INyc/SignUp")
@RestController
public class MyAppUserController {
    private final UserRepository userRepository;

    public MyAppUserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<SignUp> signUp() {
        List<MyAppUser> myAppUsers = userRepository.findAll();
        SignUp signUpData = new SignUp(myAppUsers);
        return ResponseEntity.ok(signUpData);
    }

    // Post a new account
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    void createUsers(@RequestBody MyAppUser myAppUser) {
        userRepository.save(myAppUser);
    }

    // Delete a user account
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void deleteUsers(@PathVariable Integer id) {
        userRepository.deleteById(id);
    }
}