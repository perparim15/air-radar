// News feed functionality
class NewsFeed {
    constructor() {
        this.newsContainer = document.getElementById('news-container');
        this.refreshButton = document.querySelector('.refresh-btn');
        this.newsItems = [];
        this.setupEventListeners();
        this.fetchNews();
    }

    setupEventListeners() {
        this.refreshButton.addEventListener('click', () => this.fetchNews());
    }

    async fetchNews() {
        try {
            // Show loading state
            this.newsContainer.innerHTML = '<div class="loading">Loading news...</div>';

            // In a real application, you would fetch from an API
            // For now, we'll use mock data
            const mockNews = [
                {
                    title: "Heathrow Airport Announces New Terminal Expansion",
                    source: "BBC News",
                    timestamp: "2 hours ago",
                    summary: "London Heathrow Airport has revealed plans for a new terminal expansion to handle increasing passenger numbers.",
                    url: "#"
                },
                {
                    title: "Atlanta Airport Sets New Passenger Record",
                    source: "CNN",
                    timestamp: "5 hours ago",
                    summary: "Hartsfield-Jackson Atlanta International Airport has broken its own record for annual passenger traffic.",
                    url: "#"
                },
                {
                    title: "New Direct Flight Route Announced",
                    source: "Aviation Week",
                    timestamp: "1 day ago",
                    summary: "A new direct route between Paris and Los Angeles will begin operations next month.",
                    url: "#"
                },
                {
                    title: "Amsterdam Airport Implements New Security Measures",
                    source: "Reuters",
                    timestamp: "2 days ago",
                    summary: "Schiphol Airport has introduced enhanced security screening procedures for all passengers.",
                    url: "#"
                }
            ];

            this.newsItems = mockNews;
            this.renderNews();
        } catch (error) {
            console.error('Error fetching news:', error);
            this.newsContainer.innerHTML = '<div class="error">Failed to load news. Please try again later.</div>';
        }
    }

    renderNews() {
        this.newsContainer.innerHTML = this.newsItems.map(news => `
            <div class="news-item fade-in">
                <h4>${news.title}</h4>
                <div class="news-meta">
                    <span class="news-source">${news.source}</span>
                    <span class="news-timestamp">${news.timestamp}</span>
                </div>
                <p class="news-summary">${news.summary}</p>
                <a href="${news.url}" class="news-link">Read more →</a>
            </div>
        `).join('');
    }
}

// Initialize news feed
document.addEventListener('DOMContentLoaded', () => {
    new NewsFeed();
}); 