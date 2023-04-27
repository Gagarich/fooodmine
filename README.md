1. Introduction to the course
2. Install development tools
3. Create Angular App
    1. Create project's folder
    2. Install @angular/cli ()
    3. Create App as frontend
    4. Remove .git to app folder
4. Add Header
    1. Generate Component(ng g c components/partials/header)
    2. Add Html
    3. Add Css
5. List Foods
    1. Create Food model
    2. Create data.ts
        1. Add sample foods
    3. Add images to assets
    4. Create Food service(enter frontend folder. In term - ng g s services/food)
    5. Create Home component(right click on frontend in expl. ng g c components/pages/home )
        1. Add ts
        2. Add html(npm install ng-starrating --force)
        3. Add css
6. Search
    1. Add method to Food service
    2. Add search route 
    3. Show search result in Home component
    4. Generate search component
        1. Add to home component
        2. Add ts
        3. Add html
        4. Add css
7. Tag Bar
    1. Create Tag model
    2. Add sample tags to data.ts
    3. Food service
        1. Add get all tag method
        2. Add get all foods by tag method
    4. Add tags route
    5. Show tag result in Home component
    6. Generate Tags component
        1. Add to home component
        2. Add ts
        3. Add html
        4. Add css
8. Food Page
    1. Add method to food service
    2. Generate Food Page component
        1. Add Route
        2. Add ts
        3. Add html
        4. Add css
9. Cart Page
    1. Create CartItem Model
    2. Create Cart Model
    3. Generate Cart service
    4. Add to Cart Button in Food Page
    5. Generate Cart page component
        1. Add Route
        2. Add ts
        3. Add html
        4. Add css
10. Not Found!
    1. Generate Component
        1. Add ts
        2. Add html
        3. Add css
    2. Add to Page
        1. Home Page
        2. Food Page
        3. Cart Page
11. Connect To Backend
    1. Create backend folder
    2. npm init(npm init -y in backend folder of terminal)
    3. npm install typescript (npm install typescript)
    4. Create tsconfig.json
    5. Create .gitignore
    6. Copy data.ts to backend/src
    7. npm install express cors (npm install express cors)
    8. Create server.ts
        1. install @types (npm install ts-node --save-dev())
        2. Add Apis 
    9. npm install nodemon ts-node --save-dev
    10. Add urs.ts to frontend
    11. Add HttpClient module
    12. Update food service
12. Login Page
    1. Generate Component
        1. Add to routes
        2. Add ts
        3. Add html
            1. Import Reactive Forms Module
        4. Add Css
    2. Add Login Api
        1. Use json
        2. Add jsonwebtoken (npm install jsonwebtoken)
        3. test Using Postman
    3. Generate User Service
        1. Generate User model
        2. Add User Subject
        3. Add Login Method
            1. Add User Urls
            2. Generate IUserLogin interface
            3. Add ngx-toastr
                1. Import Module(npm install ngx-toastr)
                2. Import BrowserAnimationsModule
                3. Add styles in angular.json
            4. Add to Header
        4. Add Local Storage methods
        5. Add Logout Method
            1. Add to Header
13. Make Components For Login Page
    1. Input Container
    2. Input Validation
    3. Text Input
    4. Default Button
14. Connect Login API To MongoDB
    1. Moving Apis into routers
    2. Create MongoDB Atlas
    3. Create .env file
    4. Install (npm install mongoose dotenv bcryptjs express-async-handler)
        1. monoose
        2. dotenv
        3. bcryptjs
        4. jsonwebtoken
        5. express-async-handler
    5. Connect to MongoDB Atlas
    6. Use MongoDb instead of data.ts in apis
