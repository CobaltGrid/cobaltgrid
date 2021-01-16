import React from "react"
import { Link } from "gatsby"

export default function ProjectCard(props) {
  console.log(props)
  return (
    <div className="project-card">
      <Link to={`/project/${props.project.slug}`}>
        <div className="relative p-2">
          <div className="relative">
            <div className="aspect-ratio-16/9"></div>
            <img
              src={props.project.feature_image.publicURL}
              alt={props.project.name}
              className="absolute left-0 top-0 w-full h-full object-contain"
            />
          </div>
          <div className="project-details absolute left-0 top-0 w-full h-full bg-cobalt-mud text-white flex items-center text-lg">
            {props.project.excerpt}
          </div>
        </div>
        <div className="card-title">{props.project.name}</div>
      </Link>
    </div>
  )
}
