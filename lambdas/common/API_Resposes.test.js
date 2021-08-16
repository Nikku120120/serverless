const Responses = require("./API_Responses");

test("Response is object", () => {
    expect(typeof Responses).toBe('object');
})

test("Returns 200", () => {
    const res = Responses._200();
    expect(typeof res).toBe('object');
    expect(res.statusCode).toBe(200);
})

test("Returns 400", () => {
    const res = Responses._400();
    expect(typeof res).toBe('object');
    expect(res.statusCode).toBe(400);
})

test("Returns 404", () => {
    const res = Responses._404();
    expect(typeof res).toBe('object');
    expect(res.statusCode).toBe(404);
})

test("Define funtions Returns statuscode", () => {
    const res = Responses._DefineResponse(120);
    expect(typeof res).toBe('object');
    expect(res.statusCode).toBe(120);
})