import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      return (
        <figure>
          <div className="flex justify-center">
            <Img
              className="flex-1 max-w-lg mt-10"
              alt={props.alt}
              fluid={image.node.childImageSharp.fluid}
            />
          </div>

          {props.alt ? (
            <figcaption className="text-center text-sm">{props.alt}</figcaption>
          ) : null}
        </figure>
      )
    }}
  />
)

export default Image
