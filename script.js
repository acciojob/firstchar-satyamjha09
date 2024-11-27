function firstChar(text) {

   str = str.trimStart();
    
    // If the string is empty after trimming, return an empty string
    if (str === '') {
        return '';
    }
    
    // Return the first character
    return str[0];
  
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
 