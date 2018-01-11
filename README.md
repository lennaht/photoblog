# photoblog
Easy photo-publishing site with Vue on the front-end, Express on the backend and MongoDB as database

You have to create a config.js file in the /server folder, it has to contain the following:

    module.exports = {
        port: process.env.PORT || your Port,
        database: 'link to your mongodb database (mongodb://host/database',
        jwtKey: 'yourSecretKey'
    };
