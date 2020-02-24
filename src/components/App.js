import React, { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Form from "./Form"
import Success from "./Success"

export default props => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Form} />
        <Route path="/success" component={Success} />
      </div>
    </Router>
  )
}
