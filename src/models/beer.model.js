// Connection
import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        note: {
            type: Number,
            enum: [0, 1, 2, 3, 4, 5],
            default: 0,
        },
        author: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Beer', schema)
