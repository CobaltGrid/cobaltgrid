---
name: Cobalt Weather
slug: cobalt-weather
date: "2017-06-07"
tech: [Java, Android, REST API, Laravel]
excerpt: "A android application to fetch, display and track aviation weather"
feature_image: "./feature.png"
featured: false
slider:
  - "./image1.png"
  - "./image2.png"
  - "./image3.png"
  - "./image4.png"
  - "./image5.png"
  - "./image6.png"
---

Cobalt Weather is an aviation weather app released in 2017 on the Google Play store, allowing pilots, aviation enthusiasts and the general public to easily read and decode the sometimes complex aviation METARs.

A METAR is essentially the weather information as seen/experienced at a certain airport at a certain time, condensed using acronyms and shorthands to provide a space-efficient way to present weather information. All major airports and many regional airports employ METARs to get weather information to pilots quickly. However, METARs do take time to learn, and sometimes you just want to know what the weather is, without having to remember what "SCT" means.

Cobalt Weather allows access to up-to-date METARs for all airports supported by the NOAA Aviation Weather service worldwide. It decodes the METAR string into an easy-to-read human-friendly format and allows for changing of the units in the METAR to suit preferences.

The app interfaces with a bespoke RESTful API backend which does the retrieving and parsing of the data, allowing the application to focus on displaying the data.
