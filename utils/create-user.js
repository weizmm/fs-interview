module.exports = (userDetails) => {
    if (userDetails.age > 21) {
        console.log("user successfully created");
    } else {
        throw new Error("Failed to create user because his age must be greater than 21");
    };
};