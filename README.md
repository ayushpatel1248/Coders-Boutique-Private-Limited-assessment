# Full-Stack To-Do List Web App

This project is a full-stack web application built to demonstrate CRUD (Create, Read, Update, Delete) operations with a to-do list. The backend uses Node.js and Express in an MVC (Model-View-Controller) architecture, and the frontend is developed using React.js with ShadCN for UI design and MUI for icons. MongoDB is used as the database for storing the tasks. The app is deployed using Render for the backend and Vercel for the frontend.

## Table of Contents

- [Project Features](#project-features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [How to Run the Project](#how-to-run-the-project)
- [Project Structure](#project-structure)
- [Links](#links)
- [Screenshots](#screenshots)
- [Thank You](#thank-you)

## Project Features

- **CRUD Functionality**: Create, read, update, and delete items in a to-do list.
- **Full-Stack Setup**: Node.js for the backend API, React.js for the frontend, MongoDB as the database.
- **Responsive Design**: The app is responsive and works well across various screen sizes, including mobile and desktop.
- **Component-Based UI**: Leveraging React’s component structure for modularity and scalability.
- **Deployed App**: Deployed on Render (backend) and Vercel (frontend) for easy access.

## Technologies Used

### Backend
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database used for storing to-do items.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **MVC Architecture**: Follows the Model-View-Controller pattern for organizing backend code.

### Frontend
- **React.js**: A JavaScript library for building user interfaces.
- **ShadCN**: For UI components and styling.
- **MUI (Material UI)**: For icons and some additional UI elements.
- **Axios**: For making HTTP requests from the frontend to the backend API.

## Setup and Installation

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v14 or later)
- MongoDB (Make sure MongoDB is running locally or use MongoDB Atlas)
- Git

### Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/ayushpatel1248/Coders-Boutique-Private-Limited-assessment
cd todo-app/backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add the following:

```bash
MONGODB_URI=mongodb://localhost:27017/todo-app
PORT=9999
```

4. Start the server:

```bash
npm start
```

### Frontend Setup

1. Navigate to the frontend folder:

```bash
cd ../frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run the React app:

```bash
npm start
```

This will start the React app on `http://localhost:3000` and it will be connected to the backend running on port `9999`.

## How to Run the Project

1. **Backend**: Start the backend by running `npm start` in the backend folder.
2. **Frontend**: Start the frontend by running `npm start` in the frontend folder.
3. The app will be available at `http://localhost:3000` (frontend) and `http://localhost:9999` (backend).

### Available API Endpoints

- `POST /add`: Add a new to-do item.
- `POST /view`: Retrieve all to-do items.
- `POST /edit`: Edit an existing to-do item.
- `POST /delete`: Delete a to-do item.

## Project Structure

```plaintext
.
├── backend
│   ├── controllers
│   │   └── TodoController.js
│   ├── models
│   │   └── Todo.js
│   ├── routes
│   │   └── todo.js
│   └── server.js
├── frontend
│   ├── src
│   │   ├── components
│   │   │   └── Todo.js
│   │   └── App.js
└── README.md
```


## Screenshots
<img width="1440" alt="Screenshot 2024-10-22 at 9 56 13 PM" src="https://github.com/user-attachments/assets/d3e4d437-61ae-4b7d-9e43-8a82846e2466">


## Thank You

Thank you for reviewing my project. I hope you find it useful and well-structured. I look forward to your feedback and hope to hear back from you soon!

