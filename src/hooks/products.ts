import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { INote, INoteFromBase, IProduct } from "../models"


export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
  
    async function fetchProducts() {
      try {
        setError('')
        setLoading(true)
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
        setProducts(response.data)
        setLoading(false)
        fetchNotes()
      }
      catch (e: unknown) {
        const error = e as AxiosError
        setLoading(false)
        setError(error.message)
      }
    }
    
    async function fetchNotes() {
      try {
        var notes: INote[] = []
        const response = await axios.get<INoteFromBase[]>('https://task1-32668-default-rtdb.europe-west1.firebasedatabase.app/notes.json')
        // notes =  response.data.map(x => { 
        //   return {
        //     id: x.id, ...x.data
        //   }
        // })
        // console.log('notes')
        // console.log(response)
        // console.log(response.data.forEach(x => {
        //   let note: INote = x.data.
        //   note.id = x.id
        //    return note 
        //   }))
      }
      catch (e: unknown) {
      }
    }
  
    useEffect( () => { fetchProducts() }, [])

    return { products, error, loading}
}