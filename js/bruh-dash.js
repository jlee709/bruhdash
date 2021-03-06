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
  fill: function(arry,num,start,end) {
      for (var i=0;i<arry.length; i++){
        if(i>=start && i<end){
  //the if and splice used to isolate start index an -1 of end index
          arry.splice(i,1,num);

          }else if (start === undefined && end === undefined){
            arry.splice(i,1,num);
          }
        } return arry;
      }, 


  // removes all given values from an array
  // identify idx to be pulled
  // make simple 
 
  pull: function (arry, pullFloor, pullSky) {
      // var pulled for storing pulled value
      var pulled = [];

       for (var i = 0; i < arry.length; i++) {
        // checks range so i can be pulled and stored
        if (arry[i] !== pullFloor && arry[i] !== pullSky) {
          // setting pulled array to = looped arry[i]
          pulled[pulled.length] = arry[i];

        }
      }

      return pulled;
  },

  // removes elements of an array corresponding to the given indices
  
   pullAt: function (arry, pullAt) {
    for(var i = arry.length - 1; i >=0; i--){
      for(var j = pullAt.length - 1; j >= 0; j--){
        if(i === pullAt[j]){
          arry.splice(i, 1);
        }
      }
    }
    
    return arry;
  },

  // creates an array excluding all the specified values
  without: function(arry,idx) {
    
    var chosen = [];
    //checking for bool match on both i & j index sweep
    for(var i=0; i<arry.length; i++){
      
      var it = false;
    // adding break cond for match to continue loop
      for(var j=0; j<idx.length; j++){
        if(arry[i] === idx[j]){
          it = true;
          break;
      }
    } if (it !== true){  //cond not true push arry[i] to chosen arry
        chosen.push(arry[i]);
    }

    } return chosen;
  },

  // returns an array with specified values excluded
  difference: function(arry, idx) {
      var chosen = [];
      
      // loop starts 
      for(var i=0;i<arry.length; i++){

        // checking for idx param match of arry. if match break loop and 2nd iter starts
          for(var j=0; j<idx.length; j++){
            if(arry[i] === idx[j]){
              break;
            }   // if j counter is apsolutly equal to idx size we set chosen to the length of the arry
          } if(j === idx.length){ 
              chosen[chosen.length] = arry[i];        
      } 
    } return chosen;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  
  zip: function (arry1, arry2) {

    var zipped = [];

    for (var i = 0; i < arry1.length; i++) {

      zipped[zipped.length] = [arry1[i], arry2[i]];

    }
      return zipped;
    },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arry) {

  var arry1 =[];
  var arry2 = [];
  var bigArry=[];
  
  for(var i=0; i<arry.length; i++){
   
    arry1[arry1.length] = arry[i][0];
    arry2[arry2.length] = arry[i][1];
    
    bigArry = [arry1, arry2];
    
  } return bigArry;
},
  

  // creates an array of elements into groups of length of specified size
   chunk: function(arry, size){
    var chunkArray = [];
    if(arry.length === 0 || size === 0){
      return chunkArray;
    }else{
      for(var i = 0; i < arry.length;){
      var chunks = [];
        for(var j = 0; j < size; j++){
          if(arry[i]){
            chunks.push(arry[i]);
            i++;
          }
        }
      chunkArray.push(chunks);
      }
    }
    return chunkArray;
  },
  

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(collection, func) {
    for(var i in collection){
      func(collection[i]);
    }
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function(item, iteratee) {
    var newArray = [];

        if (typeof item === 'object'){
      for (var key in item){
        newArray.push(iteratee(item[key]));
      }
    }else{
        for (var i = 0; i < item.length; i++){
         newArray.push(iteratee(item[i]));
        }
      }
      return newArray;


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