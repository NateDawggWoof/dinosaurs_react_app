import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';


const HomeNameForm = ({saveUserName, history}) => {
const [firstName, setFirstName] = useState("")

  const onSubmit = event => {
    event.preventDefault()
    console.log(firstName)
    saveUserName(firstName)
    history.push('/dinosaurs')
  }

  const onChange = event => {
  setFirstName(event.target.value)
  console.log("hey")
  }


  return (
    <div>
     <form onSubmit={onSubmit}>
        <label htmlFor="first-name">Enter your name?</label>
        <input onChange={onChange} type="text" id="first-name"></input>
        <input id="namesubmit" type="submit" value="Save"></input>
    </form>
    </div>
  )
}

export default withRouter(HomeNameForm);
