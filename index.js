const server = require('./server');

const init = async () => {
    try {
      const serverInstance = await server;
  
      await serverInstance.start();
      console.log("message: Server listening on port  3000");
    } catch (error) {
      console.log("message: App failed to start" );
    }
  };

init();