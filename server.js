const express = require('express');
const mongoose = require('mongoose');
// const url = "mongodb://127.0.0.1:27017/databaseWD19201";
const url = "mongodb+srv://root:kuI0k4GN12qJMxiK@cluster0.xzuqs.mongodb.net/root?retryWrites=true&w=majority&appName=Cluster0"
const danhmuc = require('./router/danhmucRouter');
const sanpham = require('./router/sanphamRouter')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(danhmuc);
app.use(sanpham);
mongoose.connect(url);




app.listen(port, 
    () => console.log(`listening on http://localhost:${port}`));




 
     