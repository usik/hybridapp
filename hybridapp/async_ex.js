const models = require('./models');

async function getProducts(){

    //error 처리

    try{
        const product1 = await models.Products.findByPk(1);
        console.log(product1.dataValues);
    
        const product3 = await models.Products.findByPk(3);
        console.log(product3.dataValues);
    }catch(err){
        console.log(err);
    }


}

getProducts();