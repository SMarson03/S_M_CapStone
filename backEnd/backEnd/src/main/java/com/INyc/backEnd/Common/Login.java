package com.INyc.backEnd.Common;

import com.INyc.backEnd.Model.MyAppUser;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Login {
    private List<MyAppUser> myAppUsers;

    public Login(List<MyAppUser> myAppUsers) {
        this.myAppUsers = myAppUsers;

    }
}