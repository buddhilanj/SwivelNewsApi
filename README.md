# SwivelNewsApi
Code Challenge given by swivel group

# Usage
- Clone the Repo to your mac or windows pc

- install node modules
  - yarn install

- run the app (use run-ios if need to run on iPhone)
  - yarn react-native run-android 
    
# Library Usage
- App is built on react-native 0.61
- react-native-elements used to speed up the UI development
- using react-navigation for screen navigation
- axios for network requests
- redux, redux-thunk for central state management and middleware for synchronous calls
- async-storage for persisting data (not using redux-persist because just 2 values persisted)

# Project Breakdown
 - actions, reducers seperated in different folders
 - api folder has URLs and RestClient created for apis
 - asset folder to store images
 - components folder to seperate different component from screens. how ever only broken to one component 
 - dependencies for JS 3rd party imported but none used
 - helpers folder store various calculation, constant storing
 - navigation folder contains the app navigation structure
 - screens folder contains different screens
 - services folder contains service layer/ connection to data sources
 - storage has the model for async storage and its connections
 - store has the configurations for redux store
 - styles - stored on Screens/Components here

