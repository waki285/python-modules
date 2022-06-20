import * as json from '../src/json';
import fs from 'fs';

describe("json", () => {
  it("dump", () => {
    const obj = {
      a: "Hello World!",
    };
    const fp = fs.createWriteStream("./test/dump.json");
    json.dump(obj, fp);
    fp.close();
    fp.on("finish", () => {
      expect(fs.readFileSync("./test/dump.json", "utf8")).toBe(JSON.stringify(obj));
    });
  });
  it("dump with ensureAscii", () => {
    const obj = {
      a: "こんにちは",
    };
    const fp = fs.createWriteStream("./test/dump-ascii.json");
    json.dump(obj, fp, { ensureAscii: true });
    fp.close();
    fp.on("finish", () => {
      expect(fs.readFileSync("./test/dump-ascii.json", "utf8")).toBe("{\"a\":\"%u3053%u3093%u306b%u3061%u306f\"}");
    });
  });
  it("dump with indent", () => {
    const obj = {
      a: "Hello World!",
    };
    const fp = fs.createWriteStream("./test/dump-indent.json");
    json.dump(obj, fp, { indent: 2 });
    fp.close();
    fp.on("finish", () => {
      expect(fs.readFileSync("./test/dump-indent.json", "utf8")).toBe("{\n  \"a\": \"Hello World!\"\n}");
    });
  });
  it("dumps", () => {
    const obj = {
      a: "Hello World!",
    };
    const d = json.dumps(obj);
    expect(d).toBe(JSON.stringify(obj));
  });
  it("dumps with ensureAscii", () => {
    const obj = {
      a: "こんにちは",
    };
    const d = json.dumps(obj, { ensureAscii: true });
    expect(d).toBe("{\"a\":\"%u3053%u3093%u306b%u3061%u306f\"}");
  });
  it("dumps with indent", () => {
    const obj = {
      a: "Hello World!",
    };
    const d = json.dumps(obj, { indent: 2 });
    expect(d).toBe("{\n  \"a\": \"Hello World!\"\n}");
  });
  it("load", () => {
    const fp = fs.createReadStream("./test/sample.json");
    const obj = json.load(fp);
    fp.close();
    fp.on("end", () => {
      expect(obj).toEqual(JSON.parse(fs.readFileSync("./test/sample.json", "utf8")));
    })
  });
});