export default (error) => {
    let errors = {};

    if (error.graphQLErrors[0].extensions.exception.errors) {
        return error.graphQLErrors[0].extensions.exception.errors;
    }

    errors.global = 'Something went wrong. Please try again.';
    return errors;
};
