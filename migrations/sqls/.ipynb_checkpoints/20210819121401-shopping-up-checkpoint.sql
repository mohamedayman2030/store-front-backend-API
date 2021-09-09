/* Replace with your SQL commands */

CREATE TYPE stat AS ENUM ('active','complete');

CREATE TABLE Products(id SERIAL PRIMARY KEY,
             name VARCHAR(100) NOT NULL ,
             price INTEGER NOT NULL);
            
            
CREATE TABLE Users(id SERIAL PRIMARY KEY ,
             firstName VARCHAR(100) NOT NULL,
             lastName VARCHAR(100) NOT NULL,
                  password VARCHAR(100) NOT NULL);
      
      
CREATE TABLE Orders(
id SERIAL PRIMARY KEY ,
status stat NOT NULL ,
userID INTEGER REFERENCES Users(id)

);

CREATE TABLE Order_product(
    id SERIAL PRIMARY KEY ,
    quantity INTEGER NOT NULL,
    product_id INTEGER REFERENCES Products(id),
    order_id INTEGER REFERENCES Orders(id)
);