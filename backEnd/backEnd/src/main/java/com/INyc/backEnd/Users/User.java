package com.INyc.backEnd.Users;

import jakarta.persistence.*;
import lombok.Data;


@Data
@Table(name = "users")
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String password;
    private String email;


    public User() {

    }
    public User(Integer id, String name, String password, String email) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
    }
}