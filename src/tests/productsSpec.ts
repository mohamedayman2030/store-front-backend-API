import {product,products} from '../models/Product';

const theProduct = new products()

it('should have an index method',()=>{
    expect(theProduct.Index).toBeDefined()
});

it('should have a show method',()=>{
    expect(theProduct.show).toBeDefined()
});

it('should have a create method',()=>{
    expect(theProduct.create).toBeDefined()
});

it('create method should add a product', async () => {
    const result = await theProduct.create({
     id:1, 
   name: 'pepsi',
        price:5
    });
    expect(result).toBeDefined()
    
});

it('index method should return a list of Products', async () => {
    const result = await theProduct.Index();
    expect(result).
    toEqual([{
       id:1,
      name: 'pepsi',
        price:5
    }])
  }); 

it('show method should return the correct product', async () => {
    const result = await theProduct.show('1');
    expect(result).toEqual({
        id:1,
     name: 'pepsi',
        price:5
    });
  });



