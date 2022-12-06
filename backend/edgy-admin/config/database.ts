export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '142.93.194.129'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'development'),
      user: env('DATABASE_USERNAME', 'remote'),
      password: env('DATABASE_PASSWORD', 'veggies'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
