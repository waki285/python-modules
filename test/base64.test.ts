import * as base64 from "../src/base64";

describe("base64", () => {
  it("encode", () => {
    const s = "Hello World!";
    const b = Buffer.from(s);
    const e = base64.b64encode(b);
    const d = e.toString();
    expect(d).toBe(Buffer.from(s).toString("base64"));
  });
  it("decode", () => {
    const s = "SGVsbG8gV29ybGQh";
    const b = Buffer.from(s);
    const e = base64.b64decode(b);
    const d = e.toString();
    expect(d).toBe(Buffer.from(s, "base64").toString());
  });
});