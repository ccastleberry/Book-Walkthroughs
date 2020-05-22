const o = {
  key1: 'hello',
  obj: {
    'key2': 'world',
  },
}


function deepCopy(obj) {
  
  const keys = Object.keys(obj);

  const newObject = {};

  for (let i=0; i < keys.length; i++) {
    const key = keys[i]
    if (typeof obj[keys[i]] === 'object') {
      newObject[key] = deepCopy(obj[key]);
    } else {
      newObject[key] = obj[key]
    }
  }
  return newObject
}

const o2 = deepCopy(o)

o2.obj.key2 = 'universe'

console.log(o.obj.key2);
console.log(o2.obj.key2);

