class DynamicIsland {
    constructor() {
        this.island = document.createElement('div');
        this.island.className = 'di-container';
        this.island.innerHTML = `
            <div class="di-content">
                <div class="di-text"></div>
            </div>
        `;
        document.body.appendChild(this.island);
        this.timeout = null;
    }
    
    show(message, type = 'info', duration = 3000) {
        const textEl = this.island.querySelector('.di-text');
        textEl.textContent = message;
        
        // Reset classes
        this.island.className = 'di-container';
        
        // Trigger reflow
        void this.island.offsetWidth;
        
        this.island.className = `di-container di-active di-${type}`;
        
        if (this.timeout) clearTimeout(this.timeout);
        
        this.timeout = setTimeout(() => {
            this.island.classList.remove('di-active');
            setTimeout(() => {
                this.island.className = 'di-container'; // clear type classes
            }, 500);
        }, duration);
    }
}
// Export for modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DynamicIsland;
}
