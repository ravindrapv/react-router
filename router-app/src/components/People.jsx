import React from 'react'
import people from './people.json'

export default function People() {
    return (
        <>
            <div className="container-2">
                <h3>PEOPLE</h3>
                <ul className=' flex flex-wrap gap-2'>
                    {
                        people.map(p => {
                            return <div className="card">
                                <ul>
                                    <img src={p.p} alt={p.name} />
                                    <h2>{p.name}</h2>
                                    <p>{p.description}</p>
                                    <a href={p.wikiLink}>Learn More!</a>
                                </ul>
                            </div>
                        })
                    }
                </ul>
            </div>
        </>

    )
}
