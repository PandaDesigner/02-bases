import exp from 'constants';
import { buildLogger, logger as wistonLoggerMock } from '../../src/plugins/loggers.plugin';


describe('loggers.plugin test src/plugins/loggers.plugin.ts', () => {

    test('buildLogger should return a function logger', () => {
        const logger = buildLogger('test');

        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');
    });

    test('logger.log should return message', () => {
        const winstonLogSpy = jest.spyOn(wistonLoggerMock, 'log');
        const message = 'test message';
        const service = 'test service';

        const logger = buildLogger(service);

        logger.log(message);

        expect(winstonLogSpy).toHaveBeenCalledWith('info', expect.objectContaining({
            level: 'info',
            message,
            service
        }));

    });

    test('logger.error should return message', () => {
        const winstonErrorSpy = jest.spyOn(wistonLoggerMock, 'error');
        const message = 'test message';
        const service = 'test service';

        const logger = buildLogger(service);

        logger.error(message);

        expect(winstonErrorSpy).toHaveBeenCalledWith('error', expect.objectContaining({
            message,
            service
        }));

    });

});