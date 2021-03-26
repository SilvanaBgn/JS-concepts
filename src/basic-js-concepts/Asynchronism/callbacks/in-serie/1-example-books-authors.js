const booksDb = [
      {
        id: 1,
        title: 'Cenicienta',
        authorId: 3
      },
      {
        id: 2,
        title: 'El Grinch',
        authorId: 2
      },
      {
        id: 3,
        title: 'Hansel y Gretel',
        authorId: 1
      }
    ];

const authorsDb = [
      {
        id: 1,
        name: 'Robert Zafiro'
      },
      {
        id: 2,
        name: 'Maria Céliga'
      }
    ];

function getBookById(pId, callback) {
  const book = booksDb.find(book => book.id == pId);
  if (!book) {
    const error = new Error('Book not found')
    return callback(error);
  }
  callback(null, book);
}

function getAuthorById(pId, callback) {
  const author = authorsDb.find(author => author.id == pId);
  if (!author) {
    const error = new Error('Author not found')
    return callback(error);
  }
  callback(null, author);
}


//------------------------------------------------------------//
// Calling the function with callback and management of errBack
// I'm calling with bookId=20 --> should return an error
getBookById(20, (err, book) => {
  if(err) {
    return console.log(err.message);
  }
  return console.log('Book found is', book);
})

//------------------------------------------------------------//
// Nested callbacks in serie
// I'm calling with bookId=2 --> should return correct
getBookById(2, (err, book) => {
  if(err) {
    return console.log(err.message);
  }
  getAuthorById(book.authorId, (err, author) => {
    if(err) {
      return console.log(err.message);
    }
    console.log(`This book ${book.title} was written by ${author.name}`)
  })
})

/* Callback hell will be when all these nested callbacks start to be a caos, with 
no mantainability*/