# React-API-Project

This project demonstrates a simple front-end React application initialized with Vite that authenticates with a JWT, submits user data to an API, and fetches data to display in a sortable table.

In order for the application to work, a .env environment variables file needs to be present at the project root with the following variables:

VITE_APP_API_LOGIN_URL='https://your-api.com/login'
VITE_APP_API_DATA_URL='https://your-api.com/data'
VITE_APP_API_SUBMIT_URL='https://your-api.com/submit'
VITE_APP_API_USERNAME='username'
VITE_APP_API_PASSWORD='password'

(Replace the URLs with your actual API endpoints)

Getting started:

1. Installing dependencies:
npm install

2. Run the app:
npm run dev
