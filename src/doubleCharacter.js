const doubleCharacter = (str) => {
  // return string.split('').map(i => { return  i + i 
  // }).join('')
  // return str.split('').map(i => i + i).join('') 
  
  return str.replace(/./g, '$&$&') 
  //replace each charcter with repetition of it
  // inside substituting string you can use $& for getting matched char
  
}


module.exports = doubleCharacter