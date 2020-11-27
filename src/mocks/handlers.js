import { rest } from "msw"

import Book from "../data/book.json"

export const handlers = [
  rest.get("https://book5-2d7a.restdb.io/rest/books/5fa0a047f8a0d31e00000662", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({...Book})
    )
  })
]
