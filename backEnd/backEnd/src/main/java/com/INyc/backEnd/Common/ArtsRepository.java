package com.INyc.backEnd.Common;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArtsRepository extends JpaRepository<Arts, Integer> {
    Arts findByLocation(Location location);

}
