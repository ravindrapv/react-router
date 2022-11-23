import React from 'react'
import Data from './BookData.json'

export default function Books() {
    return (
        <>
            <div className="container-2">
                <h3 className=' text-center'>Books</h3>
                <ul className=' flex flex-wrap justify-between gap-1'>
                    {
                        Data.map(d => {
                            return <div className="card">
                                <li>title:{d.TITLE}</li>
                                <h2>author:{d.AUTHOR}</h2>
                                <p>dec:{d.PHYSICAL_DESCRIPTION}</p>
                            </div>
                        })
                    }
                </ul>
            </div>
        </>
    )
}
