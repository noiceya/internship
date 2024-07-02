const {factorial} = require('./factorial');

//test('factorial of 3 is 6', () => 
//{
//    expect(factorial(3)).toBe(6);
//});

//test('factorial of -2 does not exist', () => 
//{
//    expect(()=>factorial(-2)).toThrow();
//});

test('factorial of -2 does not exist', async () => 
{
    try 
    {
        await factorial(-2);
    } 
    catch(e) 
    {
        expect(e.message).toBe("Error.");
    }
});

test('factorial of 0 is 1', async () => 
{
    let res = await factorial(0);
    expect(res).toBe(1);
});
  