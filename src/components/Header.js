import React from "react"
import Button from "./Button"
import "../index.css"

const Header = ({showForm, changeTextColor}) => {
    return(
        <header className="header">
            <h2 className="app-header">Task Manager App</h2>
            <Button onClick={showForm} color={changeTextColor ? 'red' : 'green'} text={changeTextColor ? 'Close': 'Add'}></Button>
        </header>
    )
}

export default Header;