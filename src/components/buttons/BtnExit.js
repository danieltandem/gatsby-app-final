import React, { useState } from "react"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../buttons/buttons.css"
import BtnSecondary from "./BtnSecondary"
import "../modals/modal.css"

function BtnExit() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
    navigate("/")
  }

  const handleBtnClick = () => {
    setIsOpen(true)
  }

  return (
    <React.Fragment>
      <button className="btnExit animationFundido" onClick={handleBtnClick}>
        <div className="icon-salir-container">
        <svg
            height="1.5em"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
          >
            <path d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"></path>
          </svg>
          <span>Salir</span>
        </div>
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div class="modal animationFundido">
            <div className="modal-header">
              <h2>Sesión cerrada correctamente</h2>
              <BtnSecondary onClick={handleClose}>SALIR</BtnSecondary>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default BtnExit