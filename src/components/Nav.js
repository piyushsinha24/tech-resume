import React, { Component } from "react";
import Logo from "../assets/logo.svg";

class Nav extends Component {
  render() {
    return (
      <div className="flex justify-between bg-white mx-auto px-4 py-2 print:hidden">
        <a href="/">
          <img
            className="w-12 inline-block"
            src={Logo}
            alt="tech-resume-logo"
          />
        </a>
        {this.props.showDownloadBtn?<button
          className="z-10 rounded bg-blue text-white m-2 p-2 text-center print:hidden"
          onClick={(e) => {
            e.preventDefault();
            window.print();
          }}
        >
          <svg
            className="w-5 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>{" "}
          Download PDF
        </button>:""}
      </div>
    );
  }
}

export default Nav;
