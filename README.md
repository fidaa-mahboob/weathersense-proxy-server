# Weathersense Proxy Server 

This is the backend server that connects to Open Weather Map API and passes data to the front end react app. The server is part of the weathersense full stack app forwarding responses to a front end <a href="https://github.com/fidaa-mahboob/weathersense">react app</a>.

## Description

The back end server uses GraphQL with NodeJS the reason for this is due to GraphQL ability to improve response time speed and only get data that is need by the frontend. The code in this repo also acts as a guide for 
anyone wanting to connect to third part API via graphql.

## Getting Started

Before you can use this app you need to change the API_KEY string, you can get this by going on <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">Open Weather Map homepage </a> and create an account to generate an API key. Then create a '.env' file where you can add this:

```
  API_KEY = "<Your-API-Key>"
```

### Dependencies

To install the dependencies use the following command: 

```
  npm install
```

### Executing program

To start the application use the following:

```
 npm run dev 
```

After starting the server, the GraphQL studio can be accessed from the url stated in the bash terminal. This is what a sample query looks like: 

<img width="1725" alt="Screenshot 2024-01-18 at 12 26 10" src="https://github.com/fidaa-mahboob/weathersense-proxy-server/assets/151159499/c8a8bc45-f7b1-4f97-b264-c4474df2a92d">

