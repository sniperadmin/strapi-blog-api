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
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME')
      },
      options: {}
    }
  },
});
