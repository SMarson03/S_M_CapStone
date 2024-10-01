package com.INyc.backEnd;

import com.INyc.backEnd.INArt.Arts;
import com.INyc.backEnd.INEvents.Events;
import com.INyc.backEnd.Common.Location;
import com.INyc.backEnd.Common.INFood.Restaurants;
import jdk.jfr.Event;
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
			Arts arts1 = new Arts(1, "Gagosian Gallery", "555 West 24th Street", Location.Manhattan, "Icons From A Half Century", "Group Show", Date.valueOf("2024-05-14"), Date.valueOf("2024-11-30"), "FREE","https://res.cloudinary.com/djsguemrp/image/upload/v1727290769/BetterIcons_nwm2jw.png", "https://gagosian.com/exhibitions/2024/icons-from-a-half-century-of-art/");
			Arts arts2 = new Arts(2, "Carter Burden Gallery", "548 W 28th St #534", Location.Manhattan, "Blue Journey", "Ellen Wallenstein",Date.valueOf("2024-08-01" ),Date.valueOf("2024-11-06") ,"FREE","https://res.cloudinary.com/djsguemrp/image/upload/v1727122044/EWallenstein_jzomte.jpg", "https://www.carterburdengallery.org/current-exhibition");
			Arts arts3 = new Arts(3, "Templon Gallery", "293 Tenth Ave.", Location.Manhattan, "Searching For America", "Robin Kid", Date.valueOf("2024-09-04"),Date.valueOf("2024-10-26"), "FREE","https://res.cloudinary.com/djsguemrp/image/upload/v1726505101/RobinKid_oavr7u.png", "https://www.templon.com/exhibitions/searching-for-america/");
			Arts arts4 = new Arts(4, "Petzel Gallery", "540 West 25th Street", Location.Manhattan, "Supporting Actor", "Pieter Schoolwerth", Date.valueOf("2024-09-05"),Date.valueOf("2024-10-26"),"FREE","https://res.cloudinary.com/djsguemrp/image/upload/v1727297697/petsel_bho470.png", "https://www.petzel.com/exhibitions/");
			Arts arts5 = new Arts(5, "James Cohan Gallery", "48 Walker Street", Location.Manhattan, "The Mythic Age", "Nauldine Pierre", Date.valueOf("2024-09-12"), Date.valueOf("2024-10-19"), "FREE","https://res.cloudinary.com/djsguemrp/image/upload/v1726505101/JarrettEarnest_eyzv9v.png", "https://www.jamescohan.com/exhibitions/naudline-pierre2");
			Arts arts6 = new Arts(6, "Gladstone Gallery", "515 West 24th Street", Location.Manhattan, "New Pastorals","David Salle", Date.valueOf("2024-10-18"), Date.valueOf("2024-10-19"), "FREE", "https://res.cloudinary.com/djsguemrp/image/upload/v1727289177/DavidSalle_u0tuug.jpg", "https://www.gladstonegallery.com/exhibition/13214/new-pastorals/info");

			List<Arts> arts = List.of(arts1, arts2, arts3, arts4, arts5, arts6);


				Restaurants restaurants1 = new Restaurants(1, "Tatiana's", "10 Lincoln Center Plaza", Location.Manhattan, "Afro Caribbean", "Goat Patties, Mom Dukes Shrimp", "YES", "$100+","https://res.cloudinary.com/djsguemrp/image/upload/v1726505102/Tatian_m7kc5k.png","https://www.tatiananyc.com/");
				Restaurants restaurants2 = new Restaurants(2, "Win Son", "159 Graham Ave.", Location.Brooklyn, "Taiwanese", "Marinated Cucumbers, Chicken Sandwich", "YES", "$50+", "https://res.cloudinary.com/djsguemrp/image/upload/t_INyc template/v1726505102/Winson_apsqfl.jpg","https://winsonbrooklyn.com/restaurant");
				Restaurants restaurants3 = new Restaurants(3, "Rocco's", "115-10 Rockaway Blvd", Location.Queens, "Italian", "Veal Parmesan Chop, Grilled Octopus", "NO", "$50+", "https://res.cloudinary.com/djsguemrp/image/upload/v1727310048/vealparm_p7n3kq.png", "https://www.roccoscoalovenpizza.com/");
				Restaurants restaurants4 = new Restaurants(4, "Cornbread", "409 Eastern Parkway", Location.Brooklyn, "Soul Food", "Fried Chicken Dinner, Cornbread", "NO", "25+", "https://res.cloudinary.com/djsguemrp/image/upload/v1727310058/cornbread1_plzkpt.png", "https://www.cornbreadsoul.com/");
				Restaurants restaurants5 = new Restaurants(5, "Hudson", "37 Bruckner Blvd", Location.Bronx, "BBQ", "The Brisket", "NO", "$25+", "https://res.cloudinary.com/djsguemrp/image/upload/v1726516197/Hudson_lozblu.jpg", "https://www.hudsonsmokehousebx.com/");
				Restaurants restaurants6 = new Restaurants(6, "Marie's NYC", "195 Wyckoff Ave.", Location.Brooklyn, "Italian", "Chopped Cheese Raviolo, Porchetta", "NO", "$75+", "https://res.cloudinary.com/djsguemrp/image/upload/v1727288562/Maries_rjupgm.png", "https://www.mariesnyc.com/");

				List<Restaurants> restaurants = List.of(restaurants1, restaurants2, restaurants3, restaurants4, restaurants5, restaurants6);


			Events events1 = new Events(1, "Brooklyn Museum First Saturdays", "200 Eastern Parkway", Location.Brooklyn, "Art", Date.valueOf("2024-10-05"), Date.valueOf("2024-11-02"), Date.valueOf("2024-12-07"), "FREE", "https://res.cloudinary.com/djsguemrp/image/upload/v1726505101/bkmuseumunion_ubddad.jpg","https://www.brooklynmuseum.org/visit/first_saturdays");
			Events events2 = new Events(2, "NYC Wine and Food Festival", "408 12th Ave.", Location.Manhattan, "Food", Date.valueOf("2024-10-18"), Date.valueOf("2024-10-19"), Date.valueOf("2024-10-20"), "$200+", "https://res.cloudinary.com/djsguemrp/image/upload/v1726505102/nycwff2_dx42w8.jpg","https://nycwff.org/");
			Events events3 = new Events(3, "Bushwick Film Festival", "620 Wilson Ave.", Location.Brooklyn, "Entertainment", Date.valueOf("2024-10-16"), Date.valueOf("2024-10-19"), Date.valueOf("2024-10-20"), "$60+", "https://res.cloudinary.com/djsguemrp/image/upload/v1726505102/BF_uwjmvx.png","https://www.bushwickfilmfestival.com/tickets");
			Events events4 = new Events(4, "Movie Night at Hudson Yard", "10th Ave. West 33rd Street", Location.Manhattan, "Entertainment", Date.valueOf("2024-10-04"), Date.valueOf("2024-10-11"), Date.valueOf("2024-10-18"), "FREE", "https://res.cloudinary.com/djsguemrp/image/upload/v1726505101/Backyard-at-HY_1920x1200-with-logos-Movie-Nights_lzbadi.jpg","https://www.hudsonyardsnewyork.com/movie-nights");
			Events events5 = new Events(5, "Pumpkin Night at The Bronx Zoo", "2300 Southern Blvd", Location.Bronx, "Entertainment", Date.valueOf("2024-09-26"), Date.valueOf("2024-10-15"), Date.valueOf("2024-10-27"), "$30+", "https://res.cloudinary.com/djsguemrp/image/upload/v1726505101/BronxZoo_pumpkin_night_2019_1920x1080", "https://bronxzoo.com/pumpkin-nights");
			Events events6 = new Events(6, "The Other Side Art Fair", "337-345 Butler St.", Location.Brooklyn, "Art", Date.valueOf("2024-10-17"), Date.valueOf("2024-10-18"), Date.valueOf("2024-10-19"), "$54+", "https://res.cloudinary.com/djsguemrp/image/upload/v1727139026/TheOther_kiwp8p.png","https://www.theotherartfair.com/brooklyn/");

			List<Events> events = List.of(events1, events2, events3, events4, events5, events6);
		};

//@Bean
//CommandLineRunner runner() {
//	return args -> {
//		User user1 = new User(1, "", "", "");
//
//		List<User> myAppUsers = List.of(user1);
//	};
		}
		}
//

