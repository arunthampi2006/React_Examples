import React, { Component } from 'react'

class Loader extends Component {
  render (){
    return (
      <div className="loader">
        <style jsx>{`
          .loader {
            border: 8px solid #f3f3f3;
            border-top: 8px solid #3498db;
            border-radius: 50%;
            width: 400px;
            height: 900px;
            animation: spin 2s linear infinite;
            margin-left: auto;
            margin-right: auto;
            margin-top: 750px;
            z-index: 9999;
            position: absolute;
            top:0;
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
        </style>
      </div>
    )
  }
}

export default Loader
