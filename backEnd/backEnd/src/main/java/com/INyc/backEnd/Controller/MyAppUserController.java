package com.INyc.backEnd.Controller;

import com.INyc.backEnd.Users.MyAppUser;
import com.INyc.backEnd.Users.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/Login/{email}")
    public List<MyAppUser> getUsersByEmail(@PathVariable String email) {
        Optional<MyAppUser> myAppUser = userRepository.findByEmail(email).stream().findAny();
//        if (myAppUser.isEmpty()) {
//            throw new RuntimeException();
//        }
        return (myAppUser.isEmpty()) ? null : List.of(myAppUser.get());
    }
//    @GetMapping("/Login/{email}")
//    public ResponseEntity<String> getUsersByEmail(@PathVariable String email) {
//        Optional<MyAppUser> myAppUser = userRepository.findByEmail(email).stream().findFirst();
//        if (myAppUser.isEmpty()) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
//        }
//        return ResponseEntity.ok(myAppUser.get().getEmail());
//    }


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