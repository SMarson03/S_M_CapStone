package com.INyc.backEnd.INEvents;

import com.INyc.backEnd.Common.Location;
import jakarta.persistence.*;
import lombok.*;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name = "events")
public class Events {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String address;
    @Enumerated(EnumType.STRING)
    private Location location;
    private String category;
    private Date frst_Date;
    private Date sec_Date;
    private Date thrd_Date;
    private String price_Per_Person;
    private String image_Url;

    public Events(){
    }

    public Events(Integer id, String name, String address, Location location, String category,
                  Date frst_Date, Date sec_Date, Date thrd_Date, String price_Per_Person, String image_Url) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.location = location;
        this.category = category;
        this.frst_Date = frst_Date;
        this.sec_Date = sec_Date;
        this.thrd_Date = thrd_Date;
        this.price_Per_Person = price_Per_Person;
        this.image_Url = image_Url;
    }

}