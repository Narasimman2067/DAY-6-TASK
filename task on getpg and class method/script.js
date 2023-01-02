// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)


class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;

        // given no rating

     // b) The constructor for the class Movie will set 
     // the class property rating to "PG" as default when no rating is provided. 

        if(rating==undefined)
        {
            this.rating="PG";
        }
        else
        {
            this.rating=rating;
        }
    }


// c) Write a method getPG, which takes an array
 //of base type Movie as its argument, and returns a new 
 //array of only those movies in the input array with a rating of "PG".
  //You may assume the
//  input array is full of Movie instances. 
//The returned array need not be full.



    
// GET PG METHOD

getPG(array){
    var result=[];
    for(var i=0;i<array.length;i++)
    {
        if(array[i].rating=="PG")
        {
result.push(array[i]);
        }
        else
        {
this 
                    }
    }
    return result;
}
}



//  creation of object

var movie1=new Movie("Casino Royale","Eon production","PG13")
var movie2=new Movie("kgf","Hombale films")
var movie3=new Movie("Avengers","marvel","PG 18")
var movie4=new Movie("vikram","Rajkamal  films")
var arr=[movie1,movie2,movie3,movie4];
console.log(movie2.getPG(arr));





// // d) Write a piece of code that creates an instance of the class Movie 
// with the title “Casino Royale”, the 
// studio “Eon Productions”, and the rating “PG­13”

class Movie1{
    constructor(name,production,rating)
    {
        this.name=name;
        this.production=production;
        this.ratng=rating;
        
        if(rating=undefined)
        {
            this,rating="PG";

        }
        else
        {
            this.rating="rating";
        }

         
}
}
var movie5=new Movie1("casino royale","Eon Production","PG13")
var movie6=new Movie1("pirates of caribean","jack sparrow")
var arr1=[movie5,movie6];
console.log(arr1)



























