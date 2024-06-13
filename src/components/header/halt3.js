import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./header.css"
import "../layout.css"
import { Link } from "gatsby"
const Halt3 = () => (
  <div className="halt3">
 <Link to="/">
      <StaticImage
        src="../../images/icons/logogeneradorqr.png"
        alt="patrimonio"
        width={350}
        height={80}
        class="imagen"
      />
    </Link>
  </div>
)
export default Halt3