const parser = require('@tandil/diffparse');
  if (!fs.existsSync(f)) {
  const diff = parser.parseDiffFileSync(f);