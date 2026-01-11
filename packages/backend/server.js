import app from './src/app.js';
import { config } from './src/config/index.js';
import { logger } from './src/utils/logger.js';

const PORT = config.port;

// Start server
app.listen(PORT, () => {
  logger.info(`🚀 Server is running on http://localhost:${PORT}`);
  logger.info(`📝 Environment: ${config.nodeEnv}`);
  logger.info(`🌐 CORS Origin: ${config.cors.origin}`);
});

