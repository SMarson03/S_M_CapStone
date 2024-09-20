package com.INyc.backEnd.INArt;

import com.INyc.backEnd.Common.Location;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.*;

import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "arts")
public class Arts {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String address;
    @Enumerated(EnumType.STRING)
    private Location location;
    private String exhibits;
    private String artists;
    private Date begin_Date;
    private Date end_Date;
    private String price_Per_Person;
    private String image_Url;

    public Arts() {
    }

    public Arts(Integer id, String name, String address, Location location, String exhibits, String artists,
                Date begin_Date, Date end_Date, String price_Per_Person, String image_Url) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.location = location;
        this.exhibits = exhibits;
        this.artists = artists;
        this.begin_Date = begin_Date;
        this.end_Date = end_Date;
        this.price_Per_Person = price_Per_Person;
        this.image_Url = image_Url;
    }

}
