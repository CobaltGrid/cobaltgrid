import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DevStage from "../components/ui/dev-stage"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "prof_headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [message, setMessage] = useState("")

  return (
    <Layout>
      <SEO title="About" />
      <div className="container">
        <div className="relative pt-10">
          <div className="w-24 absolute left-0 top-0">
            <Image
              className="rounded-full"
              fluid={data.headshot.childImageSharp.fluid}
            />
          </div>
          <div
            className="bg-cobalt-primary text-white ml-12 text-display p-6 pl-12 text-xl font-display"
            style={{ borderRadius: "3rem" }}
          >
            <p>
              Hi! I’m Alex, and I run Cobalt Grid, my freelance web development
              business.
            </p>
            <p>
              I have been creating websites, programs, widgets and more for over
              8 years now. From online communities and groups, to portfolio and
              business sites, and even medical devices and applications, I have
              been involved in a wide range of projects for clients from multiple sectors.
            </p>
            <p>
              My experience mainly lies in web development, crafting elegant web
              pages and functional applications that are a perfect match to help my client's business, project or community thrive.
            </p>
            <p className="pb-0">
              Check out our{" "}
              <Link className="text-cobalt-bright" to="/recent-projects">
                recent projects{" "}
              </Link>
              section to see some examples of what we have recently worked on,
              and if you have any questions don’t hesitate to{" "}
              <Link className="text-cobalt-bright" to="/contact">
                contact me
              </Link>
              !
            </p>
          </div>
        </div>
        <div
          className="bg-cobalt-bright text-white font-display p-6 pl-12 ml-10 text-xl mt-20 mb-4"
          style={{ borderRadius: "3rem" }}
        >
          <div className="flex">
            <div
              type="text"
              className="w-full bg-transparent text-white placeholder-gray-300 m-h-full animate-pulse focus:animate-none flex-grow hover:bg-teal-900 focus:bg-teal-900 focus:outline-none focus:shadow-outline focus:border-blue-300 pt-2 mr-4 px-4 overflow-y-auto overflow-x-hidden"
              style={{ borderRadius: "1rem" }}
              placeholder=""
              contentEditable="true"
              onInput={event => setMessage(event.target.innerText)}
            >
              Hi Alex, ...
            </div>
            <Link
              to="/contact"
              state={{ topic: "general", body: message }}
              className="px-4 bg-cobalt-primary h-12 hover:bg-cobalt-mud outline-none animate-pulse"
              style={{ borderRadius: "3rem", lineHeight: "3rem" }}
            >
              Send
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-cobalt-mud">
        <div className="container pt-6 text-white">
          <div className="px-10">
            <h2>What can we do for you?</h2>
            <p>
              We offer lots of services, designed to make create the perfect
              impression for you or your business on the web.
            </p>
            Our experience lies in:
            <ul class="list-disc ml-6">
              <li>API & Backend Development</li>
              <li>Bespoke web applications</li>
              <li>Content Management Systems and Forums</li>
              <li>Infrastructure management and setup</li>
              <li>Graphics and design</li>
              <li>Scaleable systems and processes</li>
            </ul>
            <h2 className="mt-4">What do you get?</h2>
            <p>
              We work hard to ensure that you get exactly the right solution for
              your specific purpose. By choosing Cobalt Grid, you are choosing a
              developer who cares about their work and the outcome from the
              project. Unlike many other agencies, we won't charge extreme fees
              for nit-picky things here and there; we will be as invested in
              your project as you are.
            </p>
            <p>Here is what you can expect from start to finish:</p>
            <div className="space-y-4">
              <DevStage name="Initial Contact" number="1">
                Once you get in contact with us, we'll schedule a chat to
                discuss your ideas and project in more detail, taking a look
                over anything you have done previously and the end goals for
                your project with us.
              </DevStage>
              <DevStage name="Proposal" number="2">
                After we are happy we understand what you are looking for, we
                will write you a detailed propsal detailing our plan to fulfil
                your goals. This will include the financal and legal bits of
                course, but most importantly it will outline what the final
                product will be able to do, and timeline for deliverables and
                demos. After you accept this, we can get started on crafting the
                perfect solution for you.
              </DevStage>
              <DevStage name="In-Development" number="3">
                During the development process, we will hold frequent meetings
                and demos with you, to demonstrate the current progress and
                functionality, allowing you to see the progress made and keep in
                the loop the whole time.
              </DevStage>
              <DevStage name="Development Complete" number="4">
                After we have completed our development process, together we'll
                have the chance to take a detailed look into how the solution
                works, and make any chances or modifications as required.
              </DevStage>
              <DevStage name="Support" number="5">
                We care about your post-completion experience, and will support
                you as far as possible. If we are providing deployment and
                maintainance as part of our services, then we will be with you
                every step of the way.
                <br></br>
                Alternatively, if you choose to take the project and continue
                without us, we would of course be there to help you with any
                questions and support you might need.
              </DevStage>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
