import mongoose, { Schema } from 'mongoose';

var wordListSchema = new Schema({
    word: {
        type: String,
        unique: true
    }
});

export default mongoose.model('word', wordListSchema);
