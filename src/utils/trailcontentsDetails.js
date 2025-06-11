


const details = {

  dhoni: {
    name: "Dhoni",
    number : "2",
    title: "Dhoni Waterfalls",
    time : "1.5 hours",
    distance : "11 km",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dhoni+Waterfalls",
    map_place :"Dhoni Waterfalls",
    desc: "A scenic trek leading to mesmerizing waterfalls, just a short ride from Palakkad.",
    content: `A 4 km trek through thick forests, bubbling streams, and thrilling shortcuts leads to the majestic Dhoni waterfalls. The journey is filled with colorful butterflies, unique flora, and scenic views, making it perfect for nature lovers.`,
    bestSeason: "September to December",
    difficulty: "Easy",
    itinerary: `
6:00 AM:
• Depart from IIT Palakkad to Dhoni (11 km, ~30 min travel)
6:30 AM - 7:00 AM:
• Breakfast near Dhoni base
7:00 AM - 10:00 AM:
• Trek to Dhoni Waterfalls (4 km, easy difficulty)
• Explore waterfalls, relax, and enjoy nature
10:00 AM - 10:30 AM:
• Return trek to base
10:30 AM - 11:00 AM:
• Snacks and refreshments
11:00 AM - 12:00 PM:
• Return to IIT Palakkad
`,
    weatherApi: "https://api.weather.com/v3/wx/conditions/current?geocode=10.8231,76.6511&format=json&apiKey=YOUR_API_KEY",
    photos: "https://res.cloudinary.com/diwirbnik/image/upload/v1741194329/Dhoni/_1"
  },

  chimmony: {
    title: "Chimmony Wildlife Sanctuary",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Chimmony+Wildlife+Sanctuary",
    desc: "A paradise of evergreen forests with abundant wildlife and serene trekking paths.",
    content: `Chimmony Wildlife Sanctuary offers breathtaking treks through dense forests, glistening streams, and diverse wildlife. Elephants, deer, and rare birds can be spotted while trekking or enjoying a Kuttavanchi (bowl boat) ride.`,
    bestSeason: "Rainy season",
    map_place :"Chimmony Wildlife Sanctuary",
    difficulty: "Easy",
    itinerary: `
6:00 AM:
• Depart from IIT Palakkad to Chimmony (40 km, ~1.5 hours travel)
7:30 AM - 8:00 AM:
• Breakfast near sanctuary entrance
8:00 AM - 11:00 AM:
• Trekking and wildlife spotting (5 km, easy difficulty)
• Experience Kuttavanchi (bowl boat ride)
11:00 AM - 12:00 PM:
• Relaxation and snacks
12:00 PM - 1:30 PM:
• Return to IIT Palakkad
`,
    weatherApi: "https://api.weather.com/v3/wx/conditions/current?geocode=10.4080,76.4517&format=json&apiKey=YOUR_API_KEY",
    photos: [
      "/images/Chimmony/Chimmony_1.jpg",
      "/images/Chimmony/Chimmony_2.jpg",
      "/images/Chimmony/Chimmony_3.jpg",
      "/images/Chimmony/Chimmony_4.jpg",
    ],
  },

  munnar: {
    title: "Chokramudi Trek, Munnar",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Chokramudi+Munnar",
    desc: "A short yet steep trek leading to breathtaking panoramic views of Munnar’s hills.",
    content: `The Chokramudi trek in Munnar is a must for adventure seekers. The 4 km uphill trail offers stunning views of tea plantations, misty valleys, and towering peaks, making it one of the best short treks in Kerala.`,
    bestSeason: "November to February",
    map_place :" Chembra Peak VSS",
    difficulty: "Moderate",
    itinerary: `
Day-1
6:00 AM:
• Depart from IIT Palakkad to Munnar (110 km, ~3 hours travel)
9:00 AM - 9:30 AM:
• Breakfast near Munnar
9:30 AM - 12:30 PM:
• Trek to Chokramudi Peak (moderate difficulty, 4 km)
12:30 PM - 1:30 PM:
• Lunch Break
1:30 PM - 2:30 PM:
• Travel to Echo Point (~47 km, 2 hours)
2:30 PM - 4:30 PM:
• Visit Echo Points and nearby scenic areas
4:30 PM - 6:00 PM:
• Travel to Tahr Mountcamp (off-road jeep safari)
6:00 PM Onwards:
• Check-in, relax, campfire, and dinner
Day-2
6:00 AM - 11:00 AM:
• Sunrise trek and breakfast at camp
11:00 AM - 7:30 PM:
• Visit Elephant Abode, Lakkom Waterfalls, and return
`,
    weatherApi: "https://api.weather.com/v3/wx/conditions/current?geocode=10.0892,77.0600&format=json&apiKey=YOUR_API_KEY",
    photos: [
      "/images/Munnar/Munnar_1.jpg",
      "/images/Munnar/Munnar_2.jpg",
      "/images/Munnar/Munnar_3.jpg",
      "/images/Munnar/Munnar_4.jpg",
    ],
  },

  parambikulam: {
    title: "Parambikulam Tiger Reserve",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Parambikulam+Tiger+Reserve",
    desc: "A biodiverse sanctuary offering thrilling treks and rare wildlife sightings.",
    content: `Parambikulam is home to lush forests, rich wildlife, and thrilling eco-tourism experiences. Trekkers can enjoy guided trails through tiger territory, spot elephants, and explore the beauty of nature.`,
    bestSeason: "October to March",
    map_place :"Parambikulam Forest Reserve",
    difficulty: "Moderate",
    itinerary: `
6:00 AM:
• Depart from IIT Palakkad to Parambikulam (~80 km, 2.5 hours travel)
8:30 AM - 9:00 AM:
• Breakfast near reserve entrance
9:00 AM - 1:00 PM:
• Wildlife safari and trekking
1:00 PM - 2:00 PM:
• Lunch break
2:00 PM - 4:00 PM:
• Boat safari and exploration
4:00 PM - 7:00 PM:
• Return to IIT Palakkad
`,
    weatherApi: "https://api.weather.com/v3/wx/conditions/current?geocode=10.3942,76.7903&format=json&apiKey=YOUR_API_KEY",
    photos: [
      "/images/Parambikulam/Parambikulam_1.jpg",
      "/images/Parambikulam/Parambikulam_2.jpg",
      "/images/Parambikulam/Parambikulam_3.jpg",
      "/images/Parambikulam/Parambikulam_4.jpg",
    ],
  },

  Meesapulimala: {
    title: "Meesapulimala trek",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Meesapulimala",
    desc: "A breathtaking trekking destination with stunning views and misty landscapes.",
    content: "Meesapulimala is the second highest peak in the Western Ghats and a dream trekking spot. The trek takes you through rolling grasslands, tea plantations, and cloud-kissed peaks, offering mesmerizing sunrise views.",
    bestSeason: "September to May",
    difficulty: "Moderate to Challenging",
    map_place :"Meesapulimala",
    itinerary: `
Day 1: September 14 (Saturday)
3:00 AM - 9:00 AM:
• Depart from IIT Palakkad (~160 km, ~6 hours travel)
9:00 AM - 10:00 AM:
• Breakfast at a local restaurant
10:00 AM - 11:30 AM:
• Visit Tea Plantations & explore the scenic estates
11:30 AM - 12:30 PM:
• Visit Eravikulam National Park & spot the Nilgiri Tahr
12:30 PM - 1:30 PM:
• Lunch at a local restaurant
1:30 PM - 2:00 PM:
• Registration at KFDC Office for the trek
2:00 PM - 4:00 PM:
• Off-road Jeep Safari to Base Camp
4:00 PM - 6:00 PM:
• Explore campsite, short walks, and photography
6:00 PM - 8:00 PM:
• Campfire & Dinner at the campsite
8:00 PM:
• Rest in tents under the starry sky

Day 2: September 15 (Sunday)
5:00 AM - 6:00 AM:
• Wake up and freshen up
6:00 AM - 12:00 PM:
• Trek to Meesapulimala peak, enjoy breathtaking views
12:00 PM - 1:00 PM:
• Descend back to Base Camp
1:00 PM - 2:00 PM:
• Lunch at Base Camp
2:00 PM - 3:30 PM:
• Jeep Safari back to Munnar
3:30 PM - 4:30 PM:
• Visit Echo Point & experience the natural echo effect
4:30 PM - 10:30 PM:
• Depart for IIT Palakkad, dinner en route, reach campus by midnight
`,
weatherApi: "https://api.weather.com/v3/wx/conditions/current?geocode=10.0959,77.2156&format=json&apiKey=YOUR_API_KEY",
photos: [
  "/images/Meesapulimala/Meesapulimala_1.jpg",
  "/images/Meesapulimala/Meesapulimala_2.jpg",
  "/images/Meesapulimala/Meesapulimala_3.jpg",
  "/images/Meesapulimala/Meesapulimala_4.jpg"
]
  },

  Peechi:{
      title: "Peechi-Vazhani Bison Trek & Athirapally Waterfalls",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Peechi-Vazhani+Wildlife+Sanctuary",
      desc: "An adventurous trek through wild bison habitats, followed by the stunning Athirapally Waterfalls.",
      content: "The Peechi-Vazhani Bison Trek offers a challenging hike through dense forests with opportunities to spot Indian bison, deer, and exotic birds. The journey concludes at the breathtaking Athirapally Waterfalls, known as the 'Niagara of India.'",
      bestSeason: "October to March",
      difficulty: "Moderate to Challenging",
      map_place :"Peechi Vazhani Wild life Sanctuary",
      itinerary: `
  6:00 AM - 8:00 AM:
  • Depart from IIT Palakkad (~135 km, ~1.5 hours travel)
  • Halt for breakfast en route
  
  8:00 AM - 11:30 AM:
  • Peechi-Vazhani Bison Trail (3 km, ~3 hrs)
  • Embark on a steep and challenging trek through dense forests and rugged trails.
  • Experience thrilling climbs with rewarding panoramic views.
  • Spot local wildlife such as Indian bison (gaur), deer, and exotic birds in their natural habitat.
  • Capture stunning views of the Peechi Reservoir and surrounding hills.
  
  11:30 AM - 2:30 PM:
  • Travel to Athirapally Waterfalls (~100 km, ~2.5 hours travel)
  • Halt for lunch en route
  
  2:30 PM - 4:30 PM:
  • Explore Athirapally Waterfalls (2 hrs)
  • Arrive at Athirapally Waterfalls, famously known as the "Niagara of India."
  • Spend 2 hours exploring the misty, roaring cascades and lush greenery.
  • Capture unforgettable views and enjoy the refreshing atmosphere.
  
  4:30 PM - 7:00 PM:
  • Return journey to IIT Palakkad
  `,
      weatherApi: "https://api.weather.com/v3/wx/conditions/current?geocode=10.2856,76.5694&format=json&apiKey=YOUR_API_KEY",
      photos: [
        "/images/Peechi-Vazhani_Bison_Trek/Peechi_1.jpg",
        "/images/Peechi-Vazhani_Bison_Trek/Peechi_2.jpg",
        "/images/Athirapally/Athirapally_1.jpg",
        "/images/Athirapally/Athirapally_2.jpg"
      ]
  },

  wayanad: {
    title: "Wayanad Adventure & Trekking Tour",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Wayanad",
    desc: "An unforgettable trip covering Wayanad’s serene lakes, historic caves, breathtaking peaks, and waterfalls.",
    content: "Explore the stunning landscapes of Wayanad, from the serene Pookode Lake to the historic Edakkal Caves. Enjoy the adventure of trekking to Chembra Peak, visit the refreshing Soochipara Waterfalls, and soak in the beauty of Karapuzha Dam and Lakkidi Viewpoint.",
    bestSeason: "October to May",
    difficulty: "Moderate to Challenging",
    map_place :"Wayanad",
    itinerary: `
Day 1: March 15 (Friday)
3:30 AM - 8:30 AM:
• Depart from IIT Palakkad (~162 km, ~5 hours)
• Halt for breakfast en route

8:30 AM - 9:30 AM:
• Breakfast at a local restaurant

9:30 AM - 11:30 AM:
• Visit Pookode Lake (Boating, scenic walks, photography)

12:00 PM - 1:30 PM:
• Travel to Edakkal Caves (~40 km, ~1 hour)

1:30 PM - 3:30 PM:
• Explore Edakkal Caves (Ancient rock carvings, trek up the caves)
• The 1.5 km hike to the caves takes approximately 45-60 minutes

3:30 PM - 4:00 PM:
• Travel to Karapuzha Dam (~10 km, ~30 min)

4:00 PM - 6:00 PM:
• Relax and enjoy Karapuzha Dam (Largest earthen dam in India, scenic views, sunset photography)

6:00 PM - 6:30 PM:
• Travel to Hotel Mount Avenue (~7 km, ~30 min)

6:30 PM - 7:30 PM:
• Check-in, freshen up, and explore the resort

7:30 PM - 9:00 PM:
• Dinner at the hotel’s fine dining restaurant

Day 2: March 16 (Saturday)
3:00 AM - 3:30 AM:
• Early morning wake-up

3:30 AM - 4:30 AM:
• Travel to Chembra Peak Base Camp (~25 km, ~1 hour)

4:30 AM - 7:00 AM:
• Breakfast and trek preparations

7:00 AM - 12:00 PM:
• Trek to Chembra Peak (Heart-shaped lake, breathtaking views, adventure hike)

12:00 PM - 12:45 PM:
• Travel to Soochipara Waterfalls (~30 km, ~45 min)

12:45 PM - 2:00 PM:
• Explore Soochipara Waterfalls (Trek down, enjoy the views and waterfall pools)

2:00 PM - 3:00 PM:
• Lunch at Udupi Restaurant, Kalpetta

3:00 PM - 4:00 PM:
• Travel to Lakkidi Viewpoint (Short scenic stop on the way)

4:00 PM - 4:30 PM:
• Enjoy the panoramic views of Wayanad

4:30 PM - 9:00 PM:
• Return journey to IIT Palakkad (~162 km, ~4.5 hours)
`,
    weatherApi: "https://api.weather.com/v3/wx/conditions/current?geocode=11.6851,76.1320&format=json&apiKey=YOUR_API_KEY",
    photos: [
      "/images/Wayanad/Pookode_Lake.jpg",
      "/images/Wayanad/Edakkal_Caves.jpg",
      "/images/Wayanad/Karapuzha_Dam.jpg",
      "/images/Wayanad/Chembra_Peak.jpg",
      "/images/Wayanad/Soochipara_Waterfalls.jpg",
      "/images/Wayanad/Lakkidi_Viewpoint.jpg"
    ]
  },

Athirapally:{
  title: "Athirapally Waterfalls & Vazhachal Adventure",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Athirapally+Waterfalls",
    desc: "Experience the majestic Athirapally Waterfalls, known as the 'Niagara of India,' along with scenic forest trails and lush landscapes.",
    content: "This trip offers a thrilling visit to Athirapally Waterfalls, the largest in Kerala, followed by the serene Vazhachal Waterfalls. Explore Sholayar forests, spot exotic wildlife, and enjoy scenic river views throughout the journey.",
    bestSeason: "June to January",
    map_place :"Athirapally waterfalls",
    difficulty: "Easy to Moderate",
    itinerary: `
6:00 AM - 9:30 AM:
• Depart from IIT Palakkad (~140 km, ~3.5 hours)
• Halt for breakfast en route

9:30 AM - 11:30 AM:
• Explore Athirapally Waterfalls (Roaring cascades, misty views, lush greenery)
• Trek down to the base of the falls for breathtaking views and photography

11:30 AM - 12:00 PM:
• Travel to Vazhachal Waterfalls (~5 km, ~15 min)

12:00 PM - 1:00 PM:
• Visit Vazhachal Waterfalls (A serene waterfall amidst dense forests)

1:00 PM - 2:00 PM:
• Lunch at a local restaurant

2:00 PM - 3:30 PM:
• Optional visit to Charpa Waterfalls & Thumboormuzhi Dam (Scenic stops for nature lovers)

3:30 PM - 6:00 PM:
• Return journey to IIT Palakkad (~140 km, ~3 hours)
`,
    weatherApi: "https://api.weather.com/v3/wx/conditions/current?geocode=10.2856,76.5694&format=json&apiKey=YOUR_API_KEY",
    photos: [
      "/images/Athirapally/Athirapally_1.jpg",
      "/images/Athirapally/Athirapally_2.jpg",
      "/images/Athirapally/Vazhachal_1.jpg",
      "/images/Athirapally/Charpa_1.jpg"
    ]
}

};

export default details;
