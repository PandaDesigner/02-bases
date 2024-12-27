import { getUUID } from '../../src/plugins/get-id.plugin';


describe('get-id.plugin test src/plugins/get-id.plugin.ts', () => {

    test('getUUID() should return a uuid', () => {
        const uuid = getUUID();
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
        expect(uuid).toStrictEqual(expect.any(String));
        expect(uuid).toMatch(uuidRegex);
        expect(uuid.length).toBe(36);
    });
});