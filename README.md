# React Microfrontend Setup

This repository contains a React microfrontend setup with one host application and two microfrontend applications. This setup uses Webpack 5's Module Federation for dynamic integration of microfrontends.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Running the Applications](#running-the-applications)
- [Deployment](#deployment)
- [License](#license)


This project demonstrates how to configure a React microfrontend architecture with:
- **Host Application**: The main application that loads microfrontends.
- **Microfrontend 1**: A standalone microfrontend application.
- **Microfrontend 2**: Another independent microfrontend application.

## Overview
Architecture
This project demonstrates a microfrontend architecture using React, where a single host application integrates multiple microfrontend applications. The architecture leverages Webpack 5's Module Federation to enable dynamic loading and integration of microfrontends.

Host Application: Acts as the main container that dynamically loads and renders microfrontend applications. It manages the overall layout and navigation.
Microfrontend 1: A standalone React application that provides a specific feature or component. It is exposed to the host application and can be independently developed and deployed.
Microfrontend 2: Another independent React application that offers additional functionality or components. It is also integrated into the host application and operates independently of Microfrontend 1.
Purpose
The purpose of this setup is to illustrate how to modularize a large frontend application into smaller, self-contained microfrontends. This approach offers several benefits:

Scalability: Allows teams to work on different parts of the application simultaneously without interfering with each other’s work.
Flexibility: Enables independent deployment of microfrontends, facilitating easier updates and rollbacks.
Reusability: Promotes reuse of components and features across different projects or parts of the application.
Isolation: Ensures that issues or changes in one microfrontend do not impact the entire application, improving overall stability and maintainability.

## Prerequisites
Node.js and npm Versions
Node.js: Version 14.x or higher
npm: Version 6.x or higher
These versions ensure compatibility with the dependencies and tools used in this project.

Additional Tools and Software
Webpack: Version 5.x
Required for module bundling and integration of microfrontends using Webpack’s Module Federation.
React: Version 18.x (or compatible)
Core library used for building user interfaces.
React DOM: Version 18.x (or compatible)
Required for rendering React components in the browser.
Webpack Dev Server: Version 4.x
Provides a development server with live reloading capabilities.
Module Federation Plugin: Required for integrating microfrontends.
This is typically included with Webpack 5 and does not need separate installation.
If you are using Yarn instead of npm, ensure you have:

Yarn: Version 1.x or 2.x
Ensure you have the following installed:
- Node.js
- npm (Node Package Manager)
- Webpack 5

## Setup Instructions
Environment Configuration
Environment Variables

Create a .env file in the root directory of each application (host-app, micro-app1, micro-app2) if you have any environment-specific variables.
Example .env file:
dotenv
Copy code
REACT_APP_API_URL=http://localhost:5000
Configuration Files

Ensure that your webpack.config.js files are correctly set up for each application. The configuration should include Module Federation settings to properly integrate microfrontends.
Additional Setup Steps
Clone the Repository

bash
Copy code
git clone https://github.com/ninganagoud-vk/React-Micro-Frontend-.git
cd React-Micro-Frontend-
Install Dependencies

For each application (host and microfrontends):

bash
Copy code
cd <application-folder>
npm install
Update Configuration

Host Application: Ensure that the webpack.config.js file in the host app includes the correct URLs for the remote microfrontends.
Microfrontends: Verify that each microfrontend’s webpack.config.js file exposes the correct modules and is configured to run on different ports.
Run Build Scripts (if applicable)

If you have specific build scripts or pre-start commands, include them. For example:

bash
```html
<button onclick="copyToClipboard('#code-block')">Copy code</button>
<pre id="code-block">
<code>
function helloWorld() {
  console.log("Hello, world!");
}
</code>
</pre>```

npm run build
Running the Applications
Start the Host Application

bash
Copy code
cd host-app
npm start
Start Microfrontend 1

bash
Copy code
cd micro-app1
npm start
Start Microfrontend 2

bash
Copy code
cd micro-app2
npm start
Additional Commands
Linting: If you have linting configured, run:

bash
Copy code
npm run lint
Testing: If you have tests set up, run:

bash
Copy code
npm test

1. **Clone the Repository**

   ```bash
   git clone <your-repo-url>
   cd <repository-name>
