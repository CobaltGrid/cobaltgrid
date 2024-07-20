import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image";

const Slider = function (props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [expandedImage, setExpandedImage] = useState(null)

  let goForwards = () => {
    let newIndex =
      currentImageIndex < props.images.length - 1 ? currentImageIndex + 1 : 0
    setCurrentImageIndex(newIndex)
    return newIndex
  }

  let goBackwards = () => {
    let newIndex =
      currentImageIndex > 0 ? currentImageIndex - 1 : props.images.length - 1
    setCurrentImageIndex(newIndex)
    return newIndex
  }

  return (
    <div className="w-full relative">
      <div className="aspect-ratio-16/9" />
      {props.images.length > 1 && (
        <button
          className="absolute ml-2 left-0 top-0 bottom-0 bg-cobalt-mud text-white text-3xl font-bold rounded-full w-10 h-10 flex items-center justify-center my-auto z-10 shadow-lg hover:bg-gray-800 focus:outline-none"
          onClick={goBackwards}
          onKeyDown={goBackwards}
          aria-label="Previous Image"
        >
          <svg
            x="0px"
            y="0px"
            viewBox="287.6 0 306.9 486.6"
            version="1.1"
            width="50%"
            height="50%"
            fill="white"
          >
            <g id="g3015" transform="matrix(1,0,0,-1,387.25424,1338.5763)">
              <path
                d="M115.6,863.6L-88.1,1067c-7.7,7.7-11.6,17.1-11.6,28.3s3.9,20.6,11.6,28.3
                            L115.6,1327c7.7,7.7,17.1,11.6,28.3,11.6s20.6-3.9,28.3-11.6l23.4-23.4c7.7-7.7,11.6-17.1,11.6-28.3s-3.9-20.6-11.6-28.3
                            L43.8,1095.1l151.9-151.6c7.7-7.9,11.6-17.4,11.6-28.4s-3.9-20.4-11.6-28.1l-23.4-23.4c-7.7-7.7-17.1-11.6-28.3-11.6
                            S123.3,855.9,115.6,863.6z"
              />
            </g>
          </svg>
        </button>
      )}
      <div className="absolute left-0 right-0 w-full my-auto top-0 bottom-0 cursor-pointer">
        {props.images.map((image, index) => {
          return (
            <button
              key={index}
              className={`w-full h-full ${
                currentImageIndex === index ? "" : "hidden"
              }`}
              onClick={() => {
                setExpandedImage(image)
              }}
              onKeyDown={() => {
                setExpandedImage(image)
              }}
              aria-label="Expand Image"
            >
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                style={{
                  height: "100%",
                  width: "100%",
                  top: "0",
                  bottom: "0",
                  position: "initial",
                }}
                imgStyle={{ objectFit: "contain" }} />
            </button>
          );
        })}
      </div>
      {props.images.length > 1 && (
        <button
          className="absolute mr-2 right-0 top-0 bottom-0 bg-cobalt-mud text-white text-3xl font-bold rounded-full w-10 h-10 flex items-center justify-center my-auto z-10 shadow-lg hover:bg-gray-800 focus:outline-none"
          onClick={goForwards}
          aria-label="Next Image"
        >
          <svg
            x="0px"
            y="0px"
            viewBox="287.6 0 306.9 486.6"
            version="1.1"
            width="50%"
            height="50%"
            fill="white"
          >
            <path
              d="M350.9,486.6c-11.1,0-20.6-3.9-28.3-11.6l-23.4-23.4
                        c-7.7-7.7-11.6-17.1-11.6-28.1s3.9-20.5,11.6-28.4L451,243.4L299.1,91.6c-7.7-7.7-11.6-17.1-11.6-28.3s3.9-20.6,11.6-28.3l23.4-23.4
                        C330.3,3.9,339.7,0,350.9,0s20.6,3.9,28.3,11.6L582.9,215c7.7,7.7,11.6,17.1,11.6,28.3c0,11.1-3.9,20.6-11.6,28.3L379.1,475
                        C371.4,482.7,362,486.6,350.9,486.6z"
            />
          </svg>
        </button>
      )}
      {expandedImage && (
        <div className="top-0 left-0 fixed w-screen h-screen bg-black bg-opacity-75 flex justify-center items-center z-10">
          <div
            className="relative w-11/12 md:w-9/12"
            style={{ height: "90vh" }}
          >
            <button
              className="absolute top-0 right-0 bg-cobalt-mud text-white text-3xl rounded-full w-10 h-10 flex items-center justify-center my-auto z-20 shadow cursor-pointer"
              onClick={() => {
                setExpandedImage(null)
              }}
              onKeyDown={() => {
                setExpandedImage(null)
              }}
            aria-label="Close Image"
            >
              <span className="fas fa-times"></span>
            </button>
            {props.images.length > 1 && (
              <button
                className="absolute ml-2 left-0 top-0 bottom-0 bg-cobalt-mud text-white text-3xl font-bold rounded-full w-10 h-10 flex items-center justify-center my-auto z-10 shadow-lg hover:bg-gray-800 focus:outline-none"
                onClick={() => {
                  setExpandedImage(props.images[goBackwards()])
                }}
                aria-label="Previous Image"
              >
                <svg
                  x="0px"
                  y="0px"
                  viewBox="287.6 0 306.9 486.6"
                  version="1.1"
                  width="50%"
                  height="50%"
                  fill="white"
                >
                  <g
                    id="g3015"
                    transform="matrix(1,0,0,-1,387.25424,1338.5763)"
                  >
                    <path
                      d="M115.6,863.6L-88.1,1067c-7.7,7.7-11.6,17.1-11.6,28.3s3.9,20.6,11.6,28.3
                                  L115.6,1327c7.7,7.7,17.1,11.6,28.3,11.6s20.6-3.9,28.3-11.6l23.4-23.4c7.7-7.7,11.6-17.1,11.6-28.3s-3.9-20.6-11.6-28.3
                                  L43.8,1095.1l151.9-151.6c7.7-7.9,11.6-17.4,11.6-28.4s-3.9-20.4-11.6-28.1l-23.4-23.4c-7.7-7.7-17.1-11.6-28.3-11.6
                                  S123.3,855.9,115.6,863.6z"
                    />
                  </g>
                </svg>
              </button>
            )}
            {props.images.length > 1 && (
              <button
                className="absolute mr-2 right-0 top-0 bottom-0 bg-cobalt-mud text-white text-3xl font-bold rounded-full w-10 h-10 flex items-center justify-center my-auto z-10 shadow-lg hover:bg-gray-800 focus:outline-none"
                onClick={() => {
                  setExpandedImage(props.images[goForwards()])
                }}
                aria-label="Next Image"
              >
                <svg
                  x="0px"
                  y="0px"
                  viewBox="287.6 0 306.9 486.6"
                  version="1.1"
                  width="50%"
                  height="50%"
                  fill="white"
                >
                  <path
                    d="M350.9,486.6c-11.1,0-20.6-3.9-28.3-11.6l-23.4-23.4
                              c-7.7-7.7-11.6-17.1-11.6-28.1s3.9-20.5,11.6-28.4L451,243.4L299.1,91.6c-7.7-7.7-11.6-17.1-11.6-28.3s3.9-20.6,11.6-28.3l23.4-23.4
                              C330.3,3.9,339.7,0,350.9,0s20.6,3.9,28.3,11.6L582.9,215c7.7,7.7,11.6,17.1,11.6,28.3c0,11.1-3.9,20.6-11.6,28.3L379.1,475
                              C371.4,482.7,362,486.6,350.9,486.6z"
                  />
                </svg>
              </button>
            )}
            <GatsbyImage
              image={expandedImage.childImageSharp.gatsbyImageData}
              className="mx-auto my-auto"
              style={{
                height: "100%",
                width: "100%",
                top: "0",
                bottom: "0",
                position: "initial",
              }}
              imgStyle={{ objectFit: "contain" }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Slider;