package com.INyc.backEnd.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findByName(String name);
    List<User> findByEmail(String email);
    List<User>  findByPassword(String password);

}


