// Write your code here

import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {firstname: false, lastname: false}

  shFirstname = () => {
    this.setState(pre => ({firstname: !pre.firstname, lastname: pre.lastname}))
  }

  shLastname = () => {
    this.setState(pre => ({firstname: pre.firstname, lastname: !pre.lastname}))
  }

  changeFirstname = () => {
    const {firstname, lastname} = this.state

    return firstname ? (
      <p className="fname">Joe</p>
    ) : (
      <p className="fname">{null}</p>
    )
  }

  changeLastname = () => {
    const {firstname, lastname} = this.state

    return lastname ? (
      <p className="lname">Jonas</p>
    ) : (
      <p className="lname">{null}</p>
    )
  }

  render() {
    const headingF = this.changeFirstname()
    const headingL = this.changeLastname()

    return (
      <div className="main">
        <h1>Show/Hide</h1>
        <div className="buttons">
          <div className="button">
            <button onClick={this.shFirstname}>Show/Hide Firstname</button>
            {/* first name value */}
            {headingF}
          </div>
          <div className="button">
            <button onClick={this.shLastname}>Show/Hide Lastname</button>
            {/* last name value */}
            {headingL}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
