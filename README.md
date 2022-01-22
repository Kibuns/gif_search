# Gif Search React App POC
this app was made as a POC for testing enviromental variables, api calls using an api key, and async function in react. 

![image](https://user-images.githubusercontent.com/77112006/150647567-40866ef0-f7f4-49c4-9cf9-8a5487a6ae1c.png)

# .env
**React environment variables are embedded in the build and are publicly accessible.** Unless you're making tutorial apps, don't put secrets such as API keys in client side source code. When publishing an app, if you want to store some secret data then storing in backend is better option and if client wants to access secret data, it can be accessed by making request to the server.

## how this projects hides it's api key

### 1. **Make an .env file***

```
- your_project_folder
  - node_modules
  - public
  - src
  - .env         <-- create it here
  - .gitignore
  - package-lock.json
  - package.json
  ```
  
### 2. ** Make an environmental variable in .env starting with ```REACT_APP_```. ```create-react-app``` has a tool which can only detect variables in .env with ```REACT_APP_``` in front of them
```
  // .env

REACT_APP_API_KEY=your_api_key  <-- yes
API_KEY=your_api_key            <-- no

```

### 3. ** put .env inside of .gitignore

### 4. ** Access key using ```process.env```
```javascript
const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}=${query}&limit=30&offset=0&rating=G&lang=en`
        );
```



