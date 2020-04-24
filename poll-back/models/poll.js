const mongoose = require('mongoose')

if ( process.env.NODE_ENV !== 'production' ) {
    require('dotenv').config()
}

const url = process.env.MONGODB_URI

mongoose.connect(url)

const Poll = mongoose.model('Poll', {   //poll schema
    question: String,
    options: Array,
    answerCount: Array
})

module.exports = Poll
