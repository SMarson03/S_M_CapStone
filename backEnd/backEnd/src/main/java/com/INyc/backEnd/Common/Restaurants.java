package com.INyc.backEnd.Common;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Table(name = "restaurants")
public class Restaurants {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String address;
    @Enumerated(EnumType.STRING)
    private Location location;
    private String cuisine;
    private String top_Dish;
    private String reservation;
    private String price_Per_Person;


    public Restaurants() {
    }

    public Restaurants(Integer id, String name, String address, Location location, String cuisine,
                       String top_Dish, String reservation, String price_Per_Person) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.location = location;
        this.cuisine = cuisine;
        this.top_Dish = top_Dish;
        this.reservation = reservation;
        this.price_Per_Person = price_Per_Person;
    }
}
