import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DevStage from "../components/ui/dev-stage"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import ImageInitialContact from "../images/about/initial_contact.svg"
import ImageProposal from "../images/about/proposal.svg"
import ImageDiscovery from "../images/about/discovery.svg"
import ImageDevelopment from "../images/about/development.svg"
import ImageDeployment from "../images/about/deployment.svg"
import ImageSupport from "../images/about/support2.svg"

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

  const skills = [
    {
      bgcolor: "#3b7653",
      items: ["HTML", "CSS / SCSS", "Tailwind", "Bootstrap", "Bulma"],
    },
    {
      bgcolor: "#cdc348",
      items: ["Javascript", "Vue.js", "React"],
    },
    {
      bgcolor: "#8993be",
      items: ["PHP", "Laravel", "Wordpress"],
    },
    {
      bgcolor: "#F29111",
      items: ["MySQL", "PostgreSQL", "GraphQL"],
    },
    {
      bgcolor: "#4584b6",
      items: ["Python", "Django"],
    },
    {
      bgcolor: "#00a4e4",
      items: ["Adobe Creative Suite"],
    },
  ]

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
              I’ve been creating websites, programs, widgets and more
              since I could use a computer, and professionally since 2018. From online communities and groups, to
              portfolio and business sites, and even medical devices and
              applications, I have been involved in a wide range of projects for
              clients from multiple sectors.
            </p>
            <p>
              My experience mainly lies in web development, crafting elegant web
              pages and functional applications that are a perfect match to help
              my client's business, project or community thrive.
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
          className="bg-cobalt-bright text-white font-display p-6 sm:ml-10 text-xl mt-20 mb-4"
          style={{ borderRadius: "3rem" }}
        >
          <div className="flex">
            <div
              type="text"
              className="w-full bg-transparent text-white placeholder-gray-300 m-h-full animate-pulse focus:animate-none flex-grow hover:bg-teal-900 focus:bg-teal-900 focus:outline-none focus:shadow-outline focus:border-blue-300 pt-2 mr-4 transition px-4 overflow-y-auto overflow-x-hidden"
              style={{ borderRadius: "1rem" }}
              placeholder=""
              contentEditable="true"
              suppressContentEditableWarning={true}
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
      <div className="bg-cobalt-mud text-white pt-6">
        <div className="container flex flex-wrap">
          <div className="w-full md:w-1/2 py-4">
            <h2>Experience</h2>
            <p>
              I pride myself in the varied projects I have worked on, and as a
              result of this I have a large amount of experience in tailoring my
              web design work to the needs of a project.
            </p>
            My main experience lies in:
            <ul>
              <li className="tag bg-cobalt-primary">
                API & Backend Development
              </li>
              <li className="tag bg-cobalt-primary">
                Bespoke, functional web applications
              </li>
              <li className="tag bg-cobalt-primary">
                Content Management Systems and Forums
              </li>
              <li className="tag bg-cobalt-primary">
                Infrastructure management and setup
              </li>
              <li className="tag bg-cobalt-primary">Graphics and Design</li>
              <li className="tag bg-cobalt-primary">
                Scaleable systems and Processes
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 py-4">
            <h2>Technology</h2>I have worked with a wide variety of
            technologies, with my most common ones listed below.
            <ul className="mt-4">
              {skills.map(skillset => {
                return (
                  <div>
                    {skillset.items.map((skill, index) => {
                      return (
                        <li
                          key={index}
                          className="tag"
                          style={{ backgroundColor: skillset.bgcolor }}
                        >
                          {skill}
                        </li>
                      )
                    })}
                  </div>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="container pt-6">
        <h2 className="mt-4">What do you get?</h2>
        <p>
          We work hard to ensure that you get exactly the right solution for
          your specific purpose. By choosing Cobalt Grid, you are choosing a
          developer who cares about their work and the outcome from the project.
          Unlike many other agencies, we won't charge extreme fees for nit-picky
          things here and there; we will be as invested in your project as you
          are.
        </p>
        <p>Here is what you can expect from start to finish:</p>
        <div className="flex justify-center">
          <div
            className="grid grid-cols-1 auto-rows-fr gap-4"
            style={{ maxWidth: "1000px" }}
          >
            <DevStage name="Initial Contact" image={ImageInitialContact}>
              Once you get in contact with us, we'll schedule a chat to discuss
              your ideas and project in more detail, taking a look over anything
              you have done previously and the end goals for your project with
              us.
            </DevStage>
            <DevStage name="Proposal" image={ImageProposal}>
              After we are happy we understand what you are looking for, we will
              write you a detailed proposal detailing our plan to fulfil your
              goals. This will include the financial and legal bits of course,
              but most importantly it will outline what the final product will
              be able to do, and timeline for deliverables and demos. After you
              accept this, we can get started on crafting the perfect solution
              for you.
            </DevStage>
            <DevStage name="Discovery" image={ImageDiscovery}>
              After we've agreed to work together, we will hold detailed
              workshops with you to explore in-depth what you want to get out of
              the project. This is the time where we will plan the timeline for
              the project, and make sure we completely understand what you want
              to achieve.
            </DevStage>
            <DevStage name="Development" image={ImageDevelopment}>
              Through an iterative process of creating design concepts and
              discussing with you and gaining user feedback, you'll be able to
              see your project come to life. After we have completed our
              development process, together we'll have the chance to take a
              detailed look into how the solution works, and make any changes or
              modifications as required.
            </DevStage>
            <DevStage name="Deployment" image={ImageDeployment}>
              Depending on our original agreement, we'll assist you in
              transitioning from any previous service or platform into your
              sparkling new one, with support and guidance on infrastructure and
              other technical bits. We can even manage all of this for you too!
            </DevStage>
            <DevStage name="Support" image={ImageSupport}>
              We care about your post-completion experience, and will support
              you as far as possible. If we are providing deployment and
              maintenance as part of our services, then we will be with you
              every step of the way.
              <br></br>
              Alternatively, if you choose to take the project and continue
              without us, we would of course be there to help you with any
              questions and support you might need.
            </DevStage>
          </div>
        </div>
      </div>
      <div className="bg-cobalt-bright">
        <div className="container text-white py-8 space-y-10">
          <h1>Let's discuss your idea</h1>
          <Link
            className="btn text-white border-2 hover:bg-cobalt-primary text-2xl transition"
            to="/contact"
            state={{ topic: "proposal" }}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default About
