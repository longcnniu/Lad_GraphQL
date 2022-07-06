const { books, authors } = require('../data/static')
const AuthorModel = require('../models/Author')
const BookModel = require('../models/Book')

const resolvers = {
    //Query
    Query: {
        //Find All Book
        books: async () => {
            // books
            try {
                const dataBooks = await BookModel.find()
                return dataBooks
            } catch (error) {
                console.log(error.message);
            }
        },

        //find Book By ID
        book: async (parent, args) => {
            // books.find(book => book.id == args.id)
            try {
                const dataBook = await BookModel.findById({ _id: args.id })
                return dataBook
            } catch (error) {
                console.log(error.message);
            }
        },

        //Find book By Name
        bookByName: async (parent, args) => {
            try {
                const dataBook = await BookModel.findOne({ name: args.name })
                return dataBook
            } catch (error) {
                console.log(error.message);
            }
        },

        //Find All Author
        authors: async () => {
            // authors
            try {
                const dataAuthor = await AuthorModel.find()
                return dataAuthor
            } catch (error) {
                console.log(error.message);
            }
        },

        //Find Author By ID
        author: async (parent, args) => {
            // authors.find(author => author.id == args.id)
            try {
                const dataAuthor = await AuthorModel.findById({ _id: args.id })
                return dataAuthor
            } catch (error) {
                console.log(error.message);
            }
        },

        //Find Author by Name
        authorByName: async (parent, args) => {
            try {
                const dataAuthor = await AuthorModel.findOne({name: args.name})
                return dataAuthor
            } catch (error) {
                console.log(error);
            }
        }
    },

    //Find Books of Author
    Book: {
        author: async (parent, args) => {
            // console.log(parent);
            // return authors.find(author => author.id == parent.authorId)
            try {
                const dataAuthor = await AuthorModel.findById({ _id: parent.authorId })
                return dataAuthor
            } catch (error) {
                console.log(error.message);
            }
        }
    },

    //Find Author of this book
    Author: {
        books: async (parent, args) => {
            // return books.filter(book=> book.authorId == parent.id)
            try {
                const dataBooks = await BookModel.find({authorId: parent.id})
                return dataBooks
            } catch (error) {
                console.log(error.message);
            }
        }
    },

    //Mutation (Creact)
    Mutation: {
        createAuthor: async (parent, args) => {
            const newAuthor = new AuthorModel(args)
            return await newAuthor.save()
        },
        createBook: async (parent, args) => {
            const newBook = new BookModel(args)
            return await newBook.save()
        }
    }
}

module.exports = resolvers