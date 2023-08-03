

const readline = require('readline');
function sumArrayIntegers(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input is not an array.');
    }
  
    const sum = arr.reduce((acc, num) => {
      if (Number.isInteger(num)) {
        return acc + num;
      } else {
        throw new Error('Array contains non-integer elements.');
      }
    }, 0);
  
    return sum;
  }

// Function to read a single line from input
function readLine() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question('', (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

// Function to read an array from input
async function readArray() {
  const input = await readLine();
  return input.split(' ').map(Number);
}

// Example usage:
async function main() {
  const arr = await readArray();
  try {
    const result = sumArrayIntegers(arr);
    console.log(result); // Output: 15
  } catch (error) {
    console.error(error.message);
  }
}

main();
