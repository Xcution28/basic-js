/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    const indexOfAt = email.lastIndexOf('@');

    if (indexOfAt !== -1) {
        return email.slice(indexOfAt + 1);
    }

    return '';
}

module.exports = {
  getEmailDomain
};
