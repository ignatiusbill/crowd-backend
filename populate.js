import mongoose from 'mongoose';
import Word from './models/word';

const words = [
    { 
        word: 'Apple'
    },
    { 
        word: 'Banana'        
    },
    { 
        word: 'Candy'        
    },
    { 
        word: 'Doritos'        
    },
    { 
        word: 'Eggnog'        
    }
];

mongoose.connect('mongodb://ignatiusbill:9PCYZFI5jKXR0M4g@ds129013.mlab.com:29013/crowd-mongodb', { useMongoClient: true });

words.map(data => {
    const word = new Word(data);
    word.save();
});
