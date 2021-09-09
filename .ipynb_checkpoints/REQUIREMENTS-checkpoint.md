# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index '/product' [GET]
- Show (args: product id) 'product/:id' [GET]
- Create (args: Product)[token required] 'product/:id' [POST]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required] 'users/' [GET]
- Show (args: id)[token required] 'users/:id' [GET]
- Create (args: User)[token required] 'users/user' [POST]

#### Orders
- Current Order by user (args: user id)[token required] 'orders/:user_id' [GET]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
-  id serial
- name varchar
- price numeric
- [OPTIONAL] category

#### User
- id serial
- firstName varchar(100)
- lastName varchar(100)
- password varchar(100)

#### Orders
- id serial (primary key)
- status of order (active or complete) 

- user_id string foreign key


### Order_product
- id serial (primary key)
- id of each product in the order integer (foreign key)
- quantity of each product in the order integer
- id of each order (foreign key)