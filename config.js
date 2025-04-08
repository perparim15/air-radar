// Application configuration
const CONFIG = {
    // Map settings
    map: {
        defaultCenter: [45, 0], // Center between Europe and North America
        defaultZoom: 3,
        minZoom: 2,
        maxZoom: 10,
        tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '© OpenStreetMap contributors'
    },

    // API endpoints
    api: {
        openSky: {
            baseUrl: 'https://opensky-network.org/api',
            endpoints: {
                states: '/states/all',
                flights: '/flights/all'
            },
            updateInterval: 15000 // 15 seconds
        },
        news: {
            baseUrl: 'https://newsapi.org/v2',
            endpoints: {
                everything: '/everything'
            },
            apiKey: 'YOUR_NEWS_API_KEY' // Replace with actual API key
        }
    },

    // Regions
    regions: {
        europe: {
            name: 'Europe',
            bounds: {
                north: 71.0,
                south: 35.0,
                east: 40.0,
                west: -10.0
            }
        },
        america: {
            name: 'America',
            bounds: {
                north: 70.0,
                south: 10.0,
                east: -50.0,
                west: -170.0
            }
        }
    },

    // UI settings
    ui: {
        refreshInterval: 30000, // 30 seconds
        animationDuration: 300, // milliseconds
        maxNewsItems: 5,
        maxAirports: 10
    },

    // Analytics settings
    analytics: {
        updateInterval: 60000, // 1 minute
        historyDays: 7,
        timeRanges: {
            live: 'Live',
            '24h': 'Last 24 Hours',
            '7d': 'Last 7 Days'
        }
    }
};
