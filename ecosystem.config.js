module.exports = {
  apps: [
    {
      name: 'nestjs-app',
      script: './main.js',
      watch: true,
      ignore_watch: ['node_modules', 'logs'],
      watch_options: {
        followSymlinks: false,
      },
      env: {
        NODE_ENV: 'development',
      },
      env_test: {
        NODE_ENV: 'test',
      },
      env_staging: {
        NODE_ENV: 'staging',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
