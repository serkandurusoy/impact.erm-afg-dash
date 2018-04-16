const requestValidator = (req, res, next) => {
  // TODO: validate general request structure
  /**
   * tableName
   * queryName
   * ...optionalWhereCriteria
   *
   */
  console.log('Request validator running');
  next();
};

export default requestValidator;
