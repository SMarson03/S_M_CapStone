package com.INyc.backEnd.Config;

import jakarta.annotation.PreDestroy;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.Statement;

@Configuration
public class DBCleanup {

    @Autowired
    private DataSource dataSource;

    @Bean
    public DatabaseCleanup databaseCleanup(){return new DatabaseCleanup(dataSource);}
        public static class DatabaseCleanup{

            private DataSource dataSource;

            private final Logger logger = org.slf4j.LoggerFactory.getLogger(DatabaseCleanup.class);
            public DatabaseCleanup(DataSource dataSource){

                this.dataSource = dataSource;
            }

            @PreDestroy
            public void dropDatabaseTable(){
                //Implemenet this method to drop the table
                try(
                    Connection connection = dataSource.getConnection()){
                    Statement statement = connection.createStatement();
                    statement.executeUpdate("DROP TABLE IF EXISTS restaurants");
                    statement.executeUpdate("DROP TABLE IF EXISTS arts");
                    statement.executeUpdate("DROP TABLE IF EXISTS events");
                    statement.executeUpdate("DROP TABLE IF EXISTS users");

                    logger.info("Table dropped successfully");

                }catch(Exception e){e.printStackTrace();}
        }
    }
}

