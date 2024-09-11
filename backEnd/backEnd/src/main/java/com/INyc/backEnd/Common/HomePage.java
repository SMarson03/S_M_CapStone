package com.INyc.backEnd.Common;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class HomePage {
    private List<Arts> arts;
    private List<Restaurants> restaurants;
    private List<Events> events;

    public HomePage(List<Arts> arts, List<Restaurants> restaurants, List<Events> events) {
        this.arts = arts;
        this.restaurants = restaurants;
        this.events = events;
    }
}