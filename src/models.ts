export interface IProduct {
    id?: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
      rate: number
      count: number
    }
}

export interface ICategory {
  id: string
  name: string
  picture: string
}

export interface INote {
  id: string
  archive: boolean
  category: string
  content: string
  created: Date
  dates: string
  name: string
  picture: string
}