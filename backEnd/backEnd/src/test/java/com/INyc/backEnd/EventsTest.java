package com.INyc.backEnd;

import com.INyc.backEnd.Common.Location;
import com.INyc.backEnd.INEvents.Events;
import org.junit.jupiter.api.Test;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class EventsTest {

    @Test
    public void testGetName() {
        Location location = Location.Manhattan; // Replace with your actual enum value
        Events event = new Events(1, "Concert", "123 Music Ave", location, "Music",
                new Date(), new Date(), new Date(), "$20", "http://image.url", "http://event.url");

        assertEquals("Concert", event.getName(), "Name should be 'Concert'");
    }
}