// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(dir, name){
  return dir.filter(dir => dir.toLowerCase() === name.toLowerCase())
}
function fuzzyMatch(dir, name){
  return dir.filter(dir => dir.slice(0,2) === name.slice(0,2));
}
function matchName (dir, name){
  return dir.filter(dir => dir.name === name)
}