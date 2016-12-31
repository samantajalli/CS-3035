//use the reduce method in combination with concat to flatten an array of arrays into a single array
// that has all the elements of the input array


function flatten(arr){
  return arr.reduce(function (makeFlat, toBeFlattened){
    return makeFlat.concat(Array.isArray(toBeFlattened) ? flatten(toBeFlattened) :
  toBeFlattened);
}, []);
}

/*var flattened = [[0,1],[2,3],[4,5]].reduce(function(a,b){
  return a.concat(b);
},[])
*/
// an array of objects of type Person
var person = [
        {name : "James von Don", sex: "m", born : 1940,
        died : 2010, father : "Ron von Don",
        mother : "Ellie Bronte"},

        {name : "Mike Westerly", sex: "m", born : 1950, died : 1970,
        father : "Will Westerly",
        mother : "Janet Havenbach"},

        {name : "Carrie Thatcher", sex : "f", born : 1966, died : 2004,
        father : "Xavier Thatcher",
        mother : "Lily Rosenbaum"},

        {name : "Adam Crestfall", sex : "m", born : 1977, died : 2020,
        father : "Bill Crestfall",
        mother : "Rachel Meacham"},

        {name : "Chris Othello", sex : "m", born : 1996,
         died : 2070, father : "Jon Othello",
        mother : "Tina Shakespeare"},

        {name : "Rex Tyrannosaur", sex : "m", born : 20,
          died : 200, father : "Mr.Rex Tyrannosaur",
          mother : "Mrs. Rex Tyrannosaur"},

        {name : "Stegosaur", sex : "f", born : 1900,
        died : 150, father : "Mr. Stegosaur",
        mother : "Mrs.Stegosaur"},

        { name : "Jon Bowe", sex : "m", born : 1942,
        died : 1987, father : "Mr. Jon Bowe",
        mother : "Mrs. Bowe"},

        { name : "Linda Bergdahl", sex : "f", born : 1955,
          died : 2005, father : "Mr.Bergdahl",
          mother : "Mrs.Bergdahl"},

        { name : "Emily Mabias", sex : "f", born : 1984,
          died : 2008, father : "Mr.Mabias",
          mother : "Mrs.Mabias"}]

        person.map(function(obj){ // creates the property Generation dynamically
          if(obj.born <= 1940)
            obj.Generation = "Greatest Generation";
          else if (obj.born > 1965 && obj.born < 1977)
            obj.Generation = "Generation X";
          else if (obj.born > 1976 && obj.born < 1996)
            obj.Generation = "Generation Y";
          else if (obj.born > 1995)
            obj.Generation = "Millenials";
          else {
            obj.Generation = "Time Jumpers";
          }
        });
/*
        function forEach(array, action){
          for (var i = 0; i < array.length; i++)
            action(array[i]);
        }

        function filter(array, test){
          var passed = [];
          for (var i = 0; i < array.length; i++)
            if(test(array[i]))
              passed.push(array[i]);
          return passed;
        }
  **/
        function isMillenial(obj){
          return (obj.Generation == "Millenials");
        }

      console.log(flatten([[2,3],[1]]));
      console.log(person);
      console.log("----------------");
      console.log(person.filter(isMillenial));
      console.log("-----------------");
      console.log(person.map(function(obj){
        var pplString = obj.name + " : " + "Pokemon Go Fan";
        return pplString;
      }));
