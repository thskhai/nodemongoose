const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sanpham = new Schema(
    {
        name:{type: String},
        quantity:{type:Number},
        price:{type:Number},
        status:{type: Number},
        image:{type:String}, // image:{type:Array},
        description:{type:String},
        id_danhmuc:{
            type:Schema.Types.ObjectId,
            ref: 'danhmuc'  },
    },{
        timestamps : true
    }
);
module.exports = mongoose.model('sanpham',sanpham)