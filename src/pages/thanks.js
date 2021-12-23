import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <Seo title="Merci" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "var(--primary-color)",
        }}
      />
      <h1>Message reçu !</h1>
      <p>Merci pour le petit mot. Nous vous répondons à la vitesse de l'éclair !</p>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Accueil
      </Link>
    </div>
  </Layout>
)

export default Thanks
