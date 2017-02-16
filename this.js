// console.log(document.title);
// alert(document.title);
// console.log("this.js");

var childrensStory = function(a, b) {
  console.log('This is ...', this);
  console.log('a = ', a);
  console.log('b = ', b);
}

var inAnObject = {
  name: 'inAnObject',
  test1: childrensStory,
  anotherObject: {
    name: 'anotherObject',
    test2: childrensStory
  }
};

var inAFunction = function(a, b) {
  this.name = 'Pig';
  childrensStory(a, b);
  this.test4 = childrensStory;
  childrensStory(a, b);
};

inAFunction.prototype.test3 = childrensStory;

var trickyTricky = { // should I use precarious???
  name: 'thisIsTricky',
  why: 'is the wolf doing this?',
  what: 'will work?'
};

var confusing = { // should I use mistifying???
  // name: = 'threeLittlePigs',
  state: 'UT',
  city: 'SLC'
};

/*
We know the children's story, but do you know `this` story?  Follow the clues to determine which of the houses the wolf is currently at.
*/

// First clue
// childrensStory('pigs', 'wolf');
// this is...
// a =
// b =



//Second clue
// window.childrensStory('pigs', 'wolf');
// this is...
// a =
// b =


//Third Clue
// inAnObject.test1('straw', 'house');
// this is...
// a =
// b =



// Fourth clue
// inAnObject.anotherObject.test1('stick', 'home');
// this is...
// a =
// b =


// Fifth clue
// inAnObject.anotherObject.test2('stick', 'home');
// this is...
// a =
// b =


// Sixth clue
// childrensStory.call();
// this is...
// a =
// b =


// Seventh clue
// childrensStory.call(trickyTricky);
// this is...
// a =
// b =


// Eighth clue
// childrensStory.call(trickyTricky, 'brick', 'house');
// this is...
// a =
// b =


// Ninth clue
// childrensStory.call(confusing);
// this is...
// a =
// b =


// Tenth clue
// childrensStory.call(confusing, 'huff');
// this is...
// a =
// b =


// Eleventh clue
// childrensStory.apply(trickyTricky);
// this is...
// a =
// b =


// Twelfth clue
// childrensStory.apply(confusing, ['OC', 'TaNNER']);
// this is...
// a =
// b =


// Thirteenth clue
// childrensStory.apply(confusing, 'OC', 'TaNNER');
// this is...
// a =
// b =


// Fourteenth clue
// inAFunction('what will', 'happen?');
// this is...
// a =
// b =


// Fifteenth clue
// inAFunction.test3('A', 'B');
// this is...
// a =
// b =


// Sixteenth clue
// var newObject = new inAFunction('what will', 'happen?');
// this is...
// a =
// b =


// Seventeenth clue
// var newObject = new inAFunction('what will', 'happen?');
// newObject.test4('now', 'what');
// newObject.test3('C', 'D');
// this is...
// a =
// b =


// Eighteenth clue
// inAnObject.test1.call(trickyTricky, 'whichPigAmI?', 'wolf');
// this is...
// a =
// b =


// Nineteenth clue
// inAnObject.anotherObject.test2.apply(confusing, ['pigs', 'woolf']);
// this is...
// a =
// b =
