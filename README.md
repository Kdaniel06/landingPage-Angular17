# 🌐 Angular Landing Page 🌐 

This is a landing page project built using Angular 17 and Bootstrap. The application has several sections, including Home, Products, and Contact. When a product's "Detail" button is clicked, a card with detailed information about that product is displayed.

The application is deployed on Netlify.

## 📋 Features

### Sections
- **Home**: Introduction to the application with basic navigation options.
- **Products**: A list of products is displayed, each with a button to see more details. When the "Detail" button is clicked, a card with the product information appears.
- **Contact**: A contact form that allows users to enter their email address and message.

### Contact Form
- The contact form includes the following fields:
  - **Email**: Must be a valid email address.
  - **Message**: Must contain at least 5 characters.
- The submit button is disabled until all fields are correctly filled out, ensuring a smooth user experience with error validation.
- When the form is successfully filled, clicking the "Submit" button triggers a confirmation modal that simulates the submission of the message.

### Error Handling in Contact Form
The contact form is designed to guide users with helpful error messages:

* Email Field: Shows an error if the email is missing or if the email format is incorrect.
* Message Field: Shows an error if the message is not provided or contains fewer than 5 characters.
* The Submit button only becomes active when all fields are valid, ensuring proper form handling.
* Upon submission, a confirmation modal will pop up to indicate that the message has been "sent".

## 🛠️ Technologies Used
- **Angular 17**: 
  - The backbone of the front-end development, [**Angular 17**](https://v17.angular.io/docs) brings modern features and performance improvements to the application. This project utilizes **HTML** for content structure, **CSS** for styling, and **TypeScript** for robust scripting and component interaction, all integrated seamlessly through Angular's powerful framework.
  
- **Bootstrap**: 
  - Applied for styling, [Bootstrap](https://getbootstrap.com) ensures a clean, responsive, and visually consistent user experience. Its pre-designed components help deliver a polished look with minimal custom CSS while allowing for rapid prototyping and iteration.

- **FakeStore API**:
  - To provide realistic product data without building a back-end from scratch, the [**FakeStore API**](https://fakestoreapi.com) is used to fetch information dynamically. This allows for a more engaging and interactive experience when browsing products and checking out their details.


## 🚀 Deployment
- The project is deployed on [**Netlify**](https://www.netlify.com), making it easily accessible online.

## 💻 How to Run the Project Locally

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   ```
   
2. Navigate to the Project Directory:

```bash
cd angular-landing-page}
```

3. **Install Dependencies**: Ensure that you have Node.js and npm installed on your machine. Run the following command to install the required dependencies:

```bash
npm install
```

4. Run the Application: Use the following command to serve the application locally:

```bash
ng serve
```

or 

```bash
npm start
```

Navigate to http://localhost:4200 in your browser to see the landing page in action.

## 🔗 Live Demo
Check out the live version of this project on Netlify: https://landingpage-angular17-productssale.netlify.app/ 

## License
Feel free to use and modify it with a **fork and pull requests**.