class SearchManager {
    constructor(data) {
        this.data = data;
        this.searchInput = document.getElementById('searchInput');
        this.categoryFilter = document.getElementById('categoryFilter');
        this.itemList = document.getElementById('itemList');
        
        this.init();
    }

    init() {
        this.searchInput.addEventListener('input', () => this.handleSearch());
        this.categoryFilter.addEventListener('change', () => this.handleSearch());
        this.displayItems();
    }

    handleSearch() {
        const searchTerm = this.searchInput.value.toLowerCase();
        const category = this.categoryFilter.value;
        
        this.displayItems(searchTerm, category);
    }

    highlightText(text, searchTerm) {
        if (!searchTerm) return text;
        
        const regex = new RegExp(searchTerm, 'gi');
        return text.replace(regex, match => `<span class="highlight">${match}</span>`);
    }

    displayItems(searchTerm = '', category = 'all') {
        this.itemList.innerHTML = '';
        
        const processCategory = (categoryItems, categoryName) => {
            return categoryItems.filter(item => {
                const nameMatch = item.name.toLowerCase().includes(searchTerm);
                const codeMatch = item.code.toLowerCase().includes(searchTerm);
                return nameMatch || codeMatch;
            }).map(item => {
                const highlightedName = this.highlightText(item.name, searchTerm);
                const highlightedCode = this.highlightText(item.code, searchTerm);
                
                return `
                    <div class="item-card">
                        <div class="item-name">${highlightedName}</div>
                        <div class="item-code">${highlightedCode}</div>
                    </div>
                `;
            }).join('');
        };

        if (category === 'all') {
            Object.entries(this.data).forEach(([categoryName, items]) => {
                this.itemList.innerHTML += processCategory(items, categoryName);
            });
        } else {
            this.itemList.innerHTML = processCategory(this.data[category], category);
        }
    }
}

// Initialize search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchManager = new SearchManager(inventoryData);
});