/* eslint-disable @typescript-eslint/no-var-requires */
const { PrismaClient } = require('@prisma/client');

(async () => {
  const client = new PrismaClient();

  client.$connect();

  await client.user.create({
    data: {
      email: 'coo@spacex.com',
      firstName: 'Gwynne',
    },
  });

  const users = await client.user.findMany();

  console.table(users);

  client.$disconnect();
})();
