# Full stack review plan - Word bank 

## Front-end

* Pages
    * Profile
        * Picture
        * Name
        * Email address
    * Landing Page
    * List words 

* Components 
    * Header
    * Button
    * Input
    * Navigation
    * Footer
        * Copyright
        * Careers

* Redux
    * Store
    * Reducer 
        * initial state
            * user
        * reducer function
        * Action creators
            * login 
            * logout
        * Action type names (constants)

* Routes 
    * BrowserRouter 
    * / 
    * /profile 
    * /words

## Back-end

* Middleware 
    * ensureLoggedIn 
* Routes 
    * /api/words
        * GET 
        * POST
    * /api/profile 
        * GET 
    * auth 
        * Auth0 
* Files 
    * /server
    * index.js
    * controller.js 
    
## Database 

* tables 
    * users
        * id 
        * auth0_id
        * name 
        * picture_url
        * email 
    * words 
        * id 
        * text
* files 
    * /db 
      * init.sql 
      * read_words.sql
      * create_word.sql 
      * create_profile.sql
      * read_profile.sql


## NPM Packages
* axios 
* express 
* massive 
* body-parser
* dotenv 
* express-session
* redux 
* react-redux 
* react-router-dom 

## Third party 

* Auth0 
    * Application 
    * Social connections
* Github 
* Heroku 
* Postman
* Redux DevTools 
* React DevTools 
* SQL Tabs
* Chrome 
    * DevTools
        * Network tab

 
