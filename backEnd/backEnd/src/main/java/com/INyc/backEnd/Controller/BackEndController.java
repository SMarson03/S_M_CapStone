package com.INyc.backEnd.Controller;

import com.INyc.backEnd.Common.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api/INyc")
@RestController
public class BackEndController {

    private final ArtsRepository artsRepository;
    private final RestaurantsRepository restaurantsRepository;
    private final EventsRepository eventsRepository;

    public BackEndController(ArtsRepository artsRepository, RestaurantsRepository restaurantsRepository, EventsRepository eventsRepository) {
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

    // Post an art event
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/arts")
    void createArts(@RequestBody Arts arts) {
        artsRepository.save(arts);
    }

    // Get art event by id
    @GetMapping("/arts/{id}")
    Arts getArtsByID(@PathVariable Integer id) {
        Optional<Arts> arts = artsRepository.findById(id);
        if (arts.isEmpty()) {
            throw new RuntimeException();
        }
        return arts.get();
    }

    // Get arts by location
    @GetMapping("/arts/location/{location}")
    public ResponseEntity<List<Arts>> getArtsByLocation(@PathVariable Location location) {
        List<Arts> arts = (List<Arts>) artsRepository.findByLocation(location);
        if (arts.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(arts);
    }
    @GetMapping("/restaurants/{id}")
    Restaurants getRestaurantsByID(@PathVariable Integer id) {
        Optional<Restaurants> restaurants = restaurantsRepository.findById(id);
        if (restaurants.isEmpty()) {
            throw new RuntimeException();
        }
        return restaurants.get();
    }

    @GetMapping("/events/{id}")
    Events getEventssByID(@PathVariable Integer id) {
        Optional<Events> events = eventsRepository.findById(id);
        if (events.isEmpty()) {
            throw new RuntimeException();
        }
        return events.get();
    }

    // Put an art event
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/arts/{id}")
    void updateArts(@RequestBody Arts arts, @PathVariable Integer id) {
        artsRepository.save(arts);
    }

    // Delete an art event
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/arts/{id}")
    void deleteArts(@PathVariable Integer id) {
        artsRepository.deleteById(id);
    }
}