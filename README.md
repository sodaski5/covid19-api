# COVID-19 API

A simple Node.js API that provides COVID-19 information from the Robert Koch-Institut. The API supports endpoints for retrieving information about COVID-19 cases in Germany and its states.

## Functional Requirements

- Retrieve information for the entire Germany.
- Retrieve information for specific states.
- Get cases, latest cases, deaths, and latest deaths data.
- Support RESTful GET/POST/HEAD requests with JSON responses.
- Handle multiple parallel requests, up to 5 per second.
- Only use open-source libraries and technologies.
- Implement the API using Node.js.

## Table of Contents

- [Project Structure](#project-structure)
- [Endpoints](#endpoints)
- [Usage](#usage)
- [Testing](#testing)
- [UI](#ui)
- [Contributing](#contributing)

## Project Structure

The project follows a structured directory layout:

covid19-api/
├── node_modules/ # Node.js modules and dependencies
├── src/ # Source code
│ ├── server.js # Express.js server setup
│ ├── routes/ # API route handlers
│ │ ├── germany.js  
│ │ ├── states.js  
│ │ ├── cases.js  
│ │ ├── deaths.js  
│ │ ├── healthCheck.js # Health check route
│ ├── controllers/ # Route logic
│ │ ├── deathsController.js
│ │ ├── germanyController.js
│ │ ├── statesController.js
│ │ ├── casesController.js
│ │ ├── healthCheckController.js
├── public/ # Static assets
│ ├── index.html  
│ ├── styles.css  
├── test/ # Unit tests
│ ├── api.test.js  
├── index.js # Entry point for the application
├── package.json  
├── package-lock.json  
├── README.md # Project documentation
├── .env # Environment configuration file

## Endpoints

The API provides the following endpoints:

- `/germany`: Retrieve COVID-19 data for the entire Germany.
- `/states`: Retrieve COVID-19 data for specific states.
- `/cases/history`: Retrieve historical cases data.
- `/cases/history/:days`: Retrieve cases data for a specific number of days.
- `/deaths/history`: Retrieve historical cases data.
- `/deaths/history/:days`: Retrieve cases data for a specific number of days.
- `/health`: Health check endpoint to ensure the API is running.

## Usage

1. Install the project dependencies:

   npm install

2. Start the server:

   npm start

## Testing

npm test

## UI

How to interact with the API using the HTML Interface.

Retrieve Germany Data:
Click the "Get Germany Data" button.
It will fetch and display Germany's COVID-19 data.

Retrieve Specific State Data:
Enter the abbreviation of a specific state (e.g., "HH" for Hamburg) in the text input field.
Click the "Get Specific State Data" button.
It will fetch and display the COVID-19 data for the state specified by the abbreviation.

Retrieve Cases Data for Germany:
Enter the number of days for which you want to fetch cases Data in the "Latest Cases Info By Days" input field.
Click the "Get Cases Data" button.
It will fetch and display the latests cases data for the specified number of days.

Note: to fetch all Cases leave the input field blank and simply click the "Get Cases Data" button.

Retrieve Death Data for Germany:
Enter the number of days for which you want to fetch death data in the "Latest Death Info by Days" input field.
Click the "Get Death Data" button.
It will fetch and display the latest death data for the specified number of days.

Note: to fetch all deaths leave the input field blank and simply click the "Get Cases Data" button.

Perform Health Check:
Click the "Health Check" button.
It will display an alert with the current health check status.

Each data retrieval operation sends a request to the corresponding API endpoint, and the response is displayed in the respective data container on the web page. If there's an error during the data retrieval process, an error message will be displayed in the relevant data container.
