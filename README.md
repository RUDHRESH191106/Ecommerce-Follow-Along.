Milestone #1 
# Ecommerce-Follow-Along.

Overview:
Key Features of the Project:

1. MERN Stack: The project will use MongoDB, Express, React, and Node.js for development.
 
2. REST API Creation: Learn to build scalable APIs guided by mentors.
   
3. Authentication: Implement secure login and registration.
  
4. Database Schema Design: Create structured data models using MongoDB.
  
5. Backend Development: Develop server-side logic using Node.js and Express.
  
6. Frontend Development: Build the user interface with React.

7. e-commerce application: Its functionality, UI, front-end and back-end integration.

Overview of MERN Stack:

Full Form:

M: MongoDB – A NoSQL database used for storing application data in a flexible, document-based format.
 
E: Express.js – A lightweight and fast web framework for Node.js that simplifies building robust APIs and server-side logic.
     
R: React – A JavaScript library for building dynamic, interactive, and component-based user interfaces.
     
N: Node.js – A runtime environment that allows JavaScript to run on the server, enabling full-stack development using a single language.
     
A full-stack JavaScript framework for developing web applications.
Streamlined development with a single language (JavaScript) across front-end and back-end.

REST API Structure and Endpoints:

Learn to design APIs for user authentication, product management, and order handling.
APIs will communicate with the database and serve JSON responses.

Basics of Database Schema Design:

Learn to define and structure data relationships in MongoDB.

Role of Authentication in Web Applications:

Secure user verification for accessing protected resources (e.g., purchases, sensitive information).

This repository contains the backend for the E-commerce Follow-Along project. The backend provides APIs to handle the core functionalities required for the e-commerce platform, including user management, product management, orders, and authentication.

Features

User Management: Registration, login, and user profile management.

Product Management: CRUD operations for products.

Order Management: Create, view, and manage orders.

Authentication: Secure user authentication using JWT.

Database Integration: Store data in a database (e.g., MongoDB or MySQL).

Error Handling: Comprehensive error handling for API responses.

File Uploads: Support for uploading and storing user files (e.g., images) using Multer.

Technologies Used

Programming Language: JavaScript (Node.js)

Framework: Express.js

Database: MongoDB (or MySQL, depending on your setup)

Authentication: JSON Web Tokens (JWT)

Other Libraries:

bcrypt (for password hashing)

dotenv (for environment variables)

mongoose (for MongoDB integration)

multer (for handling file uploads)

Getting Started

Prerequisites

Node.js installed on your system

MongoDB or MySQL database set up

Installation

Clone this repository:

git clone <repository-url>

Navigate to the project directory:

cd Ecommerce-Follow-Along/Backend

Install dependencies:

npm install

Create a .env file in the root directory and add the following environment variables:

PORT=8000
DATABASE_URL=<your-database-connection-string>
JWT_SECRET=<your-secret-key>

Created the User Model:

Designed a schema for user data using Mongoose.

Included fields such as name, email, password, and profilePicture.

Implemented the User Controller:

Added logic to handle user-related operations such as registration and profile management.

Integrated error handling for invalid or missing data.

Set Up Multer for File Uploads:

Configured Multer to handle file uploads (e.g., profile pictures).

Stored uploaded files in the uploads/ directory.

Updated the README:

Documented the progress made in this milestone, including the new features and APIs.

Contributing

Contributions are welcome! Please follow these steps:

Fork the repository.

Create a new branch:

git checkout -b feature-name

Make your changes and commit them:

git commit -m "Add some feature"

Push to the branch:

git push origin feature-name

Submit a pull request.

