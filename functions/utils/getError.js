// Author: Monil Hitesh Andharia (B00884813)

const getError = (status, message) => {
  var err = new Error();
  err.status = status || 500;
  err.message = message || 'Internal Server Error';
  return err;
};

module.exports = getError;
