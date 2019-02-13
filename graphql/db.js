export const people = [
    {
        id: 0,
        name: 'luiseok',
        age: 29,
        gender: "male"
    },
    {
        id: 1,
        name: 'developer1',
        age: 12,
        gender: "male"
    },
    {
        id: 2,
        name: 'developer2',
        age: 31,
        gender: "female"
    },
    {
        id: 3,
        name: 'developer3',
        age: 32,
        gender: "female"
    },
    {
        id: 4,
        name: 'developer4',
        age: 45,
        gender: "female"
    },
    {
        id: 5,
        name: 'developer5',
        age: 17,
        gender: "male"
    },
    {
        id: 6,
        name: 'developer6',
        age: 23,
        gender: "female"
    },
    {
        id: 7,
        name: 'developer7',
        age: 49,
        gender: "male"
    },
    {
        id: 8,
        name: 'developer8',
        age: 33,
        gender: "male"
    },
]
// export const getById = id => {
//     // const filteredPeople = people.filter(person => id === person.id)
//     // return filteredPeople[0]
// }
let movies = [
    {
        id: 0,
        name: "스타워즈",
        score: 1
    },
    {
        id: 1,
        name: "Avengers",
        score: 8
    },
    {
        id: 2,
        name: "The Godfather I",
        score: 99
    },
    {
        id: 3,
        name: "Logan",
        score: 22
    }
]

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(m=>m.id === id);
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(m=>m.id!==id);
    if(movies.length >  cleanedMovies.length) {
        movies = cleanedMovies;
        return true
    } else return false;
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    }
    movies.push(newMovie)
    return newMovie
}
