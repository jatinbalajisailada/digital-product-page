import React from "react";

export default function Header(props){
  return(
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">{props.logo}</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 cursor-pointer hover:text-gray-900">{props.firstLink}</a>
          <a className="mr-5 cursor-pointer hover:text-gray-900">{props.secondLink}</a>
          <a className="mr-5 cursor-pointer hover:text-gray-900">{props.thirdLink}</a>
        </nav>
      </div>
    </header>
  );
}