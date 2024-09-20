package com.INyc.backEnd.INArt;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArtsRepository extends JpaRepository<Arts, Integer> {
    List<Arts> findByLocation(String location);



}
