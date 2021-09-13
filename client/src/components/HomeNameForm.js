import React, { useState } from 'react';

const HomeNameForm = ({saveUserName, togglePage}) => {
const [firstName, setFirstName] = useState("")



  const onSubmit = event => {
    event.preventDefault()
    console.log(firstName)
    saveUserName(firstName)
    togglePage('dinos')
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

export default HomeNameForm;
