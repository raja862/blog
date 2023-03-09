// import mongoose from 'mongoose';

// const Connection = async () => {
//     try{
//         await mongoose.connect('mongodb+srv://raja:lifeis@cluster0.edzsdqq.mongodb.net/?retryWrites=true&w=majority');
//         console.log('Db connection established.')
//     }catch(error){
//         console.log('DB Error: ', error);
//     }
// }
// export default Connection;


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