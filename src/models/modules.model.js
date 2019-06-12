import mongoose from 'mongoose'

const ModulesSchema = mongoose.Schema({
    name: {
        type: String,
    },
    section: {
        type: String,
        ref: 'Section'
    }
})

export default mongoose.model('modules', ModulesSchema)