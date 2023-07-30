// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationFrom extends Component {
  state = {
    firstName: '',
    secondName: '',
    f: true,
    s: true,
    submit: false,
  }

  loadFirstName = event => {
    const FN = event.target.value

    if (FN.length === 0) {
      this.setState({firstName: FN, f: false})
    } else {
      this.setState({firstName: FN, f: true})
    }
  }

  loadSecondName = event => {
    const SN = event.target.value
    if (SN.length === 0) {
      this.setState({secondName: SN, s: false})
    } else {
      this.setState({secondName: SN, s: true})
    }
  }

  formSubmit = event => {
    event.preventDefault()
    const {firstName, secondName} = this.state
    let sub = false
    let f = true
    let s = true
    if (firstName.length !== 0) {
      sub = true
    } else {
      f = false
    }

    if (secondName.length !== 0) {
      if (firstName.length !== 0) {
        sub = true
      }
    } else {
      sub = false
      s = false
    }

    this.setState({submit: sub, f, s})
  }

  submitAnotherResponse = () => {
    this.setState({
      firstName: '',
      secondName: '',
      f: true,
      s: true,
      submit: false,
    })
  }

  render() {
    const {firstName, secondName, f, s, submit} = this.state
    const FR = f ? '' : 'R'
    const SR = s ? '' : 'R'
    console.log(submit)
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        <div className="card">
          {submit ? (
            <div className="submitted">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <p>Submitted Successfully</p>
              <button
                type="button"
                className="btn"
                onClick={this.submitAnotherResponse}
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={this.formSubmit}>
              <div className="input-container">
                <label htmlFor="FN">FIRST NAME</label>
                <input
                  id="FN"
                  type="text"
                  value={firstName}
                  onChange={this.loadFirstName}
                  onBlur={this.loadFirstName}
                  placeholder="First Name"
                  className={`input-field ${FR}`}
                />
                {!f && <p className="eMSG">Required</p>}
              </div>

              <div className="input-container">
                <label htmlFor="SN">LAST NAME</label>
                <input
                  id="SN"
                  type="text"
                  onChange={this.loadSecondName}
                  onBlur={this.loadSecondName}
                  className={`input-field ${SR}`}
                  value={secondName}
                  placeholder="Second Name"
                />
                {!s && <p className="eMSG">Required</p>}
              </div>

              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationFrom
