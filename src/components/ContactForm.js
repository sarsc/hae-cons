import React from 'react'

import '../styles/contact-form.scss'

class ContactForm extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      statusSubmit: '',
      error:'',
      email: '',
      message: '',
      name: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const form =event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ statusSubmit: "SUCCESS" });
      } else {
        this.setState({ statusSubmit: "ERROR" });
      }
    };
    xhr.send(data);

    this.setState({
      email: '',
      message: '',
      name: ''
    });
  }


  render () {

    const { statusSubmit, name, email, message } = this.state;

    return (
      <div className="mainFormContainer">
        <form
          onSubmit={this.handleSubmit}
          action="https://formspree.io/xknqrglb"
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
          {statusSubmit === "SUCCESS" ? <p>Thanks!</p> : <button className="submitBtn">Submit</button>}
          {statusSubmit === "ERROR" && <p>Ooops! There was an error.</p>}

        </form>
      </div>
  )

  }
}


export default ContactForm;
