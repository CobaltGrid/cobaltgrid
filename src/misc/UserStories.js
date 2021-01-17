let stories = [
  {
    name: "buisness",
    purposes: [
      {
        name: "get started with ecommerce",
        text:
          "We can help you setup your digital store front. Using modern tools including SEO, we can ensure your shop is easily found by new and exisiting customers alike. Using ready-to-go solutions such as Shopify, you can be up and running taking new orders in days, not months.",
      },
      {
        name: "expand our online presense",
        text:
          "We can help you reach new customers. Whether you're a restaurant, timber merchant or local event, using modern approaches to web design, we can help design the perfect site to tell your story and promote your products or services across the internet. We can even help you with social media, too!",
      },
      {
        name: "allow our customers to talk to us",
        text:
          "We can help you engage your customers. Barber who wants to take appointments online? No problem! Need a portal to allow land users to report faults? We have the perfect solution! With experience in creating functional sites, we will work with you to craft a helpful application that easily integrates into your existing operation.",
      },
    ],
  },
  {
    name: "community",
    purposes: [
      {
        name: "take our community online",
        text:
          "We can help you create a space your members can call home online. Whether you are looking for a discussion platform, event platform or something else, we have experience producing custom solutions for a wide range of diverse communities.",
      },
      {
        name: "expand our online presense",
        text:
          "We can help you get your community out there. Whether you are looking to gain new members, show of your activies or just provide some information on what you get up to, we can provide tailor-made solutions to allow you to display you at your best.",
      },
    ],
  },
  {
    name: "individual",
    purposes: [
      {
        name: "show off my work",
        text:
          "We can help you create the perfect portfolio. We understand how important it is that your site should represent you and what you do, and we have experience in designing digital portfolio experiences for a wide range of industries and purposes.",
      },
    ],
  },
  {
    name: "innovator",
    purposes: [{
        name: "create a bespoke application",
        text:
          "We can help work on a custom application for you. Some of our previous, most successful projects have been bespoke functional apps. We have made these for a variety of sectors, including for medical and healthcare purposes. We understand the focus on functionality and ease of management in these applications, as well as compliance against any appropriate standards. We have experience completing projects to variety of standards, including CE mark and UK Class 1 medical device standards such as IEC 62304.",
      },],
  },
]

stories.forEach((user, index) => {
  user.purposes.push({
    name: "do something else",
    text:
      "We're interested! From content management systems to bespoke apps and APIs, we are confident we can offer something to help you with your digital quest.",
  })
})

export default stories
