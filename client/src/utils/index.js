export const getErrorMessage = (error) => {
    let message = error.message;
    if (error.response) {
        message = error.response.data.message;
    }
    return message.toString();
};