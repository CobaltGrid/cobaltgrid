import React from "react"
import { Link } from "gatsby"

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <Link to={`/project/${project.slug}`}>
        <div className="relative">
          <div className="w-full h-52 bg-gray-100 flex items-center justify-center p-4">
            <img
              src={project.feature_image.publicURL}
              alt={project.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="project-details absolute inset-0 bg-cobalt-mud/95 text-white flex items-center text-base p-4">
            {project.excerpt}
          </div>
          <div className="card-title">{project.name}</div>
        </div>
      </Link>
    </div>
  )
}
