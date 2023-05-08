const fs = require('fs');
const path = require('path');

const dirFiles = path.join(__dirname, '/files');
const dirFilesCopy = path.join(__dirname, '/files-copy');

const run = () => {
  fs.rm(dirFilesCopy, {recursive: true, force: true}, err => {
    if (err) {
      throw err;
    } else {
      fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, err => {
        if (err) {
          throw err;
        } else {
          fs.readdir(dirFiles, { withFileTypes: true }, (err, files) => {
            files.forEach(file => {
              let filePath = path.join(dirFiles, file.name);
              let filePathCopy = path.join(dirFilesCopy, file.name);

              fs.copyFile(filePath, filePathCopy, err => {
                if (err) throw err;
              });
            });
          });
        }
      });
    }
  });
};

run();
