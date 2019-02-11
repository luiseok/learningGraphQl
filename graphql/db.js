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

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id)
    return filteredPeople[0]
}
