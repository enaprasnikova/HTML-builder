const fs = require('fs');
const path = require('path');

const dirStyles = path.join(__dirname, '/styles');
const dirProject = path.join(__dirname, '/project-dist');
const bundleFilePath = path.join(dirProject, 'bundle.css');

fs.access(bundleFilePath,fs.constants.F_OK, (err) => {
  if (!err) {
    fs.truncate(bundleFilePath, err => {
      if (err) throw err;
    });
  }

  fs.readdir(dirStyles, {withFileTypes: true}, (err, files) => {
    files.forEach(file => {

      if (file.isFile()) {
        let filePath = path.join(dirStyles, file.name);
        let extName = path.extname(filePath);

        if (extName.toString().trim() === '.css') {
          fs.readFile(filePath, 'utf8', (err, data) => {

            fs.appendFile(bundleFilePath, data, (err) => {
              if (err) throw err;
            });

          });
        }
      }

    });
  });
});
