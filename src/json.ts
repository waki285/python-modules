import fs from "fs";

function escape(str: string){
	return str.replace(/[^a-zA-Z0-9@*_+\-./]/g, (m) => {
		const code = m.charCodeAt(0);
		if (code <= 0xff) {
			return '%' + ('00' + code.toString(16)).slice(-2).toLowerCase();
		} else {
			return '%u' + ('0000' + code.toString(16)).slice(-4).toLowerCase();
		}
	});
}

type DumpOptions = {
  ensureAscii?: boolean;
  indent?: number | string | null;

}

function dumps(obj: object, options: DumpOptions = {}) {
  const ensureAscii = options.ensureAscii || false;
  if (ensureAscii) obj = Object.entries(obj).map(x => {
    const ooo = {} as Record<typeof x[0], typeof x[1]>;
    ooo[x[0]] = escape(x[1]);
    return ooo;
  })[0];
  return JSON.stringify(obj, null, options.indent || void 0);
}

function dump(obj: object, fp: fs.WriteStream, options: DumpOptions = {}) {
  fp.write(dumps(obj, options));
}

function load(fp: fs.ReadStream): object {
  return JSON.parse(fp.read());
}

function loads(str: string): object {
  return JSON.parse(str);
}

export { dumps, dump, load, loads };