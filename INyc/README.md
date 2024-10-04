#ReadMe for INyc
 
## Project Overview
 
**INyc** INyc is a website/application that introduces you to what New York has always been
a place for the arts, great food, and unique events. Creating something that represents
not only my interests but my past. As an artist, a chef, and a curator sharing these
aspects of the city keeps the culture moving forward.
 
## Table of Contents
 
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
 
## Features
 
- User authentication and registration *However still working on encryption *.
- A multi-page catalog of gallery shows, restaurants, and must do events.
- Each item in the catalog is linked to the particular events/bussiness' site .

 
## Technologies Used
 
- **Vite/ReactJS**: Is a library for user interfaces. Using Javascript assiting to build out components.
- **Tailwind CSS**: I had some issues with my tailwinds issues therefore I was heavily reliant on CSS.
- **React Router**: Being as I had a multi-page application...installing react-router-dom helped with user navigation.
- **Spring Boot**: I implemented this Java-based framework to build my back end by utilizing all necessary dependencies. From seccurity to RestControllers.
- **REST API**: By using my depencdencies I was able to build my own API and push data from my back end to my front end.

## Folder Structure
 
Below is a quick synopsis of my folder structure.
 
INyc/
├── public/
│   ├── index.html
│   └── WhiteLogo.png
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── DesignImages
│   │   ├── EventImages
│   │   ├── GalleryImages
│   │   └── ... (other components)
│   │   ├── Arts.jsx
│   │   ├── Event.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Index.js       
│   │   ├── Login.jsx
│   │   ├── Navbar.jsx
│   │   ├── Restaurants.jsx
│   │   ├── Routes.jsx
│   │   ├── Search.jsx
│   │   ├── Searchbar.jsx
│   │   ├── SearchResults.jsx
│   │   ├── SignUp.jsx
│   │   └── ... (other pages)
├── .gitignore
├── index.html
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── ... (other configuration files)