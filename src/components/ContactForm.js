import React from 'react'

import '../styles/contact-form.scss'

class ContactForm extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      stat: '',
      error:'',
      email: '',
      message: '',
      name: '',
    };
  }

  handleSubmit = (event) => {
    alert('message was submitted');
    event.preventDefault();

    this.setState({
      email: '',
      message: '',
      name: '',
    })
  }


  render () {

    const { stat, name, email, message } = this.state;

    return (
      <div className="mainFormContainer">
        <form
          onSubmit={this.handleSubmit}
          method="POST"
          className="formContainer"
        >
          <div className="inputContainer">
            <label htmlFor="name">Name</label>
            <input
              onChange={(event) => this.setState({name: event.target.value})}
              value={name}
              id="name"
              type="text"
              name="name"
              style={{ borderRadius: '4px', padding: '10px'}}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="email">Email</label>
            <input
              onChange={(event) => this.setState({email: event.target.value})}
              value={email}
              id="email"
              type="email"
              name="_replyto"
              style={{ borderRadius: '4px', padding: '10px'}}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="message">Message</label>
            <textarea
              onChange={(event) => this.setState({message: event.target.value})}
              value={message}
              name="message"
              rows="10"
              cols="20"
              style={{ borderRadius: '4px', padding: '10px'}} />
          </div>

          <input
            type="text"
            name="_gotcha"
            style={{display: "none"}}
           />

          <button className="submitBtn">Submit</button>
        </form>
      </div>
  )

  }
}


export default ContactForm;
