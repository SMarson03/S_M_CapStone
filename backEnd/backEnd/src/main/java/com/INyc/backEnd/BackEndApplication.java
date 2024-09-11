package com.INyc.backEnd;

import com.INyc.backEnd.Common.Arts;
import com.INyc.backEnd.Common.Events;
import com.INyc.backEnd.Common.Location;
import com.INyc.backEnd.Common.Restaurants;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.sql.Date;
import java.util.List;
import java.util.logging.Logger;

@SpringBootApplication
public class BackEndApplication {

	private static final Logger logger = Logger.getLogger(BackEndApplication.class.getName());

	public static void main(String[] args) {


		SpringApplication.run(BackEndApplication.class, args);

	}

	@Bean
	CommandLineRunner runner() {
		return args -> {
			Arts arts1 = new Arts(1, "Gagosian Gallery", "555 West 24th Street", Location.MANHATTAN, "Icons From A Half Century", "Group", Date.valueOf("2024-05-14"), Date.valueOf("2024-11-30"), "FREE");
			Arts arts2 = new Arts(2, "Carter Burden Gallery", "548 W 28th St #534", Location.MANHATTAN, "Blue Journey", "Ellen Wallenstein",Date.valueOf("2024-08-01" ),Date.valueOf("2024-11-06") ,"FREE");
			Arts arts3 = new Arts(3, "Templon Gallery", "293 Tenth Ave.", Location.MANHATTAN, "Searching For America", "Robin Kid", Date.valueOf("2024-09-04"),Date.valueOf("2024-10-26"), "FREE");
			Arts arts4 = new Arts(4, "Petzel Gallery", "540 West 25th Street", Location.MANHATTAN, "Supporting Actor", "Pieter Schoolwerth", Date.valueOf("2024-09-05"),Date.valueOf("2024-10-26"),"FREE");

			List<Arts> arts = List.of(arts1, arts2, arts3, arts4);


				Restaurants restaurants1 = new Restaurants(1, "Tatianas", "10 Lincoln Center Plaza", Location.MANHATTAN, "Afro Caribbean", "Mom Dukes Shrimp", "YES", "100+");
				Restaurants restaurants2 = new Restaurants(2, "Win Son", "159 Graham Ave.", Location.BROOKLYN, "Taiwanese", "Chicken Sandwich", "NO", "50+");
				Restaurants restaurants3 = new Restaurants(3, "Roccos", "115-10 Rockaway Blvd", Location.QUEENS, "Italian", "Grilled Octopus", "NO", "50+");
				Restaurants restaurants4 = new Restaurants(4, "Cornbread Soul Kitchen", "409 Eastern Parkway", Location.BROOKLYN, "Soul Food", "Cornbread", "NO", "25+");
				Restaurants restaurants5 = new Restaurants(5, "Hudson", "37 Bruckner Blvd", Location.THE_BRONX, "BBQ", "Brisket", "NO", "25+");

				List<Restaurants> restaurants = List.of(restaurants1, restaurants2, restaurants3, restaurants4, restaurants5);


			Events events1 = new Events(1, "Brooklyn Museum First Saturdays", "200 Eastern Parkway", Location.BROOKLYN, "Art", Date.valueOf("2024-10-05"), Date.valueOf("2024-11-02"), Date.valueOf("2024-12-07"), "FREE");
			Events events2 = new Events(2, "NYC Wine and Food Festival", "408 12th Ave.", Location.MANHATTAN, "Food", Date.valueOf("2024-10-18"), Date.valueOf("2024-10-19"), Date.valueOf("2024-10-20"), "200+");
			Events events3 = new Events(3, "Bushwick Film Festival", "620 Wilson Ave.", Location.BROOKLYN, "Entertainment", Date.valueOf("2024-10-16"), Date.valueOf("2024-10-19"), Date.valueOf("2024-10-20"), "60+");
			Events events4 = new Events(4, "Movie Night at Hudson Yard", "10th Ave. West 33rd Street", Location.MANHATTAN, "Entertainment", Date.valueOf("2024-10-04"), Date.valueOf("2024-10-11"), Date.valueOf("2024-10-18"), "FREE");

			List<Events> events = List.of(events1, events2, events3, events4);
		};
		}
	}

