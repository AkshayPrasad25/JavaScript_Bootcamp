//CodeKaro Maps & Filters Assignment
//Akshay Prasad Github: github.com/AkshayPrasad25

//PART - 1

let users = [
    { name: 'Alice', gender: 'female', age: 28, location: 'New York' },
    { name: 'Bob', gender: 'male', age: 35, location: 'Los Angeles' },
    { name: 'Charlie', gender: 'male', age: 22, location: 'Chicago' },
    { name: 'Diana', gender: 'female', age: 31, location: 'Houston' },
    { name: 'Edward', gender: 'male', age: 26, location: 'Miami' },
    { name: 'Fiona', gender: 'female', age: 40, location: 'San Francisco' },
    { name: 'George', gender: 'male', age: 33, location: 'Seattle' },
    { name: 'Hannah', gender: 'female', age: 29, location: 'Denver' },
    { name: 'Ivan', gender: 'male', age: 25, location: 'Dallas' },
    { name: 'Jasmine', gender: 'female', age: 34, location: 'Phoenix' },
    { name: 'Kevin', gender: 'male', age: 27, location: 'Boston' },
    { name: 'Lily', gender: 'female', age: 32, location: 'Atlanta' },
    { name: 'Mike', gender: 'male', age: 30, location: 'Portland' },
    { name: 'Natalie', gender: 'female', age: 23, location: 'Austin' },
    { name: 'Oscar', gender: 'male', age: 12, location: 'San Diego' }
];

function isAdult(users) {
    return users >=18
}


let adultUser=users.filter((user)=> {
    return isAdult(user.age)
})
console.log(adultUser) //

function getfullname(users){
    let names = users.map(user=>{return user.name + " " + user.location})   //full name using map
    return names
}

let res= getfullname(users)//
console.log(res)

let username = users.map(user => {return user.name + " " + user.location})  //usernames using map
console.log(username)//


//PART - 2

function filterByGender(users, userGender){
    let genarray = users.map((user) => {            //Filter users by gender input and returning an array containing true or false values
        if (user.gender == userGender){
            return true;
        }
        else{
            return false;
        }  
    })
    return genarray
    
}
let filtbygender = filterByGender(users, 'male')

console.log(filtbygender)

let maleUsers = users.filter((user)=>{
    return user.gender == 'male'
}).map((user)=>{                                //chaining to filter users for male users and returning their names
    return user.name 
})
console.log(maleUsers)

//PART 3

const movies = [
    { title: 'Inception', genre: 'Sci-Fi', year: 2010, rating: 8.8 },
    { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994, rating: 9.3 },
    { title: 'The Dark Knight', genre: 'Action', year: 2008, rating: 9.0 },
    { title: 'Pulp Fiction', genre: 'Crime', year: 1994, rating: 8.9 },
    { title: 'Forrest Gump', genre: 'Drama', year: 1994, rating: 8.8 },
    { title: 'The Matrix', genre: 'Sci-Fi', year: 1999, rating: 8.7 },
    { title: 'The Godfather', genre: 'Crime', year: 1972, rating: 9.2 },
    { title: 'Schindler\'s List', genre: 'Biography', year: 1993, rating: 8.9 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', genre: 'Adventure', year: 2001, rating: 8.8 },
    { title: 'Fight Club', genre: 'Drama', year: 1999, rating: 8.8 },
    { title: 'The Silence of the Lambs', genre: 'Crime', year: 1991, rating: 8.6 },
    { title: 'Gladiator', genre: 'Action', year: 2000, rating: 8.5 },
    { title: 'Titanic', genre: 'Romance', year: 1997, rating: 7.8 },
    { title: 'Avatar', genre: 'Action', year: 2009, rating: 7.8 },
    { title: 'The Great Gatsby', genre: 'Drama', year: 2013, rating: 7.2 }
  ];
  
  console.log(movies);

//PART 4

function filterByGere(movies, genre){
    let genrearray = movies.map((n) => {  //returning array with values that match with input genre 
        if (n.genre == genre){
            return true;
        }
        else{
            return false;
        }  
    })
    return genrearray
    
}

let filterbygenre = filterByGere(movies, 'Drama')

console.log(filterbygenre)

let actionMovies = movies.filter((movie)=>{
    return movie.genre == 'Action'
}).map((movie)=>{   //chaining with map to get action movies with movie title
    return movie.title
})
console.log(actionMovies)

//PART 5

let combineResult = [{adultUser, res, username}, 
    {maleUsers, filtbygender},
    {actionMovies, filterbygenre}];

console.log("Final combine result: ", combineResult)