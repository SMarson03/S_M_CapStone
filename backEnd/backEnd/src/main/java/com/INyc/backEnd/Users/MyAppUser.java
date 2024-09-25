package com.INyc.backEnd.Users;


import jakarta.persistence.*;
import lombok.Data;


@Data
@Table(name = "user")
@Entity
public class MyAppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String password;
    private String email;


public MyAppUser() {

}
 public MyAppUser(Integer id, String name, String password, String email) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
    }
}