const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe('manager', () => {
    const manager = new Manager('Amelia', '1234', 'amelia@email.com', '9999 1234');
    it('should be an employee', () => {
        expect(manager).toBeInstanceOf(Employee)
    });
    it('should have an office number', () =>  {
        expect(manager.getOfficeNumber()).toBe('9999 1234');
    });
    it('should have a role of manager', () => {
        expect(manager.getRole()).toBe('Manager');
    });
});