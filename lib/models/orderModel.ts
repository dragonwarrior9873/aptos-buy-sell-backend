import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const OrderSchema = new Schema({
    walletAddress: {
        type: String,
    },
    totalAptos: {
        type: Number,
    },
    tokenAddress: {
        type: String,
    },
    timeInterval: {
        type: Number,            
    },
    fromDate: {
        type: Date,
    },
    toDate: {
        type: Date,
    },
});