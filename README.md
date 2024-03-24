This is a React Native Assessment to show movies listing

To run code or install application, please follow below steps
1. Download the application and run npm i (add --legacy-peer-deeps if required) 
2. use npm run ios to run on ios and npm run android to run on android
3. use npm run test to validate the jest test cases report

Highlighted points from implementation
1. Use of custom hook for dasboard page so that all the functional stuff is kept away from the UI component (it also reduces task for further implementation of api calling )
2. Use of both styled-components and stylesheet as per requirement
3. Component creation for image view to handle the error and show the default image
4. Handling corner cases i.e. for long text using ellipsize feature and loading error image if url loading is failed or undefined
5. Lazy loading to load the data i.e. load the next page data only when it is required and showing "No movies found" in case the list goes empty while searching
6. Added unit test cases using jest
7. Modular implementation and folder bifirgations such as assets, common and theme for holding the assets and constants for the application
8. Component creation for image view to handle the error and show the default image
