# Handmade Candles Webpage

## Overview
This project is a React application for showcasing handmade candles. It provides an interactive and visually appealing interface for users to explore various candle products.

## Project Structure
```
handmade-candles-webpage
├── public
│   ├── index.html          # Main HTML file
│   └── manifest.json       # PWA metadata
├── src
│   ├── components
│   │   └── App.js          # Main application component
│   ├── styles
│   │   └── App.css         # Styles for the application
│   ├── index.js            # Entry point of the application
│   └── serviceWorker.js     # Service worker for offline capabilities
├── package.json            # Project configuration and dependencies
├── .gitignore              # Files to ignore in Git
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd handmade-candles-webpage
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm start
```
This will open the application in your default web browser at `http://localhost:3000`.

### Building for Production
To create a production build of the application, run:
```
npm run build
```
This will generate a `build` directory with optimized files for deployment.

### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

## TODO
- add pictures
- add description hover over
- add AI chat
- add user account page
- 508 compliance
- add backend to store user info
- connect AI chat to DB to get availability data
