package com.INyc.backEnd.Common.INFood;

import com.INyc.backEnd.Common.Location;
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
    private String image_Url;
    private String url;


    public Restaurants() {
    }

    public Restaurants(Integer id, String name, String address, Location location, String cuisine,
                       String top_Dish, String reservation, String price_Per_Person, String image_Url, String url) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.location = location;
        this.cuisine = cuisine;
        this.top_Dish = top_Dish;
        this.reservation = reservation;
        this.price_Per_Person = price_Per_Person;
        this.image_Url = image_Url;
        this.url = url;
    }
}
