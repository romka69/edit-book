import React from "react"

const Footer = ({ children }) => (
  <>
    <hr className="mt-5" />
    <footer className="text-center py-3">
      <div>
        {children}
      </div>
      <div>
        Training project from Thinknetica.
        <a
          className="underline text-accent pl-2"
          href="https://github.com/romka69/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  </>
)


export default Footer;
