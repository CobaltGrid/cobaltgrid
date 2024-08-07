import React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const TermsGeneralPage = () => {
  return (
    <Layout>
      <Seo title="General Sale Terms & Conditions" />
      <div className="container pt-4">
        <p>You can view our generic term and conditions of sale below.</p>

        <a href="/documents/terms/generic-sales.pdf">
          <h2 className="text-cobalt-mud underline hover:text-cobalt-bright transition-colors inline-block">
            General Sale Terms
          </h2>
        </a>
      </div>
    </Layout>
  )
}

export default TermsGeneralPage
