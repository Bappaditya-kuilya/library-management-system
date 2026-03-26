'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Book'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'canceled'],
        default: 'pending'
    },
    notification: {
        type: String,
        default: 'Your reservation has been received.'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

reservationSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Reservation', reservationSchema);