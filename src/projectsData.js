// big project images
import sImg_1 from './projects-images/01-birthday-buddy.png';
import sImg_2 from './projects-images/02-rock-paper-scissor.png';
import sImg_3 from './projects-images/03-todo-list-app.png';
//import sImg_3 from './projects-images'

import { nanoid } from 'nanoid';
// small project images

export const smallProjectData = [
  {
  id: nanoid(),
  category: 'reactJs',
  img: sImg_1,

  techUsed: 'reactJs',

  desc: `Birthday Buddy is a ReactJS-based web application designed to help users keep track of birthdays. The application provides an intuitive and user-friendly interface for managing a list of friends' and family members' birthdays. By utilizing ReactJS functional components and hooks, such as useState, the project ensures a modern, efficient, and maintainable codebase.`,

  url: 'https://01-small-project-react-birthday-buddy.netlify.app/',

  github: 'https://github.com/Keerti-kumar-shakya/small-react-projects/tree/main/01%20-%20birthday-buddy',

  projectName: 'Birthday buddy'

  },

  {
    id: nanoid(),

    category: 'vanilla-Js',

    img: sImg_2,

    techUsed: 'HTML CSS JS',

    desc: 'I have made a Rock Paper Scissors Game web-based application using HTML, CSS, and JavaScript. This project focuses on implementing the classic game where players compete against the computer by selecting one of the three options: rock, paper, or scissors. The application showcases fundamental web development concepts, including closures and asynchronous functions in JavaScript. I have effectively utilized the local storage feature to enhance user experience and performance.',

    url: 'https://01-small-js-project.netlify.app/',

    github: 'https://github.com/Keerti-kumar-shakya/small-javascript-projects/tree/main/01-rock-paper-scissor',

    projectName: 'Rock Paper Scissors'
  
  },

  {
    id: nanoid(),
    category: 'vanilla-Js',
    img: sImg_3,
    techUsed: 'HTML CSS JS',
    desc: 'I am pleased to present a to-do list application that I have developed, utilizing HTML, CSS, and JavaScript. This application includes essential functionalities such as adding new tasks, deleting existing tasks, and a search feature to easily find specific tasks. The use of HTML and CSS ensures a clean and user-friendly interface, while JavaScript provides dynamic interactivity and responsiveness. This project demonstrates my proficiency in front-end web development and my ability to create practical and functional web application. I have effectively utilized the local storage feature to enhance user experience and performance.',

    url: 'https://01-small-javascript-todo-list-project.netlify.app/',
    github: 'https://github.com/Keerti-kumar-shakya/small-javascript-projects/tree/main/02-%20todo-list',
    projectName: 'todo list app'
  
  
    },
    {
      id: nanoid(),
      category: 'HTML&&CSS',
      img: sImg_2,
      techUsed: 'HTML and CSS dfdff',
      desc: 'Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti.',
      url: '',
      github: '',
      projectName: 'social media youTube clone'
    
    },

    {
      id: nanoid(),
      category: 'react-redux',
      img: sImg_2,
      techUsed: 'HTML and CSS dfdff',
      desc: 'Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Asperiores Aperiam Porro Impedit Tenetur Quo Hic Omnis Doloribus Dolores Enim Deleniti.',
      url: '',
      github: '',
      projectName: 'social media youTube clone'
    
    }

]


