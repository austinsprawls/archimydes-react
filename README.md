This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Steps to run project

1. Make sure Archimydes mock API is running on your http://localhost:3000

2. To download all dependencies, run this in the project directory:

### `npm install`

3. To run the client:

### `yarn start`

4. Visit http://localhost:3100 on your browser to sign in

## Assumptions made during development

1. I could not find an API route for accepting/rejecting user stories for Admin roles, so I prototyped the behavior using Redux state. Accepted/Rejected user stories will not persist past individual sessions

2. I assume the method for determining if a user is authenticated on the server is by attempting to send an authorized GET request using the authentication token, and checking for a 401 UNAUTHORIZED response status

3. I assume there is no need for advanced form validation or server error handling based on the requirements

4. For Admin Story Review, I imagined two ways of proceeding. 1) Use the same template as User Story Creation with disabled inputs, or 2) Use a different template that only shows the final text. I went with the second assumption because I believe it is more straightforward for the end user

5. I assume an Admin can review an individual user story multiple times (i.e. Accept -> Reject -> Accept the same user story)

6. I assume for this iteration the auth token does not yet need to be stored in a secure HTTP-Only Cookie. For the sake of speed, I simply used browser local storage for now.

##  FULL create-react-app README DOCUMENTATION FOLLOWS BELOW 

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
