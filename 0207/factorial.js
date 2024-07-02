// SYNC
// function factorial(n) 
//  {
//     if (n < 0)
//     {
//       throw new Error("Error.");
//     }

//     if (n === 0 || n === 1) return 1;
  
//     let result = 1;
//     for (let i = 2; i <= n; i++) 
//     {
//       result *= i;
//     }
//     return result;
//   }

//module.exports = {factorial}

async function factorial(n) 
{
  await new Promise((resolve) => setTimeout(resolve, 10));
  
  if (n < 0) 
  {
    throw new Error("Error.");
  }

  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) 
  {
    result *= i;
  }
  return result;
}

module.exports = {factorial}
