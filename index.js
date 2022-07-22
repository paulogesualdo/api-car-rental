const server = require('./server');
const config = require("./config");

const init = async () => {
    try {
      const serverInstance = await server;
  
      await serverInstance.start();
      console.log(`message: Server listening on port ${config.environmentVariables.PORT}, environment ${config.environmentVariables.NODE_ENV}`);
    } catch (error) {
      console.log(`message: App failed to start`);
    }
  };

init();