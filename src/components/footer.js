/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        Fait avec{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        par des écrivains passionnés.
      </p>
    </div>
  </footer>
)

export default Footer
