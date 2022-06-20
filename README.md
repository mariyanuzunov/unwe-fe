# BLINDOOR - online store for interior and exterior doors

Angular project for UWNE, 2022.

## Technologies

- Angular
- Angular Material
- NgRx
- Nest.js (Node.js) API
- MongoDB

## User roles

#### Guest

- Access to Home, Catalogue, About, Login and Register pages.
- Log In to an existing account
- Create a new account

#### User (customer)

- Add items to the cart
- Submit an order
- Cancel an order, but only if the status is still the default - 'registered'
- Write a review about a product, but only if the status of the order is 'completed'.
- Access to user profile page, where he can
  - View account details
  - View his order history
  - View his reviews history

#### Admin

- Add, Edit and Delete items
- View all orders
- Change order status
- View all user reviews
- Delete a review

## Usage

### Instalation

`$ npm install`

### Spin a development server

```
# Angular
$ ng serve

# Nest API - Visit (https://github.com/mariyanuzunov/unwe-be) for more details
$ npm run start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
