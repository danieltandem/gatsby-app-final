import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  const isClient = typeof window !== "undefined"

  return (
    <div>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      {isClient && (
        <div>
          {/* Aquí podrías poner cualquier código que necesite acceso a window o document */}
          <p>Contenido que solo se muestra en el cliente</p>
        </div>
      )}
      <Link to="/">Go Home</Link>
    </div>
  )
}

export default NotFoundPage