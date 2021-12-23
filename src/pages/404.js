import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiBugLine, RiSkullLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <Seo title="Page not found" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <header>
        <RiSkullLine
          style={{
            fontSize: "128px",
            color: "var(--primary-color)",
          }}
        />
        <h1>Oups, cette page n'existe pas.</h1>
        <p>
          Revenez vite lire nos résumés !
        </p>
      </header>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Accueil
      </Link>
      <Link to="/contact" className="button -outline">
        Signalez un bug <RiBugLine className="icon -right" />
      </Link>
    </div>
  </Layout>
)

export default NotFound
