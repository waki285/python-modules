function b64encode(s: Buffer) {
  return Buffer.from(s.toString("base64"));
}