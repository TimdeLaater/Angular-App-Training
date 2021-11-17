const packagejson = require('../../package.json')

export const environment = {
  production: true,

  // Fill in your own online server API url here
  apiUrl: 'https://tims-fitness-app.web.app/dashboard',

  version: packagejson.version
}
