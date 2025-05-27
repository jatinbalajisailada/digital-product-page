import React from "react";

export default function Footer(props){
  return(
    <footer className="text-gray-600 body-font">
      <div className="bg-gray-100">
        <div className="container py-4 px-5 flex justify-center items-center">
          <p classNameName="text-gray-500">© 2025 {props.owner} —
            <a href="#" rel="noopener noreferrer" className="text-gray-600" target="_blank">{props.id}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}