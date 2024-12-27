import { httpClientPlughin } from '../../src/plugins/http-client.plugin';


describe('http-client.plugin test src/plugins/http-client.plugin.ts', () => {

    test('test should httpClientPlughin.get return object', async () => {
        const data = await httpClientPlughin.get('https://jsonplaceholder.typicode.com/todos/1');
        expect(data).toMatchObject({
            userId: expect.any(Number),
            id: expect.any(Number),
            title: expect.any(String),
            completed: expect.any(Boolean)
        });
    });

    test('httpClientPlughin.post should throw an error', async () => {

        expect(typeof httpClientPlughin.post).toBe('function');
        await expect(() => httpClientPlughin.post('some-url', {})).rejects.toThrowError('Not implemented');
    });

    test('test should httpClientPlughin.put throw error', async () => {
        expect(typeof httpClientPlughin.put).toBe('function');
        await expect(() => httpClientPlughin.put('some-url', {})).rejects.toThrowError('Not implemented');
    });

    test('test should httpClientPlughin.delete throw error', async () => {
        expect(typeof httpClientPlughin.delete).toBe('function');
        await expect(() => httpClientPlughin.delete('some-url')).rejects.toThrowError('Not implemented');
    });


});