const lastUpdate = async database => {
  const [results] = await database.raw(`
    select max(lastUpdateOnTable) as lastUpdate from 
      (
        select max(today) as lastUpdateOnTable FROM mpc
        union
        select max(today) as lastUpdateOnTable FROM heat
        union
        select max(today) as lastUpdateOnTable FROM pdm
      ) as tables
    `);
  return results[0];
};

export default lastUpdate;
