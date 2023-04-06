# E-commerce back end DB

## Description
In this project, we built an e-commerce back end application, that allows a user to manipulate data in a database using Sequelize to interact with our MYSQL database. Sequelize is a Object Relational Mapper, or ORM, which allows developers to work with databases in a much more efficient way. 

We store our data in what are called "Models", which is an abstraction that represents our tables in our Database. 

## Installation
The following should be installed onto the user's machine first, for this project to work correctly.

```
VS Code (or similar IDE)
Node.js
Node Package Manager (NPM)
MYSQL
Insomnia 
```
Once you have the above applications installed, you can clone the repo to your local machine from my GitHub: https://github.com/mattwhen/e-commerce-back-end <br> <br>

We'll need to download our modules/dependencies needed to run this application. To do this, open the application in your IDE, and using the integrated terminal, but make sure you're in the Develop folder. Then use the following command in your terminal: <br><br>

```
npm install
```
 <br> 

## How to use
To run our application, we need to create our Database using MYSQL Shell commands. To do this, we need to login into our MYSQL and run the following command in our terminal:
```
source db/schema.sql;
```

After we create our schema, we can exit MYSQL with the command 
```
quit;
```

Then, we need to seed our Database with existing data. To do this, we need to run this command in our terminal:

```
npm run seed
```

Finally, we need to start up our server which will listen on port 3005, to do this, use the following command:

```
npm run start
```

Now we can open our <b>Insomnia</b> application and test our HTTP routes. Using http://localhost:3005/api/tags or http://localhost:3005/api/categories for example, we can use CRUD operations (GET, POST, UPDATE, DELETE) to manage our data. 

## Challenges
One of the challenges I faced was how to associate the models together using the One-to-One or Many-to-Many associations. Thankfully, the Sequelize has great documentation on how to explain the concepts clearly. 

## Future features
A future feature I would implement in the future, is to simply add a front end and tie the back end together to create a full stack web application. 


## Live Demo
 https://drive.google.com/file/d/1i79_el17TCfLwZ2eWjE7-WArVlgkhy_E/view
