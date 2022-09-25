
import React, { useState } from "react"
import { ICategory } from "../models"

interface CategoryListProps {
    category: ICategory
}

export function CategoryList({ category }: CategoryListProps) {
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'

    const btnClasses = ['py-2 px-4 border', btnBgClassName]

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <img src={category.picture} className="w-1/6" alt={category.name} />
            <p> { category.name } </p>
            <p className="font-bold">{category.name}</p>
            <button 
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >
                { details ? 'Hide Details' : 'Show Details' }
            </button>

            {details && <div>
                <p> { category.name }</p>
                <p>Rate: <span style={{ fontWeight: 'bold' }}>{category.id}</span></p>
            </div>}
        </div>
    )
}