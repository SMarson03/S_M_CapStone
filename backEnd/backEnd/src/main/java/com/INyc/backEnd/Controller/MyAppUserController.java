package com.INyc.backEnd.Controller;

import com.INyc.backEnd.Users.MyAppUser;
import com.INyc.backEnd.Users.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/INyc")
public class MyAppUserController {
    private final UserRepository userRepository;

    public MyAppUserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/Login")
    public List<MyAppUser> getAllUsers() {
        List<MyAppUser> myAppUsers = userRepository.findAll();
        return myAppUsers;
    }

    @GetMapping("/Login/{id}")
    MyAppUser getUsersByID(@PathVariable Integer id) {
        Optional<MyAppUser> myAppUser = userRepository.findById(id);
        if (myAppUser.isEmpty()) {
            throw new RuntimeException();
        }
        return myAppUser.get();
    }


    // Post a new account
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/SignUp")
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