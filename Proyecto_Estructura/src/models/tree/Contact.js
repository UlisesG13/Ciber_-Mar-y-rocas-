class Contact {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    toString() {
        return `${this.name} (${this.value})`;
    }
}

export default Contact;
