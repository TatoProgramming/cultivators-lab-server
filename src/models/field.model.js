import mongoose from 'mongoose'

const FieldSchema = mongoose.Schema({
    name: {
        type: String,
    
    },
    user: {
        type: String,
        ref: 'User',
    }
})

export default mongoose.model('fields', FieldSchema)