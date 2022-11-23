import React from 'react'
import article from './article.json'
import { Link } from 'react-router-dom'

export default function Article() {
    return (
        <>
            <div className="container-2">
                <h3>Article</h3>
                {
                    article.map(article => {
                        return <div>
                            <ul>
                                <li>
                                    <Link to={"articles/" + article.slug}>
                                        <h3>{article.title}</h3>
                                    </Link>
                                    <small>{article.author}</small>
                                </li>
                            </ul>
                        </div>

                    }
                    )
                }
            </div>
        </>
    )
}
