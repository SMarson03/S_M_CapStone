package com.INyc.backEnd.Users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<MyAppUser, Integer> {
    List<MyAppUser> findByName(String name);
    List<MyAppUser> findByEmail(String email);
    List<MyAppUser>  findByPassword(String password);

}


