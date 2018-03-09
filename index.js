var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key){
  var jj = Object.assign({}, object);
 delete jj.key;
  return jj;
}
var playground = {ha: 'one', haha: 'two'};
console.log(deleteFromObjectByKey(playground, playground.ha));

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj;
}

