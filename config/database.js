module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    // default: {
    //   connector: 'bookshelf',
    //   settings: {
    //     client: 'sqlite',
    //     filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    //   },
    //   options: {
    //     useNullAsDefault: true,
    //   },
    // },
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI'),
        // host: env('DATABASE_HOST'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
      },
      options: {}
    }
  },
});
