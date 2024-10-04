package com.INyc.backEnd.Controller;

import com.INyc.backEnd.INArt.Arts;
import com.INyc.backEnd.INArt.ArtsRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping ("/INyc")
public class ArtController {
    private final ArtsRepository artsRepository;

    public ArtController(ArtsRepository artsRepository) {
               this.artsRepository = artsRepository;
    }

    @GetMapping("/arts")
    public List<Arts> getAllArts() {
        List<Arts> arts = artsRepository.findAll();
        return arts;
    }

    @GetMapping("/arts/{id}")
    Arts getArtsByID(@PathVariable Integer id) {
        Optional<Arts> arts = artsRepository.findById(id);
        if (arts.isEmpty()) {
            throw new RuntimeException();
        }
        return arts.get();
    }


    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/arts/{id}")
    void updateArts(@RequestBody Arts arts, @PathVariable Integer id) {
        artsRepository.save(arts);

        artsRepository.save(arts);
    }

    //Delete an art event
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/arts/{id}")
    void deleteArts(@PathVariable Integer id) {
        artsRepository.deleteById(id);

        artsRepository.deleteById(id);
    }
}