package com.INyc.backEnd.Controller;

import com.INyc.backEnd.Common.INFood.Restaurants;
import com.INyc.backEnd.Common.INFood.RestaurantsPage;
import com.INyc.backEnd.Common.INFood.RestaurantsRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class RestaurantController {
    private final RestaurantsRepository restaurantsRepository;

    public RestaurantController(RestaurantsRepository restaurantsRepository) {
        this.restaurantsRepository = restaurantsRepository;
    }

    // Get all data for home page
    @GetMapping("/INyc/restaurants")
    public ResponseEntity<RestaurantsPage> restaurant() {
        List<Restaurants> restaurants = restaurantsRepository.findAll();
        RestaurantsPage restaurantsPageData = new RestaurantsPage(restaurants);

        return ResponseEntity.ok(restaurantsPageData);
    }

    //Get by id
    @GetMapping("/INyc/restaurants/{id}")
    Restaurants getRestaurantsByID(@PathVariable Integer id) {
        Optional<Restaurants> restaurants = restaurantsRepository.findById(id);
        if (restaurants.isEmpty()) {
            throw new RuntimeException();
        }
        return restaurants.get();
    }

    //Put a restaurant event
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/restaurants/{id}")
    void updateRestaurants(@RequestBody Restaurants restaurants, @PathVariable Integer id) {
        restaurantsRepository.save(restaurants);

        restaurantsRepository.save(restaurants);
    }

    //Delete an art event
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/restaurants/{id}")
    void deleteRestaurants(@PathVariable Integer id) {
        restaurantsRepository.deleteById(id);

        restaurantsRepository.deleteById(id);
    }
}