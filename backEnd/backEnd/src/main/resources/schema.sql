CREATE TABLE IF NOT EXISTS Arts(
    id INT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    location VARCHAR(50),
    exhibits VARCHAR(255),
    artists VARCHAR(255),
    begin_Date Date,
    end_Date Date,
    price_Per_Person VARCHAR(50),
    image_URL VARCHAR(255)
    );

CREATE TABLE IF NOT EXISTS Restaurants(
    id INT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    location VARCHAR(50),
    cuisine VARCHAR(50),
    top_Dish VARCHAR(50),
    reservation VARCHAR(50),
    price_Per_Person VARCHAR(50),
    image_URL VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Events(
    id INT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    location VARCHAR(50),
    category VARCHAR(255),
    frst_Date Date,
    sec_Date Date,
    thrd_date Date,
    price_Per_Person VARCHAR(50),
    image_URL VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS user(
    id INT PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255)
  );
