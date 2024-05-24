# Title

# █▓▒▒░░░SocioBlog░░░▒▒▓█

## Objective

    The Objective of this Project is to want to offer informative, helpful, educational content to people who want to 
    read what you have to say. The ultimate goal, of Project, is to become more and more successful through your blog 
    and how effectively it touches other people.

## Demo
  
https://github.com/j-swaroop/full-stack-blog/assets/133971855/c6d8d20e-af93-44e1-91c6-9040a8d3f2cd

## Tech Stack

    BACKEND: 𝙽𝚘𝚍𝚎.𝚓𝚜, 𝙴𝚡𝚙𝚛𝚎𝚜𝚜.𝚓𝚜, 𝙼𝚢𝚂𝚀𝙻, 𝙼𝚢𝚂𝚀𝙻 𝚆𝚘𝚛𝚔𝚋𝚎𝚗𝚌𝚑, 𝚂𝚎𝚚𝚞𝚎𝚕𝚒𝚣𝚎, 𝙱𝚌𝚛𝚢𝚙𝚝,𝙹𝚜𝚘𝚗𝚆𝚎𝚋𝚃𝚘𝚔𝚎𝚗

    FRONTEND: 𝙷𝚃𝙼𝙻, 𝙲𝚂𝚂, 𝙹𝚊𝚟𝚊𝚂𝚌𝚛𝚒𝚙𝚝, 𝚁𝚎𝚊𝚌𝚝.𝚓𝚜, 𝚁𝚎𝚊𝚌𝚝 𝙿𝚘𝚙𝚄𝚙, 𝙹𝚠𝚝𝚃𝚘𝚔𝚎𝚗, 𝚁𝚎𝚊𝚌𝚝 𝙲𝚘𝚗𝚝𝚎𝚡𝚝

## Completion Instructions 

    A full-stack blog application allows users post their content based on the particular topic.

    This application allows users Login, Register User, Create Post (each-post includes a Image (optional), Title, 
    and Text Content), Like or Unlike a Post, Comment on a post, Delete Commment, Delete post, and View detailed 
    information about User Profile.

    Developed this project within 10-15 days using Node, Express, MySQL and React.js. Implemented database models 
    using sequelize and established relationships between the tables. Performed a REST API's and hashed passwords 
    using Bcrypt and stored the hashed password. Created a JWT Token and sends it to client's brower for authrization 
    using jsonwebtoken. 

    Coming to frontend used react.js which is popular javascript library for building dynamic and interactive frontend
    web applications. Used react-router-dom for application navigation and implemented protected routes for controlling
    access to the routes. Used react hooks like useState(), useEffect() for managing state and side effects. Handled 
    forms using Formik and Yup, Implemented a basic authentication flow and handled common errors such invalid username
    and invalid password. And used Cookies to persist the user crendentials across the page reloads.

    Used Conditional rendering to display different compenents based on the api status. Used useEffect() to fetch the 
    from the api's Used axios to retrive the data. During the api request displayed a loading spinnerfrom the third party 
    package react-loader-spinner. if the api request is successful a list of blogs will be displayed. each blog contains 
    username, a optional image, title, text, Like button, comment button. Users will able to like or dislike a post, add 
    comment, delete comment and view detailed information about that user. when user click on the username on the blog 
    the brower will navigate to url associate with the user, where displayed a detailed information about that profile 
    and displayed list of blogs created by user.

    for responsiveness used flexbox and media queries for layouting.

    followed cleancode guidelines by maintained a consistent folder structure and used meaningful naming conventions 
    such prefixing event handlers with on and creating reuseable components throughout application.


### Functionality 
    Backend Structure: 

        -- Implemented Backend for the application using Node.js, Express.js framework, MySQL Database, Sequelize. 

        -- Implemented Backend Structure Using REST API'S for GET, POST, PUT and DELETE. 

        -- Implemented Models Include Users, Post, Likes, and Comments Using SEQUELIZE and establish releationship 
           between the tables. 

        -- Implemented routing for Login ('/auth/login'), Registration ('/auth/') , Posts ('/posts'), 
           Create Post ('/create-post'), Post By Id ('/byId/:id',), Delete Post ('/:postId'), 
           Comment on a Post ('/comment'), Like a Post ('/like'), Profile ('/profile') etc..

        -- Implemented Middleware for authrization.

    Frontend Structure: 

        -- Implemented Frontend Structure using React.js and maintained a Clean code guidelines by maintain Consistent
           folder structure and meaningful naming conventions.
        
        -- Implemented Protected Route for control accessing the routes by Storing the JwtToken using Client Side 
           Storage mechanism Cookies.

        -- Implemented a React Context for creating a Global State for managing the data between the routes.

        -- Implemented a Conditional rendering to different components based on the API Status.

        -- Managed the Components data by Using React hooks Like useState(), useEffect().

        -- Implemented Routing for the application using react-router-dom.

        -- Used Third Party Packages like: React PopUp, React Icons, js-cookie, react-router-dom.


### Guidelines to develop a project

    followed cleancode guidelines by maintained a consistent folder structure and used meaningful naming conventions 
    such prefixing event handlers with on and creating reuseable components throughout application.


### Design files

![FireShot Capture 055 - React App - blog-app-sand-eight vercel app](https://github.com/j-swaroop/full-stack-blog/assets/133971855/bfa45881-1164-4a05-8618-a071dfc479e0)

![FireShot Capture 056 - React App - blog-app-sand-eight vercel app](https://github.com/j-swaroop/full-stack-blog/assets/133971855/bfb08035-fa3f-47b8-9186-bfbd71505009)

![FireShot Capture 057 - React App - blog-app-sand-eight vercel app](https://github.com/j-swaroop/full-stack-blog/assets/133971855/e77d739b-d442-4013-92da-5d18e7561f43)

![FireShot Capture 058 - React App - blog-app-sand-eight vercel app](https://github.com/j-swaroop/full-stack-blog/assets/133971855/6a3fa9a6-d9b4-411a-bcab-600452cec6bf)

![FireShot Capture 060 - React App - blog-app-sand-eight vercel app](https://github.com/j-swaroop/full-stack-blog/assets/133971855/56f64799-68fa-4197-b514-28228a2c840d)


### Third-party packages

    Sequelize, Bcrypt, jsonwebtoken, mysql2, react-loader-spinner, react-router-dom, Cookies, Formik and Yup etc..

