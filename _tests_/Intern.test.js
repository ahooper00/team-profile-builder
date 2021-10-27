const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe('intern', () => {
    const intern = new Intern('Amelia', '1234', 'amelia@email.com', 'Monash University');
    it('should be an intern', () => {
        expect(intern).toBeInstanceOf(Employee)
    });
    it('should have a school', () =>  {
        expect(intern.getSchool()).toBe('Monash University');
    });
    it('should have a role of intern', () => {
        expect(intern.getRole()).toBe('Intern');
    });
});