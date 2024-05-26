import mongoose from 'mongoose'
import props from './properties'
module.exports=function(){
    // var mongoose = require('mongoose')
    var dbURL = props.DB
    return mongoose.connect(dbURL)
}