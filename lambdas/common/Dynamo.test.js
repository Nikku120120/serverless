const Dynamo = require('../common/Dynamo');

test("Dynamo is object", () => {
    expect(typeof Dynamo).toBe('object');
})

test('dynamo has get and wrte', async () => {
    expect(typeof Dynamo.get).toBe('function');
    expect(typeof Dynamo.write).toBe('function');
})

const validTableName = 'player-points-table'
const data = {
    ID : '123',
    score : 12,
    name : 'test'
}

test('write works', async () => {
    expect.assertions(1);
    try {
        const res = await Dynamo.write(data, validTableName);
        expect(res).toBe(data);   
    } catch (error) {
        console.log("error occured ", error)
    }
})

test('get works', async () => {
    expect.assertions(1);
    try {
        const res = await Dynamo.get('123', validTableName);
        expect(res).toEqual(data);   
    } catch (error) {
        console.log("error occured ", error)
    }
})