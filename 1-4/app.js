var convert = require("jimp");
convert.read("wonder.png", (err, lenna) => {
  if (err) throw err;
  lenna
    .resize(500, 500) // resize
    .quality(60) // set JPEG quality
    .write("wonder.jpg"); // save
});
