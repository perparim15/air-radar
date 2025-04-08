// Analytics functionality
class Analytics {
    constructor() {
        this.airportRanking = document.getElementById('airport-ranking');
        this.factsContainer = document.getElementById('facts-container');
        this.timeFilterButtons = document.querySelectorAll('.time-filter button');
        this.selectedTimeFilter = 'live';
        this.setupEventListeners();
        this.updateAnalytics();
    }

    setupEventListeners() {
        this.timeFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.timeFilterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                this.selectedTimeFilter = button.textContent.toLowerCase();
                this.updateAnalytics();
            });
        });
    }

    updateAnalytics() {
        this.updateAirportRanking();
        this.updateFacts();
    }

    updateAirportRanking() {
        const airports = getAllAirports();
        const sortedAirports = [...airports].sort((a, b) => 
            b.traffic.annualPassengers - a.traffic.annualPassengers
        );

        this.airportRanking.innerHTML = sortedAirports.map((airport, index) => `
            <div class="ranking-item fade-in">
                <div class="rank-number">${index + 1}</div>
                <div class="airport-info">
                    <h5>${airport.name}</h5>
                    <div class="airport-stats">
                        <span class="stat">
                            <i class="fas fa-users"></i>
                            ${(airport.traffic.annualPassengers / 1000000).toFixed(1)}M passengers
                        </span>
                        <span class="stat">
                            <i class="fas fa-plane"></i>
                            ${airport.traffic.dailyFlights} daily flights
                        </span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    updateFacts() {
        const fact = getRandomFact();
        this.factsContainer.innerHTML = `
            <div class="fact-item fade-in">
                <i class="fas fa-lightbulb"></i>
                <p>${fact}</p>
            </div>
        `;
    }
}

// Initialize analytics
document.addEventListener('DOMContentLoaded', () => {
    new Analytics();
}); 