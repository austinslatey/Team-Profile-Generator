const Engineer = require('../lib/Engineer');

test('creates an engineer', () => {
    const engineer = new Engineer('Dave', 6, 'engineer@email', "U of M");
  
    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toBe(6);
    expect(engineer.email).toBe("engineer@email");
    expect(engineer.github).toBe("U of M");  
  });

  test('gets engineers github', () => {
    const engineer = new Engineer('Dave', 6, 'engineer@email', "U of M");


    expect(engineer.getGitHub()).toBe("U of M"); 
  });

  test("gets engineer's role", () =>{
    const engineer = new Engineer('Dave', 6, 'engineer@email', "U of M");

    expect(engineer.getRole()).toBe("engineer");
  });