# Store Front
Store front is a marketplace showcase that shows products and has a cart functionality. The state is persistent. Cart information will be persisted through refreshes.
#### Environment
##### Development
The application was developed using the following tools:
* NodeJS - >=6.X,  8.11.2 (Machine)
* React - 16.3.1
* React-router - 4.2.2
* Redux - 4.0.0 
* Scss (node-sass-chokidar) - 1.3.0
* MacOs - High Sierra
* Chrome - 66.X

##### Testing
* Enzyme - 3.3.0

#### System Dependencies and installation
To install this application, npm > 3.8.6 installed. To install, please do the following:
1. Clone this repo
2. In the root directory, do 
```sh
$ cd storeFront
$ npm install
```
3. To start the application, 
```sh
$ npm start
```
4. Check your application running on
```sh
localhost:3000
```
#### Testing
This application has unit testing for components, actions and reducers. To test the application,
```sh
cd storeFront
npm test
````
You may face two issues running these:
1. Error 
 >FSEventStreamStart: register_with_server
To fix this, you need to do 
```sh
brew install watchman
```
if you are using Mac. For explanation: (https://github.com/facebook/create-react-app/issues/871)

2. Tests don't run
    Do not worry, the watcher checks if the commits have changed or not, so to run tests again, just press 'a'.

#### Assumptions
##### Category Page
- Adding product to cart will work like this
-- If the product wasn't already in the cart, it will add the product with quantity set to 1
-- If the product was there, it will increase its quantity by 1.
##### MyCart Popup  
- Clicking the remove button will remove the button, will remove the product with all its dependencies
- Count adjacent to MyCart text on the nav bar is the number of distinct products

##### Product Detail Page
- The initial quantity is the quantity of that product in the cart
- Addition/Subtraction will only increase/decrease the quantity locally until you press the "Add To Cart" button.
- You cannot decrease the quantity to less than 0, addition has no limit
- "Add To Cart" button works like this
-- If no addition/subtraction takes place, pressing it will increase the quantity to 1
-- If quantity is changed locally, add to cart will make the quantity of that product in the cart to our local quantity. For eg. Cart has 5 quantities of A, user subtracts it to 2, clicking "Add To Cart" will make quantity of A in cart equal to 2

##### Cart Page
- Addition/Subtraction is coupled with the cart and not local, it will change the quantity directly into the cart.
- Total is calculated as ```quantity * price```
- Removing the product removes all quantities of the product
- We cannot decrease the quantity to less than 1. 

##### App Wide
- Checkout buttons will do nothing.
- The state is saved in the localstorage.

#### Shortcuts
- State management is only done for cart, not for products/popup state. These things could also have been pushed into the state
- Grid is used to display products on the category page - might not work on all browsers
- Commenting/Explaining could have been a lot better.
- Tests are not that extensive right now. Could have been more extensive.
- Breadcrumbs could have been a stateless component but it is harcoded right now.
- There are no animations. 