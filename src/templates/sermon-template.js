import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

function SermonTemplate({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <article>
        <header>
          <h1>{frontmatter.title}</h1>
          <small>{frontmatter.date}</small>
        </header>
        <section dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </>
  )
}

export default SermonTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        path
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
