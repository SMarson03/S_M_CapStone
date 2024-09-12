package com.INyc.backEnd.Model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "user")
@Entity
public class MyAppUser {
    private Integer id;
    private String username;
    private String password;
    private String email;
    private Boolean enabled;
}
//add a repository and controller
//the button will add handle submit fi=unction use api as 