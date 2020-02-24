import React, { useState } from "react"
import validator from "validator"
import "../styles/styling.css"

export default props => {
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [username, setUsername] = useState("")
  const [userError, setUserError] = useState("")
  const [password, setPassword] = useState("")
  const [passError, setPassError] = useState("")
  const [confirm, setConfirm] = useState("")
  const [confirmError, setConfirmError] = useState("")
  const [website, setWebsite] = useState("")
  const [webError, setWebError] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    let valid = true

    if (name === "") {
      valid = false
      setNameError("Cannot be blank!")
    } else {
      setNameError("")
    }

    if (!validator.isEmail(email)) {
      valid = false
      setEmailError("Must be a valid Email address")
    } else {
      setEmailError("")
    }

    if (username === "") {
      valid = false
      setUserError("Cannot be blank!")
    } else {
      setUserError("")
    }

    if (password === "") {
      valid = false
      setPassError("Cannot be blank!")
    } else {
      setPassError("")
    }

    if (confirm != password) {
      valid = false
      setConfirmError("Must match password!")
    } else {
      setConfirmError("")
    }

    if (!validator.isURL(website)) {
      valid = false
      setWebError("Must be a valid URL")
    } else {
      setWebError("")
    }

    if (valid) {
      props.history.push("/success")
    } else {
      alert("Something went wrong!")
    }
  }

  return (
    <div className="wrapper">
      <h1>Profile Form - All fields required</h1>
      <form onSubmit={handleSubmit}>
        <label className={nameError ? "error" : ""} htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="John Smith"
          className={nameError ? "error" : ""}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <label className={emailError ? "error" : ""} htmlFor="email">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Jsmith@gmail.com"
          className={emailError ? "error" : ""}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label className={userError ? "error" : ""} htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Smithy1776"
          className={userError ? "error" : ""}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <label className={passError ? "error" : ""} htmlFor="password">
          Password
        </label>
        <input
          type="text"
          id="password"
          placeholder="Cannot be blank"
          className={passError ? "error" : ""}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <label
          className={confirmError ? "error" : ""}
          htmlFor="confirmpassword"
        >
          Confirm Password
        </label>
        <input
          type="text"
          id="confirmpassword"
          placeholder="Must match password"
          className={confirmError ? "error" : ""}
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
        />
        <label className={webError ? "error" : ""} htmlFor="website">
          Website
        </label>
        <input
          type="text"
          id="website"
          placeholder="Cannot be blank"
          className={webError ? "error" : ""}
          value={website}
          onChange={e => setWebsite(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
