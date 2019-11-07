// Submission schema for monngodb
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SubmissionSchema = new Schema({
    recordId: {
        type: Number
    },
    researcherId: {
        type: Number
    },
    metadataCollectionId: {
        type: Number
    },
    typeOfData: {
        type: String
    },
    dataFrom: {
        type: String
    },
    isPublished: {
        type: Boolean
    },
    reference: {
        type: String
    },
    isEmbargo :{
        type: Boolean
    },
    releasDate :{
        type: Date
    },
    Doi :{
        type: String
    }

}, {
    collection: 'submission'
});

module.exports = mongoose.model('Submission', SubmissionSchema);