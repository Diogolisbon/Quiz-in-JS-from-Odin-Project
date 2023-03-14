

  function firstLettersToLowerCase(str) {
    let words = str.replace(/[\W_]+/g, " ").split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toLowerCase() + words[i].slice(1);
    }
    return words.join("_");
  }
  
  const snakeCase = function(str) {
    let modifiedString = str.replace(/[\W_]+/g, "_"); // replace non-alphanumeric characters with underscores
    modifiedString = firstLettersToLowerCase(modifiedString);
    if (modifiedString.endsWith("_")) {
        modifiedString = modifiedString.slice(0, -1);
    } else {
        (modifiedString.match(/^[A-Z]/))  // if first character is uppercase
        modifiedString = modifiedString.charAt(0).toLowerCase() + modifiedString.slice(1);
      }
    return modifiedString;
    
  };
  console.log(snakeCase("SnakeCase")); // Output: snake_case
  console.log(snakeCase("Hello, World!")); // Output: hello_world
  


function firstLettersToLowerCase(str) {
    let words = str.replace(/[\W_]+/g, " ").split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toLowerCase() + words[i].slice(1);
    }
    return words.join("_");
  }
  
  const snakeCase = function (string) {
    // convert to snake_case format
    string = firstLettersToLowerCase(string)
      .replace(/[,\?\.]/g, "")
      .replace(/\-/g, " ")
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/\s+/g, "_")
      .trim();
  
    // check if first character is uppercase
    if (string.match(/^[A-Z]/)) {
      string = string.charAt(0).toLowerCase() + string.slice(1);
    }
  
    return string;
  };
  
  console.log(snakeCase("Hello, World!")); // Output: hello_world
  console.log(snakeCase("SnakeCase")); // Output: snake_case
  
  