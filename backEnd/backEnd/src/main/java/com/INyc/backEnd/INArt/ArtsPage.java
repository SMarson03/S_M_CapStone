package com.INyc.backEnd.INArt;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ArtsPage {
    private List<Arts> arts;


    public ArtsPage(List<Arts> arts) {
        this.arts = arts;

    }
}
