import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = props => {
  const [topic, setTopic] = useState((props.location.state && props.location.state.topic) ? props.location.state.topic : null)
  const [body, setBody] = useState((props.location.state && props.location.state.body) ?  props.location.state.body : null)

  return (
    <Layout>
      <SEO title="Contact Us" />
      <div className="container text-center mb-2">
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

        {topic === "general" && (
          <form
            action="https://formspree.io/f/xpzolanp"
            method="POST"
            className="contact-form bg-cobalt-bright p-6 text-white font-display mt-10 transition-all duration-500 ease-in-out"
          >
            <label>
              <div className="text-left text-2xl">Name</div>
              <input name="name" type="text" />
            </label>
            <label>
              <div className="text-left text-2xl mt-4">Email</div>
              <input name="_replyto" type="text" />
            </label>
            <label>
              <div className="text-left text-2xl mt-4">Message</div>
              <textarea
                name="message"
                value={body ?? ""}
                onChange={e => setBody(e.target.value)}
                rows="4"
              ></textarea>
            </label>
            <button
              type="submit"
              className="px-6 bg-cobalt-primary h-12 hover:bg-cobalt-mud outline-none mt-4"
              style={{ borderRadius: "3rem" }}
            >
              Send
            </button>
            <input type="text" name="_gotcha" style={{ display: "none" }} />
          </form>
        )}
        {topic === "proposal" && (
          <form
            action="https://formspree.io/f/xdopyrpl"
            method="POST"
            className="contact-form bg-cobalt-bright p-6 text-white font-display mt-10 transition-all duration-500 ease-in-out"
          >
            <label>
              <div className="text-left text-2xl">Name</div>
              <input name="name" type="text" />
            </label>
            <label>
              <div className="text-left text-2xl">Email</div>
              <input name="_replyto" type="text" />
            </label>
            <label>
              <div className="text-left text-2xl mt-4">Project Type</div>
              <select name="project_type">
                <option value="" disabled>
                  Select one...
                </option>
                <option value="Blog">Blog</option>
                <option value="Community Site">Community Site</option>
                <option value="Portfolio / Showcase">
                  Portfolio / Showcase
                </option>
                <option value="Ecommerce">Ecommerce</option>
                <option value="SME Business Site">SME Business Site</option>
                <option value="Exisiting project">Exisiting project</option>
                <option value="Bespoke application">Bespoke application</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label>
              <div className="text-left text-2xl mt-4">Your Vision</div>
              <textarea
                name="vision"
                rows="4"
                placeholder="e.g. What are you looking for? How can we help you?"
              ></textarea>
            </label>
            <label>
              <div className="text-left text-2xl mt-4">
                Any other information
              </div>
              <textarea
                name="misc-info"
                rows="4"
                placeholder="e.g. Link to a formal RFP or similar"
              ></textarea>
            </label>
            <button
              type="submit"
              className="px-6 bg-cobalt-primary h-12 hover:bg-cobalt-mud outline-none mt-4"
              style={{ borderRadius: "3rem" }}
            >
              Send
            </button>
            <input type="text" name="_gotcha" style={{ display: "none" }} />
          </form>
        )}
      </div>
    </Layout>
  )
}

export default Contact
