# Task Manager Leap Finance

[Deployed on Netlify (front-end)](https://leapfinance.netlify.app/)
[Deployed on  Heroku (back-end)](https://leaptask-bc0d81608b33.herokuapp.com/)


#### Front-end

- [ReactJS](https://reactjs.org/) - Frontend framework
- [Redux w/ hooks](https://redux.js.org/) - State management library
- [Redux Toolkit](https://redux-toolkit.js.org/) - Toolset for efficient Redux development
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) - Middleware which allows action creators to return a function
- [React Router](https://reactrouter.com/) - Library for general routing & navigation
- [React Hook Form](https://react-hook-form.com/) - Library for flexible & extensible forms
- [Material-UI w/ lots of CSS customisations](https://material-ui.com/) - UI library
- [Yup](https://github.com/jquense/yup) - Form validation tool
- [date-fns](https://date-fns.org/) - Library for manipulating/formatting of timestamps



## How to Run
- npm install
- npm install react-scripts@latest --save
- npm start



#### Back-end


- [Spring Initializer, Maven/Gradle] - Runtime environment
- [Express.js] -  Design a model for tasks:
- [Java, Spring Data JPA] - Set up RESTful API endpoints for CRUD operations on tasks:
- [Hibernate Validator] -Implement a robust validation mechanism:
- [Spring Boot] -Implement error handling:
- [Spring Data JPA] -Implement pagination for task retrieval:
- [Spring Security] - Implement user authentication using Spring Security:
- [PostgreSQL] - Utilize a database to store task information:
- [SLF4J, Logback ] - Implement a comprehensive logging system:
## Create a new Spring Boot Project:

- Use your preferred IDE or Spring Initializer (https://start.spring.io/) to create a new Spring Boot project.
 - Add dependencies:
 - Spring Web, 
 - Spring Data JPA, 
 - Spring Security, and a database dependency  Spring Data MongoDB or Spring Data JPA with Hibernate for PostgreSQL).
- run any IDE


## Features

- Authentication (login/register w/ username & password)
- Add user authentication to allow personalised task management(user can see all the tasks assigned by him/her if filter applied).
- CRUD projects, with ability to add members for group work
- CRUD bugs, with title, description & priority
- Fetch tasks from the backend API and display them in a paginated list.
- Project members can add, edit, close & reopen bugs etc.
- Sort projects/bugs by various parameters like priority, recentely closed etc.
- Implement task sorting and filtering options (e.g., by due date, completion status)
- CRUD notes, for guiding other members
- Descriptive color indicators for bug priority & status
- Error management with descriptive messages
- Toast notifications for actions: creating projects, removing membes etc.
- Dark mode toggle w/ local storage save
- Proper responsive UI for all screens

### Thank You