module.exports = {
  apps : [{
    script: './bin/www',
  }],
  deploy : {
    production : {
      user : 'ubuntu',
      host : '13.57.227.29',
      key  : '~/.ssh/test.pem',
      ref  : 'origin/main',
      repo : 'https://github.com/asouza88/pm2deploytest',
      path : '/var/www/production',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
