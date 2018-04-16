import ExpressBrute from 'express-brute';
import BruteKnex from 'brute-knex';

const rateLimiter = knexInstance => {
  const store = new BruteKnex({
    tablename: 'ratelimit',
    createTable: true,
    knex: knexInstance,
  });

  const bruteforce = new ExpressBrute(store, {
    freeRetries: 50,
    minWait: 500, // ms
    maxWait: 10000, // ms
    lifetime: 60, // s
  });

  return bruteforce.prevent;
};

export default rateLimiter;
