const fs = require('fs');
const Watcher = require('./file_watcher');

const watchDir = './watchDir';
const processedDir = './doneDir';

const watcher = new Watcher(watchDir, processedDir);

watcher.on('process', (file) => {
    const watchFile = `${watchDir}/${file}`;
    const processedFile = `${processedDir}/${file.toLowerCase()}`;
    fs.rename(watchFile, processedFile, err => {
        if (err) throw err;
    });
});

watcher.start();
