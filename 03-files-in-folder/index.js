const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '/secret-folder');

fs.readdir(dir, {withFileTypes: true}, (err, files) => {

  files.forEach(file => {

    if (file.isFile()) {

      let fileDir = path.join(dir, file.name);
      let fileName = path.basename(fileDir, path.extname(fileDir));
      let extName = path.extname(fileDir);

      fs.stat(fileDir, (error, stats) => {
        let fileSizeBytes = stats.size;
        let fileSizeKb = fileSizeBytes / 1024;
        let fileInfo = `${fileName} - ${extName.slice(1)} - ${fileSizeKb}kb`;
        console.log(fileInfo);
      });

    }

  });
});

