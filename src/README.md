# Online exam static website frontend:
This frontend website was bootstrapped with [Vue CLI](https://cli.vuejs.org/).

***
## Application workflow:
This application simulates an online survey website. 
There are two pages:
1. Test taking page to allow user input/select answers.
2. A lodgement page to check what's the answer user submitted.

There are 3 types of questions:

| Type          |                                |
| ------------- |:-------------------------------|
| singleSelect  | only one answer is allowed     |
| multiCheckbox | multiple choices are permitted |
| freeText      | free text answer               |

## I. Running frontend in your local
1. Available commands: 

    In the project root directory, you can run:
    
    ### `npm run serve`
    
    Runs the app in the development mode.<br>
    Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
    
    The page will reload if you make edits.<br>
    You will also see any lint errors in the console.
    
    ### `npm run test:unit`
    
    Launches the test runner in the interactive watch mode.<br>
    
    ### `npm run build`
    
    Builds the app for production to the `build` folder.<br>
    It correctly bundles application in production mode and optimizes the build for the best performance.
    
    The build is minified, and the filenames include the hashes.<br>
    Your app is ready to be deployed!
    
    See the section about [deployment](https://cli.vuejs.org/guide/deployment.html#general-guidelines) for more information.
***

## II. Deployment process
#### 1. CI/CD:
This application can be deployed to heroku, the config file is in root folder `static.json`.

More information:
[Deploy to heroku](https://cli.vuejs.org/guide/deployment.html#heroku)

***
## III. IDE Lint & Debug
#### 1. Lint: 
    Normally you don't need to run linting seperately.
    When running `npm run build` or `npm run serve`, it will automatically run linting. 
    So lint errors will appear stright away while you developping in local.
    
    If you really want to run linting in CLI for some reason (eg: in a CI build,
    without running `npm run build`?), you could use `npm run lint`. 
    
    Note:
    We do not use git commit Hook to auto-format codes.
#### 2. Debug: 
    https://vuejs.org/v2/cookbook/debugging-in-vscode.html

#### 3. Development tool: 
    https://github.com/vuejs/vue-devtools
    
***
## IV. JEST tips
#### 1. Testing Library:
https://vuejs.org/v2/guide/unit-testing.html

***
## NOTES
1. '.eslintrc.js' is modified to turn off interface prefix rule:
```
'@typescript-eslint/interface-name-prefix': 'off',
```

***
## Potential improvement:
1. Adding user input validations.
2. Use local Storage to support offline saving draft answer. 


***
## License:
[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
