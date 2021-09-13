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
        <label htmlFor="first-name">Write your name here:
        <input onChange={onChange} type="text" id="first-name"></input></label>
      <input type="submit" value="Save name"></input>
        
    </form>
    </div>
  )
}

export default withRouter(HomeNameForm);
