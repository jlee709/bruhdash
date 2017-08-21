var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
      return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
      return arr[arr.length -1];
    },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, num) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === num){
        return i;
      }else if(i === arr.length - 1){
        return -1;
      }
    }
  },


  //  returns the index of the first matching element from left to right
  //  should return index of first value matched from right to left 
  //  should return -1 if value cannot be found in array ‣

  lastIndexOf: function (arr, num) {
    for(var i = arr.length - 1; i >= 0; i--){
      if(arr[i] === num){
        return i;
      }else if(i === 0){
        return -1;
      }
    }
  },

  // returns an array with all elements except for the last element
  
  initial: function (arry) {
      var diffArray = [];
        for (var i=0; i<arry.length; i++){
          if(i < arry.length - 1){
              diffArray.push(arry[i]);
      } 
     } return diffArray;
  },
  
  // returns an array with all falsey values removed
  // add all non falsy values

    compact: function(arr) {
    var compactor = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i]){
        compactor.push(arr[i]);
      }
    }
    return compactor;
  },

  // creates a slice of an array from the start index up to but not including the end index
  // slice is i < last not <=
  slice: function (arry, first, last) {
      sliced = [];

      for(var i =0; i<arry.length;i++){
        if (i >= first && i < last){
          
          sliced.push(arry[i]);
        }
      } 
      return sliced;
  },

  // returns a slice of array with n elements dropped from the beignning
  
  drop: function(arry, num){
    var dropArray = [];
    for(var i = 0; i < arry.length; i++){
      if(i >= num){
        dropArray.push(arry[i]);
      }else if(num === undefined){
        arry.splice(0, 1);
        return arry;
      }
    }
    return dropArray;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arry,num) {
    
    var rightDrop = [];

    for(var i = arry.length - 1; i >= 0; i--){
      if(i < arry.length - num){
        rightDrop.unshift(arry[i]);
      }else if(num === 0){
        return arry;
      }else if(num === undefined){
        arry.splice(i,1);
        return arry;
      }
    }
    return rightDrop;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arry,num) {
    var takeArray = [];

      for (var i=0; i<arry.length; i++){
        if(i < num){
          takeArray.push(arry[i]);
        }else if (num === undefined){
            takeArray.push(arry[0]);
            return takeArray;
        
        }else if (num === 0){
            return takeArray;
        }else if(num > arry.length){
          return arry;
        }
      }return takeArray;
    },

  // creates a slice of an array with n elements taken from the end\
  //for(var i = arr.length - 1; i >= 0; i--) --> Takes from end
  // for (var i=0; i<arry.length; i++) ---> takes from start
  takeRight: function (arry,num) {
    var takeRight= [];
    for(var i = arry.length - 1; i >= 0; i--){
        // takes far right value
      if(i > arry.length - num - 1) {
          takeRight.unshift(arry[i]);
        // returns arry with no valule specifc
      }else if(num === undefined){
        takeRight.push(arry[i]);
        return takeRight;
        //return arry if zero
      }else if(num === 0){
        return takeRight;
        //returns same array if > arry length
      }else if(num > arry.length){
        return arry;
      }
    } return takeRight;
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function() {

  },

  // removes all given values from an array
  pull: function () {

  },

  // removes elements of an array corresponding to the given indices
  pullAt: function () {

  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};