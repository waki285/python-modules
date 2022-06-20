function b64encode(s: Buffer) {
  return Buffer.from(s.toString("base64"));
}

function b64decode(s: Buffer) {
  return Buffer.from(s.toString(), "base64");
}

export { b64encode, b64decode };