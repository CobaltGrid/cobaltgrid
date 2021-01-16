import React from "react"

export default function DevStage(props) {
  return (
    <div className={`flex items-center space-x-4 ${props.className}`}>
      <div className=" flex-none text-cobalt-bright text-3xl border-full border-cobalt-bright border-4 rounded-full w-10 h-10 flex justify-center items-center">
        {props.number}
      </div>
      <div className="flex-grow">
        <h3>{props.name}</h3>
        {props.children}
      </div>
    </div>
  )
}
