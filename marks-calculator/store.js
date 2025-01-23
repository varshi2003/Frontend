export const store = {
    state: {
        marks: {
            os: 0,
            cn: 0,
            dbms: 0,
            dsa: 0,
            java: 0,
        },
        total: 0,
        average: 0,
    },
    listeners: [],
    
    subscribe(callback) {
        this.listeners.push(callback);
    },
    
    unsubscribe(callback) {
        this.listeners = this.listeners.filter(listener => listener !== callback);
    },
    
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.listeners.forEach(callback => callback());
    }
};