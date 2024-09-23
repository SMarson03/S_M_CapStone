package com.INyc.backEnd.Controller;

import com.INyc.backEnd.INEvents.Events;
import com.INyc.backEnd.INEvents.EventsRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping ("/INyc")
public class EventController {
    private final EventsRepository eventsRepository;

    public EventController(EventsRepository eventsRepository) {
        this.eventsRepository = eventsRepository;
    }

    @GetMapping("/events")
    public List<Events> getAllEvents() {
        List<Events> events = eventsRepository.findAll();
        return events;
    }

//    @GetMapping("INyc/events")
//    public ResponseEntity<EventsPage> event() {
//        List<Events> events = eventsRepository.findAll();
//        EventsPage eventsPageData = new EventsPage(events);
//
//        return ResponseEntity.ok(eventsPageData);
//
//    }

    @GetMapping("INyc/events{id}")
    Events getEventsByID(@PathVariable Integer id) {
        Optional<Events> events = eventsRepository.findById(id);
        if (events.isEmpty()) {
            throw new RuntimeException();
        }
        return events.get();
    }
    //Put an art event
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/events/{id}")
    void updateEvents(@RequestBody Events events, @PathVariable Integer id) {
        eventsRepository.save(events);

        eventsRepository.save(events);
    }

    //Delete an art event
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/events/{id}")
    void deleteEvents(@PathVariable Integer id) {
        eventsRepository.deleteById(id);

        eventsRepository.deleteById(id);
    }
}