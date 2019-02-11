import {people, getById} from './db'

const resolvers = {
    Query: {
        people: () => people,
        person: (_, args) => {
            return getById(args.id)
        }
    }
}
export default resolvers
