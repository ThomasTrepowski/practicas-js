var min=37*5;
var max=37*10;
numr=Math.floor(Math.random() * (max - min) + min);
test(`returned value not be greater than ${numr}`, () => {
    expect(numr).toBeGreaterThanOrEqual(37*5);
    expect(numr).toBeLessThanOrEqual(37*10);
});