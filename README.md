# React-App
This is the simple react app I have created as a part of the selection process for an internship as a front-end developer.


I've tried to apply HTML(JSX in case of react) & CSS to create as accurate UI screens as possible and added some basic functionality I could with my knowledge of VanillaJS and beginner ReactJS.

Add the my-app folder in a device intended to use the application.

After navigating to the app folder through the terminal, run 'npm install' to install the required dependencies.
Once the installation completes, run 'npm start' to run the application server.
Access the application using a web browser through 'localhost:3000'.

# This is the starting screen.

![MAIN UI SCREEN](https://github.com/kaushik7kk/React-App/blob/main/Screenshot%20(16).png?raw=true)

The screen has been created using multiple reusable components (Navbar, Table, etc.) and unique styles to achive accurate results.

# This is the view screen.

![VIEW SCREEN](https://github.com/kaushik7kk/React-App/blob/main/Screenshot%20(17).png?raw=true)

The styles used are dynamic based on different aspects and icons used are from 'Font Awesome'.
The access level of an item can be changed through this screen using the checkbox or the plus icon.

# This is the next screen.

![ACCESS EDIT SCREEN](https://github.com/kaushik7kk/React-App/blob/main/Screenshot%20(18).png?raw=true)

This screen appears on using the plus icon on all the items and the checkbox on the items having access level set to 'No Access'.

![INPUTTING DATA](https://github.com/kaushik7kk/React-App/blob/main/Screenshot%20(20).png?raw=true)

![AFTER_EDIT_SCREEN](https://github.com/kaushik7kk/React-App/blob/main/Screenshot%20(21).png?raw=true)

This is the screen that appears on clicking the minus icon and changes the access level of the corresponding item and applies the particular styles.

However, the checkbox isn't updated dynamically because on changing the access state and re-rendering the screen, the data passed is static which makes the checked status of the checkbox based on the default passed data.

I haven't yet learned React Router which makes the project a bit longer than it would ideally be but I've tried my best to perform all possible functionalities using only re-rendering.

# THANK YOU!!
