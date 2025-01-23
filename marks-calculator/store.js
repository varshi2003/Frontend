export const store = {
  state: {
    marks: {
      os: 90,
      cn: 90,
      dbms: 90,
      dsa: 90,
      java: 90,
    },
    total: 0,
    average: 0,
    list_in_100: [],
    list_in_200: [],
  },
  listeners: [],

  subscribe(callback) {
    this.listeners.push(callback);
  },

  unsubscribe(callback) {
    this.listeners = this.listeners.filter((listener) => listener !== callback);
  },

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach((callback) => callback());
  },

  calculateDerivedState() {
    const marks = Object.values(this.state.marks);

    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const average = marks.length > 0 ? total / marks.length : 0;

    const list_in_100 = marks;
    const list_in_200 = marks.map((mark) => mark * 2);

    this.setState({ total, average, list_in_100, list_in_200 });
  },

  updateMarks(newMarks) {
    this.state.marks = { ...newMarks };
    this.calculateDerivedState();
  },
};

store.calculateDerivedState();
