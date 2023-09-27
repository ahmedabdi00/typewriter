const sentence = "hello there from lighthouse labs";

function printWithDelay(index) {
  if (index < sentence.length) {
    setTimeout(() => {
      console.log(sentence[index]);
      printWithDelay(index + 1); // Call the function recursively for the next character
    }, 1000);
  }
}

// Start printing with the first character
printWithDelay(0);
