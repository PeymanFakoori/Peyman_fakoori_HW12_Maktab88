const path = require("path");
const fs = require("fs").promises;

const libre = require("libreoffice-convert");
libre.convertAsync = require("util").promisify(libre.convert);

async function main() {
  const ext = ".pdf";
  const inputPath = path.join(__dirname, "./test.docx");
  const outputPath = path.join(__dirname, `./test${ext}`);
  const docxBuf = await fs.readFile(inputPath);
  let pdfBuf = await libre.convertAsync(docxBuf, ext, undefined);

  await fs.writeFile(outputPath, pdfBuf);
}

main().catch(function (err) {
  console.log(`Error converting file: ${err}`);
});
