package com.INyc.backEnd.Common;

import com.INyc.backEnd.Model.MyAppUser;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class SignUp {
    private List<MyAppUser> myAppUsers;

    public SignUp(List<MyAppUser> myAppUsers) {
        this.myAppUsers = myAppUsers;

    }
}
