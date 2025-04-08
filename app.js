// Main application class
class AirTrafficApp {
    constructor() {
        this.airportMap = null;
        this.analytics = null;
        this.newsFeed = null;
        this.selectedRegion = 'all';
        this.setupEventListeners();
        this.initializeComponents();
    }

    setupEventListeners() {
        // Airport search functionality
        const searchInput = document.getElementById('airport-search');
        searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));

        // Region filter buttons
        const regionButtons = document.querySelectorAll('.region-filter button');
        regionButtons.forEach(button => {
            button.addEventListener('click', () => {
                regionButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                this.selectedRegion = button.dataset.region;
                this.updateDisplay();
            });
        });
    }

    initializeComponents() {
        // Initialize map
        this.airportMap = new AirportMap();

        // Initialize analytics
        this.analytics = new Analytics();

        // Initialize news feed
        this.newsFeed = new NewsFeed();

        // Update initial display
        this.updateDisplay();
    }

    handleSearch(query) {
        const airports = getAllAirports();
        const filteredAirports = airports.filter(airport => 
            airport.name.toLowerCase().includes(query.toLowerCase()) ||
            airport.city.toLowerCase().includes(query.toLowerCase()) ||
            airport.country.toLowerCase().includes(query.toLowerCase())
        );

        this.updateAirportList(filteredAirports);
    }

    updateAirportList(airports) {
        const airportList = document.getElementById('airport-list');
        airportList.innerHTML = airports.map(airport => `
            <div class="airport-item" data-icao="${airport.icao}">
                <div class="airport-header">
                    <h4>${airport.name}</h4>
                    <span class="airport-code">${airport.icao}</span>
                </div>
                <div class="airport-details">
                    <p><i class="fas fa-map-marker-alt"></i> ${airport.city}, ${airport.country}</p>
                    <div class="airport-stats">
                        <span><i class="fas fa-users"></i> ${(airport.traffic.annualPassengers / 1000000).toFixed(1)}M</span>
                        <span><i class="fas fa-plane"></i> ${airport.traffic.dailyFlights}/day</span>
                    </div>
                </div>
            </div>
        `).join('');

        // Add click handlers
        document.querySelectorAll('.airport-item').forEach(item => {
            item.addEventListener('click', () => {
                const icao = item.dataset.icao;
                this.airportMap.selectAirport(icao);
            });
        });
    }

    updateDisplay() {
        let airports;
        if (this.selectedRegion === 'all') {
            airports = getAllAirports();
        } else {
            airports = getAirportsByRegion(this.selectedRegion);
        }

        this.updateAirportList(airports);
        this.analytics.updateAnalytics();
    }

    // Function to update statistics in the header
    updateHeaderStats() {
        const airports = getAllAirports();
        const totalFlights = airports.reduce((sum, airport) => sum + airport.traffic.dailyFlights, 0);
        const totalAirports = airports.length;

        document.getElementById('total-flights').textContent = totalFlights.toLocaleString();
        document.getElementById('total-airports').textContent = totalAirports;
    }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    new AirTrafficApp();
});
