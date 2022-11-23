import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Sidebar() {
    return (
        <>
            <div>
                <header className=' p-6 width position'>
                    <strong>DashBoard</strong>
                </header>
                <aside className=' w-96'>
                    <ul>
                        <NavLink activeClassName='active' exact to="/">
                            <li>Home</li>
                        </NavLink>
                        <NavLink activeClassName='active' exact to="/Article">
                            <li>Article</li>
                        </NavLink>
                        <NavLink activeClassName='active' exact to="/People">
                            <li>PEOPLE</li>
                        </NavLink>
                        <NavLink activeClassName='active' exact to="/Books">
                            <li>Books</li>
                        </NavLink>
                        <NavLink activeClassName='active' exact to="/Help">
                            <li>help</li>
                        </NavLink>
                    </ul>
                </aside>
            </div>
        </>
    )
}
