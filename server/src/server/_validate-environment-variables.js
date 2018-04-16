const exitIfNotExists = variable => {
  if (!variable) {
    console.log(`${variable} environment variable must be set.`);
    process.exit(1);
  }
};

const variablesToCheck = ['NODE_ENV', 'PORT', 'TZ'];

const validateEnvironmentVariables = () => {
  const { NODE_ENV, PORT, TZ } = process.env;

  variablesToCheck.forEach(exitIfNotExists);

  if (!['production', 'development'].includes(NODE_ENV)) {
    console.log('A valid NODE_ENV must be provided.');
    process.exit(1);
  }

  if (!Number.isInteger(parseInt(PORT, 10))) {
    console.log('A valid PORT must be provided.');
    process.exit(1);
  }

  if (TZ !== 'Etc/UTC') {
    console.log('TZ must be set to Etc/UTC.');
    process.exit(1);
  }

  return true;
};

export default validateEnvironmentVariables;
