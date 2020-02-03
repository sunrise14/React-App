This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Used given sample data with JSON Server (a Node Module that we can use to create demo rest json webservice).

To run this application:
Navigate to the application path
Step 1: npm install
Step 2: json-server --watch db.json --port 3004
Open another instance of command prompt, navigate to applicaton path and start the application by typing in the following command.
Step 3: npm start

More Details on the files :-

Layouts/layout.js : It's a higher order component. It defines layout of the application.

Components/Header/header.js :- Reusable header component.

Components/Home/home.js :- Defines layout for the home page. At present we just have data table in the home page. In future if we would like to add another sections, we can just call that compnent from here. Similarly if we want to delete a particular component from home page as this file doesnt have any code but just a layout, we can easily delete the component and get the desired output. To simulate this real world scenario I have not directly inserted code for home page here instead created a home-item.js file and called that component from this page.

Components/Home/home-item.js :-This component has the actual logic of sending get request, obtaning data and displaying it in the home page.

Components/Details/detail.js :-This component grabs params from the url and displays corresponding details of that url request.

Components/Profile/profile.js :- This component renders the view of the profile page.
