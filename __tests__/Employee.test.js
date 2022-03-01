const Employee = require('../lib/Employee');

test('creates an employee', () => {
    const employee = new Employee('Dave', 6, 'employee@email');
  
    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe(6);
    expect(employee.email).toBe("employee@email");
  });

  test('gets employees name', () => {
    const employee = new Employee('Dave', 6, 'employee@email');


    expect(employee.getName()).toBe('Dave'); 
  });

  test("gets employee's id", () =>{
    const employee = new Employee('Dave', 6, 'employee@email');

    expect(employee.getId()).toBe(6);
  });

  test("gets employee's id", () =>{
    const employee = new Employee('Dave', 6, 'employee@email');

    expect(employee.getEmail()).toBe("employee@email");
  });

  test("gets employee's id", () =>{
    const employee = new Employee('Dave', 6, 'employee@email');

    expect(employee.getRole()).toBe("employee");
  });