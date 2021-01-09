
// Without Hash Table : O(n^2)

function findFirstRep(str){
  for(let i=0;i<str.length;i++){
    for(let j= i+1;j<str.length;j++){
      if(str[i] === str[j]){
        return str[i]
      }
    }
  }
  return false
}


console.log(findFirstRep('academy'))

// With Hash Table : O(n)

function rep(str){
  let table = {}
  for(const char of str){
    if(table[char]){
      return char;
    }
    table[char] = 1;
  }
}



console.log(rep('hello'))
