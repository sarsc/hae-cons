import React from 'react'

import '../styles/contact-form.scss'

class ContactForm extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      statusSubmit: '',
      errors: {
        nameErr: '',
        messageErr: '',
        emailErr: ''
      },
      email: '',
      message: '',
      name: '',
      isValid: false,
    };


  }

   // isFormValid = () => {
   //  const err = Object.values(this.state.errors)
   // }


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

  handleBlur = (event) => {
    const { value, id } = event.target

    let errors = this.state.errors
    const regexEmail = RegExp(/\S+@\S+\.\S+/ );
    switch(id) {
      case 'name':
        errors.nameErr = value.length < 3 ? 'Please enter your full name' : ''
      break;
      case 'email':
        errors.emailErr = !regexEmail.test(value) ? 'Please enter a valid email address' : ''
      break;
      case 'message':
        errors.messageErr = value.length < 10 ? 'Your message must be at least 10 characters long' : ''
      break;
      default:
      break;
    }

    this.setState({ errors});
  }

  handleFocus = (event) => {

  this.setState(prevState => ({errors: { ...prevState.errors, nameErr: '' }}))

  }

  handleChange = (event) => {
    const { value, id } = event.target
    this.setState({ [id]: value});
  }

  render () {
    const { statusSubmit, name, email, message, errors } = this.state;
    return (
      <div className="mainFormContainer">
        <form
          action="https://formspree.io/xknqrglb"
          method="POST"
          onSubmit={this.handleSubmit}
          className="formContainer"
        >
          <div className="inputContainer">
            <label htmlFor="name">Full Name</label>
            <input
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              value={name}
              id="name"
              type="text"
              name="name"
            />
          <span>{errors.nameErr}</span>
          </div>

          <div className="inputContainer">
            <label htmlFor="email">Email</label>
            <input
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              value={email}
              id="email"
              type="email"
              name="_replyto"
            />
          <span>{errors.emailErr}</span>
          </div>

          <div className="inputContainer">
            <label htmlFor="message">Text</label>
            <textarea
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              value={message}
              id="message"
              name="message"
              rows="10"
              cols="20"
              maxLength="700"
              />
          <span>{errors.messageErr}</span>
          </div>

          <input
            type="text"
            name="_gotcha"
            style={{display: "none"}}
           />
            <button className="submitBtn">Submit</button>
          {statusSubmit === "SUCCESS" && 
            <p className="messageSubmit">Thank you! Your request has been submitted!</p> 
          }
          {statusSubmit === "ERROR" && 
            <p className="messageSubmit">Ooops! There was an error.</p>
          }
        </form>
      </div>
  )

  }
}


export default ContactForm;
