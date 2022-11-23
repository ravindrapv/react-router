import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
    }
  }
  render() {
    return (
      <>
        <div className="container-2">
          <div>
            <ul className=' text-center flex flex-1'>
              <li className="card-2">
                <Link to="/Article">Article</Link>
              </li>
              <li>
                <li className="card-2">
                  <Link to="/Books">Books</Link>
                </li>
              </li>
              <li>
                <li className="card-2">
                  <Link to="/People">People</Link>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}
