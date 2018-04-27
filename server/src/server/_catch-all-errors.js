// eslint-disable-next-line no-unused-vars
const catchAllErrors = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(err);
  res.status(500).send({
    error:
      process.env.NODE_ENV === 'development'
        ? err.toString()
        : `There's been an api error. Please contact the system administrator.`,
  });
};

export default catchAllErrors;
