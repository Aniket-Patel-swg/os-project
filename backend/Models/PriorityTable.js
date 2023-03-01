const mongoose = require("mongoose");
const priority = new mongoose.Schema({
    process : Array
})

module.exports  =  mongoose.model("PriorityTable", priority);