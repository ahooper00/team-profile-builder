const Employee = require("../lib/Employee")

describe('employee', () => {
    const employee = new Employee('Amelia', '1234', 'amelia@email.com');
    it('new employee should have a name', () => {
        expect(employee.getName()).toBe('Amelia');
    });
    it('new employee should have an id', () => {
        expect(employee.getId()).toBe('1234');
    });
    it('new employee should have an email', () => {
        expect(employee.getEmail()).toBe('amelia@email.com');
    });
});