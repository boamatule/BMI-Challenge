function Person(attr) {
    this.weight = attr.weight;
    this.height = attr.height;
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Person;
} 
