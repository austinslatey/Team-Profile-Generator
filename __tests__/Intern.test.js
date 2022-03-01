const Intern = require('../lib/Intern');

test('creates an intern', () => {
    const intern = new Intern('Dave', 6, 'intern@email', "U of M");
  
    expect(intern.name).toBe('Dave');
    expect(intern.id).toBe(6);
    expect(intern.email).toBe("intern@email");
    expect(intern.school).toBe("U of M");  
  });

  test('gets interns school', () => {
    const intern = new Intern('Dave', 6, 'intern@email', "U of M");


    expect(intern.getSchool()).toBe("U of M"); 
  });

  test("gets intern's role", () =>{
    const intern = new Intern('Dave', 6, 'intern@email', "U of M");

    expect(intern.getRole()).toBe("intern");
  });