// userModel.js

const User = require('../src/config').collection; 
//');

async function createUser(username, password,email) {
    const saltRounds = 10;
    console.log('ssss')
    //const hashedPassword = await bcrypt.hash(password, saltRounds);

    const userData = {
        name: username,
        password: password,
        email:email,
        verified:false,
    };
    console.log('sssuuuus')
    const existingUser = await User.findOne({ name: username });
    if (existingUser) {
        throw new Error('User already exists. Please choose a different username.');
    }
    const existingUser1 = await User.findOne({ email: email });
    if (existingUser1) {
        throw new Error('User already exists for this email. Please choose a different email.');
    }


    const newUser = await User.create(userData); // Use the create method to insert a new document
    return newUser;
}


async function loginUser(username, password) {
        console.log('wwwwwww')
    const user = await User.findOne({ name: username });
    if (!user) {
        throw new Error('User not found.');
    }
    if (password !== user.password) {

        throw new Error('Incorrect password.');
    }
        console.log('bbbbbbbb')
    

    //const isPasswordMatch = await bcrypt.compare(password, user.password);
    //if (!isPasswordMatch) {
      //  throw new Error('Incorrect password.');
   // }
      
    return user;
}




module.exports = {
    createUser,
    loginUser
};
