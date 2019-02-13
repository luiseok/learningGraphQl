import {getMovies, getById, addMovie, deleteMovie} from './db'

const resolvers = {
    Query: {
        // people: () => people,
        // person: (_, args) => {
        //     return getById(args.id)
        // }
        movies : () => getMovies(),
        movie: (_, {id}) => getById(id)
    },
    Mutation: {
        addMovie: (_, {name, score}) => {
            return addMovie(name, score)
        },
        deleteMovie: (_, {id}) => deleteMovie(id)
    }
}
export default resolvers

