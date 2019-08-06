import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = props => {
  const stopPropagation = event => {
    event.stopPropagation()
  }
  return (
    <footer
      className="flex justify-center relative mx-6 z-10"
      onClick={() => props.setInputValue(!props.inputValue)}
    >
      <div
        className={`absolute bottom-0 w-full bg-white rounded-t-lg p-5 max-w-4xl m-0 overflow-hidden h-${
          props.inputValue ? "auto" : "16"
        } sm:h-${
          props.inputValue ? "40" : "16"
        } shadow-2xl text-center transition-height`}
      >
        <span className="uppercase">Connect</span>
        <div className="sm:px-4 flex flex-col">
          <div className="flex-1 sm:flex">
            <div className="mt-4 sm:w-1/4">
              <a href="mailto:goniacho@gmail.com" className="underline">
                Email
              </a>
            </div>
            <div className="mt-4 sm:w-1/4">
              <a
                href="https://www.linkedin.com/in/goniacholewa/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                onClick={stopPropagation}
              >
                LinkedIn
              </a>
            </div>
            <div className="mt-4 sm:w-1/4">
              <a
                href="https://www.instagram.com/coconuthooves"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                onClick={stopPropagation}
              >
                Instagram
              </a>
            </div>
            <div className="mt-4 sm:w-1/4">
              <a
                href="https://www.twitter.com/_gonia_"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                onClick={stopPropagation}
              >
                Twitter
              </a>
            </div>
          </div>
          <div className="flex-1 sm:flex mt-8">
            <div className="sm:w-1/2 sm:text-left">
              © Gonia Cholewa {new Date().getFullYear()}
            </div>
            <div className="sm:w-1/2 sm:text-right">
              Website built by{" "}
              <a
                href="https://www.samueldurkin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                onClick={stopPropagation}
              >
                Sam
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer