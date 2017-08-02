import Word from '../models/word';

export const index = (req, res, next) => {
    Word.find().lean().exec((err, words) => res.json(
        { words }
    ));
};
