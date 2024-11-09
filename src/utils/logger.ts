// src/utils/logger.ts
import { createLogger, format, transports } from 'winston';


// Configure the logger
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    // Write all logs with level `info` and below to `combined.log`
    new transports.File({ filename: 'logs/info.log', level: 'info' }),
    // Write all logs with level `error` and below to `error.log`
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
  ],
});

// If we're not in production then log to the `console` with the format:
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    })
  );
}

export default logger;
