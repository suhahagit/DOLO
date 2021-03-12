# DOLO - Fullstack react-native application

DOLO is an application that was made by using `expo-cli`, it helps users dress-up according to the weather by using the `open-weather-map` external API
each interaction is saved in a different screen - history screen, 
users can like interactions and also view them in a different screen - favotites 
the user can delete interactions (in history/favotites)
history/favorites data is saved in `mongoDB` using `mongoose`
posting/deleting/retrieving requests from/to the database by using `axios` 
backent technology: `nodejs` using `express` server
state manager: `mobx` 

starting server: `node server.js`
starting client: `npm start`

this application works well in both android & ios devices
note: for ios the IPv4 address should be manually updated for the http requests

snippets from the app

![](images/homePage.png)
![](images/recommendation.png)
![](images/history.png)
