import React from "react"

export default function DevStage(props) {
  return (
    <div
      className={`flex items-center space-x-4 px-2 ${props.className ?? ""}`}
    >
      <img src={props.image} style={{ maxWidth: "200px" }} alt="" />
      <div className="flex-grow">
        <h3>{props.name}</h3>
        {props.children}
      </div>
    </div>
  )
}
