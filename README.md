# Profile Management System

This repository contains a Profile Management System built with React and Firebase. The app allows users to create, edit, and delete profiles, storing user information such as name, photo, and resume.

![Profile Management System](https://github.com/user-attachments/assets/8a3860f7-6a10-42c9-bc09-8506872b0961)

## Live Preview

Check out the live preview of the app [https://profile-management-system.vercel.app](https://profile-management-system.vercel.app/)

## Table of Contents
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Approach](#approach)
- [Known Issues and Limitations](#known-issues-and-limitations)

## Getting Started

To run this application locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/profile-management-system.git
    cd profile-management-system
    ```

2. **Install dependencies:**
    ```bash
    pnpm install
    ```

3. **Set up Firebase:**
    - Create a Firebase project and obtain your Firebase configuration.
    - Create a `.env` file in the root of the project and add your Firebase configuration:
    ```bash
    VITE_apiKey=your_api_key
    VITE_authDomain=your_auth_domain
    VITE_projectId=your_project_id
    VITE_storageBucket=your_storage_bucket
    VITE_messagingSenderId=your_messaging_sender_id
    VITE_appId=your_app_id
    ```

4. **Run the application:**
    ```bash
    pnpm start
    ```
    This will start the development server and you can view the app by navigating to `http://localhost:5173` in your web browser.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Firebase**: A platform for developing mobile and web applications, used for authentication and data storage.
- **Firebase Storage**: Used to store user photos and resumes.
- **Firebase Firestore**: Used to store user profile information.
- **CSS**: For styling the application and ensuring responsiveness.

## Approach

The development process of this app involved the following steps:

1. **UI Construction**: Designed and built the user interface, ensuring a clean and user-friendly experience.
2. **Firebase Integration**: Integrated Firebase for authentication and data storage.
3. **Profile Creation**: Implemented functionality to create user profiles, including uploading photos and resumes.
4. **Profile Listing and Editing**: Implemented functionality to list, edit, and delete user profiles.
5. **Responsiveness**: Ensured the application is responsive and works well on various screen sizes.

## Known Issues and Limitations

- **File Size Limitations**: Firebase Storage has limitations on file sizes that can be uploaded. Ensure the files are within the allowed size.
- **Error Handling**: There might be limited error handling for various edge cases, such as network issues or invalid file formats.
- **Security Rules**: Ensure proper Firebase security rules are in place to protect user data.

---

Feel free to reach out if you have any questions or suggestions!

Happy coding! 📝

---
