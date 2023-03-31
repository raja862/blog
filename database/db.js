


import mongoose from 'mongoose';

const Connection = async () => {
    const URL = ("mongodb+srv://raja:lifeis@cluster0.edzsdqq.mongodb.net/?retryWrites=true&w=majority")
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('NrK Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
