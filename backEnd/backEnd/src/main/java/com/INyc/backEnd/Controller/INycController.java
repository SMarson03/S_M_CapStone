package com.INyc.backEnd.Controller;

import com.INyc.backEnd.Common.INFood.Restaurants;
import com.INyc.backEnd.Common.INFood.RestaurantsRepository;
import com.INyc.backEnd.INArt.Arts;
import com.INyc.backEnd.INArt.ArtsRepository;
import com.INyc.backEnd.INEvents.Events;
import com.INyc.backEnd.INEvents.EventsRepository;
import com.INyc.backEnd.Model.HomePage;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RequestMapping("/INyc")
@RestController
public class INycController {
    private final ArtsRepository artsRepository;
    private final RestaurantsRepository restaurantsRepository;
    private final EventsRepository eventsRepository;

    public INycController(ArtsRepository artsRepository, RestaurantsRepository restaurantsRepository, EventsRepository eventsRepository) {
        this.artsRepository = artsRepository;
        this.restaurantsRepository = restaurantsRepository;
        this.eventsRepository = eventsRepository;
    }

    // Get all data for home page
    @GetMapping("")
        public ResponseEntity<HomePage> home() {
            List<Arts> arts = artsRepository.findAll();
            List<Restaurants> restaurants = restaurantsRepository.findAll();
            List<Events> events = eventsRepository.findAll();
            HomePage homePageData = new HomePage(arts, restaurants, events);
            return ResponseEntity.ok(homePageData);
        }
    }
