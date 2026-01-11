import React from 'react'
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-1">
      <div className="flex items-center justify-center gap-6 text-gray-300 text-xl">
        
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 transition text-2xl"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 transition text-2xl"
        >
          <FaFacebook />
        </a>

        <a
          href="https://www.github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 transition text-2xl"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 transition text-2xl"
        >
          <FaLinkedin />
        </a>

      </div>
    </footer>
  )
}

export default Footer
