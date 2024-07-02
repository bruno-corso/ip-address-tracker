# IP Address Tracker Solution 🌐 🤖

As part of a challenge from Frontend Mentor, this project aims to track IP addresses around the world and show them on a map. Take a look and discover your IP address. 🚀

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size 🖥️ 📱
- See hover states for all interactive elements on the page :electron:
- See their own IP address on the map on the initial page load 🗺️
- Search for any IP addresses or domains and see the key information and location 🔎

### Screenshot

<img width="704" alt="image" src="https://github.com/bruno-corso/ip-address-tracker/assets/110792462/720f28b0-5ced-45c8-8261-376860445ba3">

### Links

- [Challenge URL](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0)
- [Live Site URL](https://ip-address-tracker-five-zeta.vercel.app/)

## My Process

### Built With

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [IPify (API IPs)](https://www.ipify.org/)
- [Leaflet (Map)](https://leafletjs.com/)


### What I Learned

During this project, I learned how to integrate various technologies to build a functional and visually appealing IP address tracker. Some key learnings include:

- Implementing responsive design using Tailwind CSS
- Using TypeScript for type safety and improved developer experience in a React project
- Fetching and displaying data from an API to show IP address information on a map

Here's an example of some code I'm proud of:

tsx
// Example TypeScript code
const fetchIpDetails = async (ip: string) => {
  const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_KEY&ip=${ip}`);
  const data = await response.json();
  console.log(data);
};


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
