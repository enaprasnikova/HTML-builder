const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const pathTextFile = path.join(__dirname, 'text.txt');
const writeStream = new fs.createWriteStream(pathTextFile, 'utf-8');

stdout.write('Введите текст :)\n');
stdin.on('data', (data) => {
  let text = data.toString().trim();

  if (text === 'exit') {
    process.exit();
  } else {
    writeStream.write(data);
  }
})

process.on('exit', () => {
  stdout.write('Пока!');
});

process.on('SIGINT', () => {
  process.exit();
});
