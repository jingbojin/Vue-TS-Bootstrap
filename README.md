# Online-Exam (A Vue + TypeScript + Bootstrap + Axios Project example)
[![Build Status](https://travis-ci.com/jingbojin/exam.svg?token=AiCM6zPJxbZCtuxqfTpu&branch=master)](https://travis-ci.com/jingbojin/exam)
[![codecov](https://codecov.io/gh/jingbojin/exam/branch/master/graph/badge.svg)](https://codecov.io/gh/jingbojin/exam)
[![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m785725864-85305093236c6fea5c07351a)](https://uptimerobot.com/dashboard#785725864)
[![Website exam.jingbojin.com](https://img.shields.io/website-up-down-green-red/http/exam.jingbojin.com)](https://exam.jingbojin.com/)
![npm type definitions](https://img.shields.io/npm/types/typescript?label=TS)
![Vue](https://img.shields.io/badge/vue-2.x-brightgreen.svg)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

This frontend website was bootstrapped with [Vue CLI](https://cli.vuejs.org/).

***
## Application workflow:
This application simulates an online survey/exam website. 
There are two pages:
1. Test taking page to allow user input/select answers.
2. A result page to show what user submitted.

There are 3 types of questions:

| Type          |                                |
| ------------- |:-------------------------------|
| singleSelect  | only one answer is allowed     |
| multiCheckbox | multiple choices are permitted |
| freeText      | free text answer               |

## I. Running website in your local
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
    When running `npm run build` or `npm run serve`, it will automatically run linting. 
    You could also use `npm run lint`. 

#### 2. Debug: 
    https://vuejs.org/v2/cookbook/debugging-in-vscode.html

#### 3. Development tool: 
    https://github.com/vuejs/vue-devtools
    
***
## IV. Testing tips
#### 1. Guide:
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
2. Use local Storage to support offline saving draft answers. 

***
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

***
## License:
[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
