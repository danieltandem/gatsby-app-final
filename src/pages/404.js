// 404.js
import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <div>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
      <Link to="/">Go Home</Link>
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

export default NotFoundPage