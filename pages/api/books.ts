// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = BookType[]

const booksDB = [
  {
    id: 1,
    title: 'The Great Gatsby',
  },
  {
    id: 2,
    title: 'The Catcher in the Rye',
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
  },
  {
    id: 4,
    title: '1984',
  },
  {
    id: 5,
    title: 'Pride and Prejudice',
  },

  {
    id: 6,
    title: 'The Diary of a Young',
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'GET') {
    let books = booksDB

    const term = req.query.term as string

    if (term) {
      books = books.filter(book => book.title.toLowerCase().includes(term.toLowerCase()))
    }

    res.status(200).json(books)
  }
}

type BookType = {
  id: number
  title: string
}
