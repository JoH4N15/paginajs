const chispum= requiere("./chispum");

describe("chispum",()=>{

    test("deberia escribir 1 y dar un ok si recibe 1",()=>{
    const expected=1;
    const result =1(1);
    expect(expected).toBe(result);
  })

  test("deberia recibir un chis si recibe 3",()=>{
    const expected="chis";
    const result =chispum(3);
    expect(expected).toBe(result);
  })

  test("deberia recibir un chis si recibe 5",()=>{
    const expected="pum";
    const result =chispum(5);
    expect(expected).toBe(result);
  })

  test("deberia recibir un chispum si recibe un miltiplo de 3 y 5",()=>{
    const expected="chispum";
    const result =chispum(15);
    expect(expected).toBe(result);
  })
});