import React from "react"
import "../sass/main.scss"
import Call from "./Call/Call"
import { Navigation } from "./Navigation/Navigation"

const App = () => {
  return (
    <div className="app">
      <Call />
      <Navigation />
    </div>
  )
}

export default App
