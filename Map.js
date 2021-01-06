const resultData = new Map()

resultData.set('name', 'Vishakha')
resultData.set('average', 1.53);
resultData.set('lastResult', null)

const germany = {name :'Germany', population: 82}

resultData.set(germany, 0.89);

resultData.get(germany)

for(const el of resultData){
  console.log(el)
}


resultData.set('average', 33.89) // This will override the existing average key value as Map contains unique keys

console.log(resultData.get('average'))

resultData.delete(germany)

console.log(resultData)

console.log(resultData.size)

// resultData.clear()

// console.log(resultData)

for (let [key, value] of resultData) {
  console.log(key + ' = ' + value)
}

for (let key of resultData.keys()) {
  console.log(key)
}

for (let value of resultData.values()) {
  console.log(value)
}