# Find-A-Coach Vue App

## Overview

The **Find-A-Coach Vue App** is a platform built with Vue.js that allows users to find and connect with coaches. This project includes various components for managing coach data, requests, and authentication, providing a clean and modular structure.

## Technologies Used

- Vite
- Vue.js
- Vue Router
- Vuex
- Tailwind CSS
- Firebase
  - Firebase Realtime Database
  - Firebase Authentication

## Demo

[Explore Find-A-Coach Vue App](https://find-a-coach-vue-app.vercel.app/coaches)

## Features

- **Coach Management**: Coaches can register, update their details, and be listed in the app.
- **Request System**: Users can send coaching requests, and coaches can view received requests.
- **Authentication**: Users can sign up and log in to interact with the platform.
- **Responsive UI**: Components and layouts are designed to be responsive, ensuring usability across different devices.

## Project Structure

- `src/`: The source code for the application.

  - `assets/`: Directory for project assets (images, Fonts, etc.).
  - `components/`: Reusable components used throughout the application.
    - `coaches/`: Components related to coach functionalities.
      - `CoachFilter.vue`: Filter component for selecting coaches.
      - `CoachForm.vue`: Form component to register or edit a coach.
      - `CoachItem.vue`: Component representing an individual coach.
    - `layout/`: Layout components used across the application.
      - `Navbar.vue`: Navigation bar component.
    - `requests/`: Components related to handling requests.
      - `RequestItem.vue`: Component to show individual requests.
    - `ui/`: Base UI components used throughout the app for consistency.
      - `BaseBadge.vue`: Badge component for displaying status or tags.
      - `BaseButton.vue`: Reusable button component.
      - `BaseCard.vue`: Card component for displaying content in a card layout.
      - `BaseDialog.vue`: Dialog/modal component for interactive popups.
      - `BaseSpinner.vue`: Spinner component for loading states.
  - `pages/`: Contains the pages for different routes.
    - `auth/`: Pages related to authentication.
      - `UserAuth.vue`: User authentication page (login/signup).
    - `coaches/`: Pages related to coach functionalities.
      - `CoachDetail.vue`: Detailed view for a specific coach.
      - `CoachesList.vue`: List of all available coaches.
      - `CoachRegistration.vue`: Page for coach registration.
    - `requests/`: Pages related to user requests.
      - `ContactCoach.vue`: Page to contact a specific coach.
      - `RequestsReceived.vue`: Page showing requests received by a coach.
    - `NotFound.vue`: Page shown when a route is not found (404 error).
  - `router/`: Vue Router configuration.
    - `router.js`: Configures routes and lazy loading for components.
  - `store/`: Vuex store for state management.
    - `modules/`: Contains separate store modules for different functionalities.
      - `auth/`: Store module for authentication.
      - `coaches/`: Store module for managing coach data.
      - `requests/`: Store module for managing user requests.
  - `App.vue`: The main application component.
  - `main.js`: Entry point of the Vue application, where Vue is instantiated.
  - `style.css`: Global styles for the application.

## Firebase Integration

This project integrates with Firebase Realtime Database for data storage and Firebase Authentication for managing user authentication.

- **Firebase Authentication**: Handles user login, signup, and session management.
- **Firebase Realtime Database**: Stores coach details, requests, and user data.

### Firebase Setup

To set up Firebase for this project:

1. Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
2. Enable Firebase Authentication (Email/Password) and Realtime Database.
3. Copy the Firebase configuration and add it to your `.env` file as follows:

   ```bash
   VITE_FIREBASE_API_KEY=your_api_key
   ```

### Firebase Database Rules

The following rules are applied in the Firebase Realtime Database to manage read/write permissions:

```bash
{
  "rules": {
    "coaches":{
      ".read": true,
      ".write": "auth != null"
    },
    "requests":{
     ".read": "auth != null",
     ".write": true
    }
  }
}
```

## Installation and Setup

Follow these steps to get the project up and running locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/loaymady/find-a-coach-vue-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd find-a-coach-vue-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to http://localhost:5173 to view the application.
