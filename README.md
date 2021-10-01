# Lactation Navigation App

This project is made for [Breastfeeding USA](https://breastfeedingusa.org/), a 501(c)(3), whose mission is to provide evidence-based breastfeeding information and support, and to promote breastfeeding as the biological and cultural norm. They accomplish this through a network of accredited breastfeeding counselors and comprehensive resources for the benefit of lactating parents and babies, families, and communities. This application will connect these audiences to each other and to the available resources. 

## To Use It
1. Clone the repo and navigate into the directory
2. npm install to install the packages
3. Create .env file with:
    DB_HOST=localhost
    DB_DBNAME=lactation-navigation
    DB_USER=postgres
    DB_PASS=**insert your postgres password here**
    JWT_SECRET=i_am_secret
4. Add your .env file to your .gitignore
5. npm nodemon to start the dev server
6. In another terminal, navigate into the client directory
7. npm install in the client directory
8. npm start on localhost:3001

## Coming in Version 2.0
- Some files are already included and staged for version 2.0
- Administration Screen
- Membership
- Counselors will be created by Administrators rather than users giving themselves Counselor status



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
