const shuffle = require("../src/shuffle");
const bots = require("../src/botsData");


describe("shuffle should...", () => {
  test('Does shuffle create an array?', ()=>{
    expect(Array.isArray(shuffle(bots))).toBeTruthy()
  })

  test('Does shuffled array contain objects from botsData?', ()=>{
    expect(bots).toContain(shuffle(bots)[0])
  })

  test('Does shuffled return 10 items in the array?', ()=>{
    expect(shuffle(bots).length).toEqual(10)
  })

  test('Does returned array shuffle around items?', ()=>{
    expect(shuffle(bots)[0]===bots[0] && shuffle(bots)[1]===bots[1] && shuffle(bots)[9]===bots[9]).toBeFalsy
  })
  // CODE HERE
});
