# React Blog App

Welcome to the React Blog App repository! This project combines the power of React, Node.js, and various technologies to create a dynamic and feature-rich blog application. Here's a guide to setting up and running the app:

## Frontend Setup

To get started with the frontend, follow these steps:

- Install `react-router-dom` for client-side routing:

  ```bash
  npm install react-router-dom
  ```

- Open the `package.json` file and add `"proxy": "http://localhost:8000/"` to enable communication between the frontend and backend.

## Backend Setup

For the backend, we use Node.js with Express for server development. Additionally, Firebase and Google Cloud Platform (GCP) are integrated for authentication and deployment:

- Firebase: For authentication and user management.
- GCP: For deploying the application to the cloud.

### GCP Integration

To integrate with Google Cloud Platform, follow these steps:

- Log in to your GCP account using the following command:

  ```bash
  gcloud auth login
  ```

- Set the GCP project for deployment:

  ```bash
  gcloud config set project react-alpha-blog
  ```

- Deploy your app to GCP:

  ```bash
  gcloud app deploy
  ```

## Summary

This project covers a wide range of technologies and concepts, including:

- Creating engaging frontend applications using React.
- Setting up a robust backend server with Node.js and Express.
- Efficient database management using MongoDB.
- Implementing user authentication with Firebase.
- Establishing seamless communication between frontend and backend using Axios.
- Deploying and hosting the application on Google Cloud Platform.

## Getting Started

To start the development servers:

- For the frontend, use:

  ```bash
  npm start
  ```

- For the backend, use:

  ```bash
  npm run dev
  ```

TODO: update UI, reconfigure backend

Set up React Blog App with frontend and backend integration

This commit adds the initial setup for the React Blog App, combining frontend and backend technologies. It includes:

- Installation of 'react-router-dom' for client-side routing
- Configuration of proxy for communication between frontend and backend
- Integration of Firebase and GCP for authentication and deployment

This marks the starting point for developing a feature-rich blog application using React, Node.js, MongoDB, Firebase, and GCP.