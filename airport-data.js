// Top airports in Europe and America by passenger traffic
const TOP_AIRPORTS = {
    // Europe
    "LHR": {
        name: "London Heathrow",
        city: "London",
        country: "United Kingdom",
        icao: "EGLL",
        coordinates: [51.4700, -0.4543],
        facts: [
            "Busiest airport in Europe by passenger traffic",
            "Has 2 parallel runways",
            "Handles over 80 million passengers annually",
            "Home to British Airways' main hub"
        ],
        traffic: {
            annualPassengers: 80000000,
            dailyFlights: 1300,
            destinations: 200
        }
    },
    "CDG": {
        name: "Charles de Gaulle",
        city: "Paris",
        country: "France",
        icao: "LFPG",
        coordinates: [49.0097, 2.5478],
        facts: [
            "Second busiest airport in Europe",
            "Largest airport in France",
            "Known for its unique circular terminal design",
            "Major hub for Air France"
        ],
        traffic: {
            annualPassengers: 76000000,
            dailyFlights: 1200,
            destinations: 180
        }
    },
    "AMS": {
        name: "Amsterdam Schiphol",
        city: "Amsterdam",
        country: "Netherlands",
        icao: "EHAM",
        coordinates: [52.3086, 4.7639],
        facts: [
            "Third busiest airport in Europe",
            "Located 4 meters below sea level",
            "Has 6 runways",
            "Major hub for KLM"
        ],
        traffic: {
            annualPassengers: 72000000,
            dailyFlights: 1100,
            destinations: 170
        }
    },
    // America
    "ATL": {
        name: "Hartsfield-Jackson Atlanta",
        city: "Atlanta",
        country: "United States",
        icao: "KATL",
        coordinates: [33.6407, -84.4277],
        facts: [
            "Busiest airport in the world by passenger traffic",
            "Home to Delta Air Lines' main hub",
            "Handles over 100 million passengers annually",
            "Has 5 parallel runways"
        ],
        traffic: {
            annualPassengers: 104000000,
            dailyFlights: 2000,
            destinations: 250
        }
    },
    "LAX": {
        name: "Los Angeles International",
        city: "Los Angeles",
        country: "United States",
        icao: "KLAX",
        coordinates: [33.9416, -118.4085],
        facts: [
            "Second busiest airport in the US",
            "Major gateway to Asia-Pacific",
            "Has 4 parallel runways",
            "Featured in many Hollywood movies"
        ],
        traffic: {
            annualPassengers: 88000000,
            dailyFlights: 1500,
            destinations: 200
        }
    },
    "ORD": {
        name: "O'Hare International",
        city: "Chicago",
        country: "United States",
        icao: "KORD",
        coordinates: [41.9786, -87.9047],
        facts: [
            "Third busiest airport in the US",
            "Major hub for United Airlines",
            "Has 8 runways",
            "Known for its complex runway layout"
        ],
        traffic: {
            annualPassengers: 84000000,
            dailyFlights: 1400,
            destinations: 190
        }
    }
};

// Interesting aviation facts
const AVIATION_FACTS = [
    "The world's busiest air route is between Seoul and Jeju Island in South Korea, with over 85,000 flights annually.",
    "The longest non-stop commercial flight is Singapore Airlines' route from Singapore to New York, covering 15,349 km.",
    "The shortest commercial flight in the world is between Westray and Papa Westray in Scotland, lasting just 1.5 minutes.",
    "The Airbus A380, the world's largest passenger airliner, can carry up to 853 passengers in an all-economy configuration.",
    "The Boeing 747 has flown more than 3.5 billion people, equivalent to half of the world's population.",
    "The first commercial flight took place on January 1, 1914, between St. Petersburg and Tampa, Florida.",
    "The world's busiest airport by aircraft movements is Chicago O'Hare, with a takeoff or landing every 37 seconds.",
    "The fastest commercial airliner is the Concorde, which could reach speeds of 2,179 km/h (1,354 mph).",
    "The first female pilot was Raymonde de Laroche, who earned her license in 1910.",
    "The world's largest airport by area is King Fahd International Airport in Saudi Arabia, covering 780 square kilometers."
];

// Function to get random fact
function getRandomFact() {
    return AVIATION_FACTS[Math.floor(Math.random() * AVIATION_FACTS.length)];
}

// Function to get airport data
function getAirportData(icao) {
    return TOP_AIRPORTS[icao];
}

// Function to get all airports
function getAllAirports() {
    return Object.values(TOP_AIRPORTS);
}

// Function to get airports by region
function getAirportsByRegion(region) {
    const europeanAirports = ['LHR', 'CDG', 'AMS'];
    const americanAirports = ['ATL', 'LAX', 'ORD'];
    
    const icaoCodes = region === 'europe' ? europeanAirports : americanAirports;
    return icaoCodes.map(icao => TOP_AIRPORTS[icao]);
}

// Export functions
export {
    getRandomFact,
    getAirportData,
    getAllAirports,
    getAirportsByRegion
}; 