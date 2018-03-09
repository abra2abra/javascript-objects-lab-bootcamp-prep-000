var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key){
  console.log(Object.assign({}, object, object[key]));
 
  return object;
}
var playground = {ha: 'one', haha: 'two'};
console.log(deleteFromObjectByKey(playground, playground.ha));

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj;
}

