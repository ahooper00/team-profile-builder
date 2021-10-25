const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email) {
        super(officeNumber);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;