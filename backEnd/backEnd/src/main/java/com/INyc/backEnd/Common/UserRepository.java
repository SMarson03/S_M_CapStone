package com.INyc.backEnd.Common;

import com.INyc.backEnd.Model.MyAppUser;
import org.hibernate.sql.ast.tree.expression.JdbcParameter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<MyAppUser, Integer> {
    MyAppUser findByUsername(String username);
    MyAppUser findByEmail(String email);
    MyAppUser findByPassword(String password);

}
