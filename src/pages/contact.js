import React, { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = props => {
  const [topic, setTopic] = useState(
    props.location.state && props.location.state.topic
      ? props.location.state.topic
      : null
  )
  const [body, setBody] = useState(
    props.location.state && props.location.state.body
      ? props.location.state.body
      : null
  )

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const submitForm = async event => {
    event.preventDefault()
    if (submitting) {
      return
    }
    setSubmitting(true)
    setError(null)

    const response = await fetch(
      topic === "proposal"
        ? "https://formspree.io/f/xdopyrpl"
        : "https://formspree.io/f/xpzolanp",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(event.target),
      }
    )
    const json = await response.json()
    if ("error" in json) {
      setSubmitting(false)
      return setError(true)
    }
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <Layout>
      <SEO title="Contact Us" />
      <div className="my-auto">
        <div className="container text-center mb-2">
          {submitted && (
            <div className="text-white bg-green-400 py-16 w-full">
              <h1>Thanks!</h1>
              <p>We'll be in touch soon!</p>
            </div>
          )}
          {!submitted && (
            <div>
              <h2>What do you want to get in touch about?</h2>
              <select
                className="bg-cobalt-bright p-4 mt-2 text-white"
                value={topic ?? ""}
                onChange={event => setTopic(event.target.value)}
                onBlur={event => setTopic(event.target.value)}
              >
                <option value="" disabled>
                  Select one...
                </option>
                <option value="general" className="bg-white text-black">
                  General Enquiry
                </option>
                <option value="proposal" className="bg-white text-black">
                  Proposal
                </option>
              </select>

              {error && (
                <div className="text-white bg-red-400 py-6 w-full mt-4">
                  <h1>Uh oh!</h1>
                  <p>
                    There was an issue submitting the form. Check that
                    everything has been filled in correctly
                  </p>
                </div>
              )}

              {topic && (
                <form
                  onSubmit={submitForm}
                  className="contact-form bg-cobalt-bright p-6 text-white font-display mt-10 transition-all duration-500 ease-in-out w-full"
                >
                  {topic === "general" && (
                    <div>
                      <label>
                        <div className="text-left text-2xl">Name</div>
                        <input name="name" type="text" required />
                      </label>
                      <label>
                        <div className="text-left text-2xl mt-4">Email</div>
                        <input name="_replyto" type="email" required />
                      </label>
                      <label>
                        <div className="text-left text-2xl mt-4">Message</div>
                        <textarea
                          name="message"
                          value={body ?? ""}
                          onChange={e => setBody(e.target.value)}
                          rows="4"
                          required
                        ></textarea>
                      </label>
                    </div>
                  )}
                  {topic === "proposal" && (
                    <div>
                      <label>
                        <div className="text-left text-2xl">Name</div>
                        <input name="name" type="text" required />
                      </label>
                      <label>
                        <div className="text-left text-2xl mt-4">Email</div>
                        <input name="_replyto" type="email" required />
                      </label>
                      <label>
                        <div className="text-left text-2xl mt-4">
                          Project Type
                        </div>
                        <select name="project_type" required value="">
                          <option value="" disabled>
                            Select one...
                          </option>
                          <option value="Blog">Blog</option>
                          <option value="Community Site">Community Site</option>
                          <option value="Portfolio / Showcase">
                            Portfolio / Showcase
                          </option>
                          <option value="Ecommerce">Ecommerce</option>
                          <option value="SME Business Site">
                            SME Business Site
                          </option>
                          <option value="Exisiting project">
                            Exisiting project
                          </option>
                          <option value="Bespoke application">
                            Bespoke application
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </label>
                      <label>
                        <div className="text-left text-2xl mt-4">
                          Your Vision
                        </div>
                        <textarea
                          name="vision"
                          rows="4"
                          placeholder="e.g. What are you looking for? How can we help you?"
                          required
                        ></textarea>
                      </label>
                      <label>
                        <div className="text-left text-2xl mt-4">
                          Any other information
                        </div>
                        <textarea
                          name="misc-info"
                          rows="4"
                          placeholder="e.g. Link to a RFP or similar"
                        ></textarea>
                      </label>
                    </div>
                  )}
                  <input
                    type="text"
                    name="_gotcha"
                    style={{ display: "none" }}
                  />
                  <div className="flex justify-center mt-4">
                    <ReCAPTCHA sitekey="6LeYpycTAAAAAOfuU9ap_F6MwzoNVQPOmeOYmANV" />
                  </div>
                  <button
                    type="submit"
                    className="px-6 bg-cobalt-primary h-12 hover:bg-cobalt-mud mt-4 focus:outline-none"
                    style={{ borderRadius: "3rem" }}
                  >
                    Send
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Contact
