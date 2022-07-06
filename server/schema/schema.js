const { gql } = require('apollo-server-express')

const typeDefs = gql`
	type Book {
		id: ID
		name: String
		genre: String
        author: Author
	}

    type Author {
        id: ID!
        name: String
        age: Int
        books: [Book]
    }

	# ROOT TYPE
	type Query {
		books: [Book]
        book(id: ID!): Book
        bookByName(name: String!): [Book]
        bookByGenre(genre: String!): [Book]
        # =========
        authors: [Author]
        author(id: ID!): Author
        authorByName(name: String!): [Author]
        authorByAge(age: Int!): [Author]
	}

    type Mutation {
        createAuthor(
            id: ID,
            name: String,
            age: Int
        ): Author

        createBook(
            id: ID,
		    name: String,
		    genre: String,
            authorId: ID!
        ):Book
    }
`

module.exports = typeDefs