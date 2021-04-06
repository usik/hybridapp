const models = require('../../models');

exports.get_products = ( _ , res) => {
    // res.render( 'admin/products.html' , 
    //     { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    // );

    models.Products.findAll({

    }).then ( (products) => {
        //db에서 받은 products를 products변수명으로 내보냄
        res.render('admin/products.html', {products:products});
    });
}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}
//db에 데이터 넣기
exports.post_products_write = ( req , res ) => {
    //res.send(req.body); //test 용

    //column 값만 맞다면 이렇게 해도 굳
    models.Products.create(req.body).then(()=>{
        res.redirect('/admin/products');
    });

    // models.Products.create({
    //     name : req.body.name,
    //     price : req.body.price,
    //     description : req.body.description

    // }).then( () => {
    //     res.redirect('/admin/products');
    // });
}