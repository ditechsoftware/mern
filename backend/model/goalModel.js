const mongoose = require('mongoose')

const goalShcema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            require: [true],
            ref: 'User'
        },
        text: {
            type: String,
            require: [true, 'Please add a text value'],
        },
    },
    {
        timestamps: true,
    }
)
module.exports = mongoose.model('Goal', goalShcema)