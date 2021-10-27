const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe('engineer', () => {
    const engineer = new Engineer('Amelia', '1234', 'amelia@email.com', 'amelia@github.com');
    it('should be an employee', () => {
        expect(engineer).toBeInstanceOf(Employee)
    });
    it('should have a github username', () =>  {
        expect(engineer.getGithub()).toBe('amelia@github.com');
    });
    it('should have a role of engineer', () => {
        expect(engineer.getRole()).toBe('Engineer');
    });
});