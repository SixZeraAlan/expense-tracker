const config = {
  app: {
    port: process.env.PORT || 8000,
    baseApi: '/api'
  },
  mongodb: {
    url: 'mongodb://localhost:27017/expenseTracker'
  },
  jwt: {
    secret: 'me' // default
  },
  mongodbSecret: {
    //mongodb user name and password
    user: '',
    pass: ''
  }
};

export default config;
