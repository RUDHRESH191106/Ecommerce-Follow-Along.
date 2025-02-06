# E-Commerce Application (MERN Stack)  

Welcome to the E-Commerce Application project! This project is part of the **Follow Along Project: Milestone 1**, where we will learn to build a full-fledged e-commerce application from scratch using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  

## Project Overview  
The goal of this project is to provide hands-on experience with real-world development concepts and tools. By the end of this project, you will have a functional e-commerce application with features like user authentication, product management, and order handling.  

## Learning Goals 
- Understand the overall structure of a MERN stack project.  
- Set up a new project repository and initialize it effectively.  
- Gain clarity on the functionalities of an e-commerce application.  
- Learn the foundational steps of backend development, database schema design, and REST API creation.  

## Key Features  
1. **MERN Stack:** A JavaScript-only approach for full-stack development.  
2. **REST API Creation:** Scalable endpoints for user authentication, product management, and order handling.  
3. **Authentication:** Secure login and registration functionalities.  
4. **Database Schema Design:** Structured data models using MongoDB.  
5. **Backend Development:** Robust server-side logic with Node.js and Express.  
6. **Frontend:** React for building a dynamic and user-friendly interface.  

## Milestone 1 Overview  
- **Introduction to the MERN Stack:** Understanding the technologies and how they work together.  
- **REST API Structure:** Building endpoints for essential features like user authentication, product management, and order handling.  
- **Database Schema Design:** Creating well-structured data models in MongoDB.  
- **Authentication:** Learning the role of authentication in web applications and implementing it.  
## Milestone 2:
Project Structure and Login Page


Created a structured folder hierarchy for separating frontend and backend code.

Set up the React application for the frontend and a Node.js server for the backend.

Configured Tailwind CSS for streamlined styling.

Developed a functional and styled Login Page for the frontend.

Outcome: Project was structured, and the first user-facing feature (Login Page) was implemented.

## Milestone 3:
Backend Setup and Database Connection


Created a dedicated folder structure for organizing backend code (routes, controllers, models, etc.).

Configured a Node.js server with Express.js to handle API requests.

Connected the backend to MongoDB for data storage.

Implemented basic error handling for better debugging.

Outcome: Backend setup was completed with MongoDB integration, making the application ready for further development.

## Milestone 4:
User Model, Controller, and File Uploads


Designed the User Model with a schema defining user details (e.g., name, email, password).

Developed the User Controller to manage user data operations like adding or fetching users.

Integrated Multer to enable file uploads (e.g., profile pictures) and store them in the backend.

## Milestone 5:
In this milestone, we focused on developing the signup page to enable users to create an account within the application. Key achievements include: Signup Page Implementation: Developed the Signup.jsx component with a user-friendly interface for account registration. Included form fields for user details such as name, email, and password. Form Validation: Added client-side validation logic to ensure proper input formatting and error messages for invalid entries. Integration with Routing: Configured navigation to and from the signup page using React Router for seamless user flow. Styling: Enhanced the design of the signup page to align with the application's overall styling for a consistent user experience. Code Organization: Refactored the code into reusable components where possible to promote cleaner and more maintainable code. This milestone enhances the user experience by allowing new users to register, paving the way for further integration with back-end user authentication systems.

## Milestone 6:
In this milestone, we completed the following:

- Implemented advanced product filtering and search functionality.
- Optimized backend API endpoints for better performance.
- Integrated payment processing using Stripe.
- Enhanced user authentication with JWT expiration handling.
- Improved UI/UX by refining product pages and checkout flows.
- Fixed bugs from previous milestones and improved error handling.

## Milestone 7:
Login Authentication System
1. User Enters Credentials:
   The user provides their email/username and password on the login page.

2. Fetch User Data from Database:
   The backend retrieves the user record based on the provided email/username.
   If the user is not found, return an error: "User does not exist."

3. Compare Encrypted Passwords:
    Process the user's input password using the same hashing algorithm (e.g., bcrypt).
    Compare the resulting hash to the stored hashed password.
    If they match, the user is authenticated; if not, send an error.

4. Create Login Endpoint:
   Accept user credentials (email/username and password).
   Retrieve the corresponding user from the database.

5. Validate Password:
   Use bcrypt to hash the entered password.
   Compare it with the stored hashed password for authentication.

6. Return Response:
   If authentication is successful, generate and return a session/token.
   If authentication fails, return an error message.



   

