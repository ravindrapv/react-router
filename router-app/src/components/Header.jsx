import React, { Component } from 'react'

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
          <h1>Hello main page</h1>
        </div>
      </>
    )
  }
}
