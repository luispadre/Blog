const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  completed: {
    type: String,
    required: true,
  },
  user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
 
},{
    timestamps:true
});

module.exports=mongoose.model('Task',taskSchema)