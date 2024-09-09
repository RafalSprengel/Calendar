# Calendar Date Picker Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project Overview

This is a simple **Calendar Date Picker** application that allows users to select check-in and check-out dates. The app is built using **React** and **Material UI's x-date-pickers** and includes localization for the Polish language using `date-fns`. The app ensures that no past dates can be selected.

## Features

- **Check-In and Check-Out Date Pickers**: Users can select dates for checking in and out.
- **Disable Past Dates**: The app prevents users from selecting past dates.
- **Localization**: The app uses Polish (pl) locale for date formatting with `date-fns/locale/pl`.
- **Dynamic Date Display**: Selected dates are dynamically displayed in `dd/MM/yyyy` format.

## Project Structure

The project structure is as follows:

```plaintext
public/
├── index.html
src/
├── App.js
├── index.js
├── Components/
│   └── Calendar.js
├── Styles/
│   ├── index.css
│   ├── App.css
│   └── Calendar.css
└── package.json
## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. **Navigate to the project folder**:

    ```bash
    cd your-repository
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Start the development server**:

    ```bash
    npm start
    ```

The app will be available on [http://localhost:3000](http://localhost:3000).

## Dependencies

- **React**: Frontend JavaScript library for building user interfaces.
- **Material UI (MUI)**: Provides date picker components.
- **date-fns**: Used for handling dates and formatting with the Polish locale.

You can install these dependencies using npm:

```bash
npm install @mui/x-date-pickers @mui/material @emotion/react @emotion/styled date-fns

##License
This project is licensed under the MIT License.
