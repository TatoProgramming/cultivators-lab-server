import mongoose from 'mongoose'

const SectionSchema = mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    field: {
        type: String,
        ref: 'Field'
    }
})

export default mongoose.model('sections', SectionSchema)