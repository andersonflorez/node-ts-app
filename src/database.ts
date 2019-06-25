import { mongodb } from './keys';
import mongoose from 'mongoose';


mongoose.connect(mongodb.URI, {
    useNewUrlParser: true
})
    .then(db => console.log("db is connect"))
    .catch(err => console.log(err));