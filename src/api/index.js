import axios from "axios"

const adapter = axios.create({
  baseURL: "https://book5-2d7a.restdb.io/rest",
  headers: {
    "x-apikey": process.env.REACT_APP_API_TOKEN_RESTDB
  }
})

const backend = {
  books: {
    show: (id) => adapter.get(`/books/${id}`),
  },
  chapters: {
    childsOfBook: (bookId) => adapter.get(`/chapters?q={"_parent_id":"${bookId}"}`),
  },
}

export { backend }
