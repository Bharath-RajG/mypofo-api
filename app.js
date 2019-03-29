const express = require('express');
const mongoose = require('mongoose');

const config = require('./config/'+require('./config/env'));
const index = require('./routers/index');
const project = require('./routers/projects');
const middleware = require('./middleware/app-middleware');


const app = express();

mongoose.connect(config.dbUrl, {useNewUrlParser:true}, function(err, data){
    if(err) {
        console.log('Unable to connect db',err)
    }else{
        console.log('Connected with DB')
    }
});
app.use(express.json());
app.use(express.urlencoded({extended:false}));




app.use('/', index);
app.use('/projects',project);




app.use(middleware.notFound);
app.use(middleware.error);

app.listen(config.port, ()=> console.log('API started on port 3002' ));