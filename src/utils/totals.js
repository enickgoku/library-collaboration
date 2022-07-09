const totalBooks = (books) => {
    return books.length
}

const totalAuthors = (authors) => {
    return authors.length
}

const totalAccounts = (accounts) => {
    return accounts.length
}

const totalGenres = (books) => {
    const { genres } = books
    return genres.length
}