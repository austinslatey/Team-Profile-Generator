const Manager = require('../lib/Manager');

test('creates an manager', () => {
    const manager = new Manager('Dave', 6, 'manager@email', 5);
  
    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe(6);
    expect(manager.email).toBe("manager@email");
    expect(manager.officeNumber).toBe(5);  
  });

  test('gets managers officenumber', () => {
    const manager = new Manager('Dave', 6, 'manager@email', 5);


    expect(manager.getOfficeNumber()).toBe(5); 
  });

  test("gets manager's role", () =>{
    const manager = new Manager('Dave', 6, 'manager@email', 5);

    expect(manager.getRole()).toBe("manager");
  });