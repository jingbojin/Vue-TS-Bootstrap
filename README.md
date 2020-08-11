# Online-Exam (A Vue + TypeScript + Bootstrap + Axios Project example)
[![Build Status](https://travis-ci.com/jingbojin/exam.svg?token=AiCM6zPJxbZCtuxqfTpu&branch=master)](https://travis-ci.com/jingbojin/exam)
[![codecov](https://codecov.io/gh/jingbojin/exam/branch/master/graph/badge.svg)](https://codecov.io/gh/jingbojin/exam)
[![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m785725864-85305093236c6fea5c07351a)](https://uptimerobot.com/dashboard#785725864)
[![Website exam.jingbojin.com](https://img.shields.io/website-up-down-green-red/http/exam.jingbojin.com)](http://exam.jingbojin.com/)
![npm type definitions](https://img.shields.io/npm/types/typescript?label=TS)
![Vue](https://img.shields.io/badge/vue-2.x-brightgreen.svg)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

Demo site: http://exam.jingbojin.com
***
## Application workflow:

This application simulates an online exam/survey website. 
There are two pages:
1. An exam page: Allow users to input/select their answers.
2. A result page: Show users what they have submitted, with start and finish time.

* Once users submitted their answers, they will be redirected to the result page.
* In the result page, there is a `Try again` button in the end of the page, 
so that users can retry the exam. 
* Therefore, both page can navigate to each other. 

There are 3 types of questions:

| Question Type |                                    |
| ------------- |:-----------------------------------|
| singleSelect  | only one answer is allowed         |
| multiCheckbox | multiple selections are permitted  |
| freeText      | free text answer                   |

The questions list can be modified in [test_data.json](public/test_data.json), 
you can utilise [MockApiResponse](src/services/api/MockApiResponse.ts) to update/print this json file. 

This json file also controls:
* The test title
* Pagination setting for exam page (number of questions per page)

## I. Running website in your local

In the project root directory: 
1. Install packages:
    ### `npm install`
    
2. Runs the app in the development mode:
    ### `npm run serve`
    Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
        
    The page will reload if you make edits.<br>
    You will also see any lint errors in the console.
    
3. Other available commands:
    
    ### `npm run test:unit`
    
    Launches the test runner in the interactive watch mode.<br>
    
    ### `npm run test:coverage`
        
    Run jest test coverage.<br>
    
    ### `npm run build`
    
    Builds the app for production to the `build` folder.<br>
    It correctly bundles application in production mode and optimizes the build for the best performance.
    
    The build is minified, and the filenames include the hashes.<br>
    
***
## II. ci/cd Deployment process
#### 1. CI:
This repo is using Travis ci, check [.travis.yml](.travis.yml).

#### 2. CD:
This application can be deployed to heroku, the config file is in root folder `static.json`.

More information:
[Deploy to heroku](https://cli.vuejs.org/guide/deployment.html#heroku)

See the section about [deployment](https://cli.vuejs.org/guide/deployment.html#general-guidelines) for more information.

***
## III. IDE Lint & Debug
#### 1. Lint: 
    When running `npm run build` or `npm run serve`, it will automatically run linting. 
    You could also use `npm run lint`. 

#### 2. [Debug](https://vuejs.org/v2/cookbook/debugging-in-vscode.html)

#### 3. [Development tool](https://github.com/vuejs/vue-devtools)
    
***
## IV. Testing tips
#### 1. [Guide](https://vuejs.org/v2/guide/unit-testing.html)

***
## NOTES
1. '.eslintrc.js' is modified to turn off interface prefix rule:
    ```
    '@typescript-eslint/interface-name-prefix': 'off',
    ```

***
## Potential improvement:
1. Result page still needs some polish for mobile responsive view.
2. Add user input validations.
3. Use local Storage to support offline saving draft answers. 
4. Reduce bundle size by selectively importing bootstrap.vue components.
5. This application is using [Vue simple state management](https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch).
    You may want to use [Vuex](https://github.com/vuejs/vuex) for more complicated scenario.

***
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

***
## License:
[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
