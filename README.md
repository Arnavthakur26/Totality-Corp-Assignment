# Totality Corp Frontend Challenge

## Tech Stack

- React - Used as the frontend framework for building components and managing state
- React Router - For client-side routing between pages  
- Styled Components - For styling components with CSS
- React Hook Form - For form validation on checkout page
- React Query - For caching API responses and data fetching

## Features

### Product Listing

- Displays a list of sample products fetched from a mock API  
- Users can filter products by category or search by name
- Clicking "Add to Cart" adds the product to the cart

### Shopping Cart

- Displays items added to the cart along with quantities and totals
- Users can update quantities or remove items
- Cart automatically updates on any changes

### Checkout

- Collects and validates user information like name, address etc
- Calculates and displays order total
- Future enhancement: integrate payment gateway

### Responsiveness

- Uses CSS media queries to make the layout responsive on mobile and desktop

## Live Demo

The app is deployed at [https://totality-frontend-challenge.netlify.app/](https://totality-frontend-challenge.netlify.app/)

## Areas for Improvement

- Add authentication for user accounts
- Improve loading states and error handling  
- Add order confirmation page after successful checkout
- Integrate with a real API instead of mock data
