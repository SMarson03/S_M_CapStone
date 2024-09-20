package com.INyc.backEnd.INEvents;

import com.INyc.backEnd.Common.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventsRepository extends JpaRepository<Events, Integer> {
    List<Events> findByLocation(Location location);
}
