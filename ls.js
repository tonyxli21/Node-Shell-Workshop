const fs = require('fs');

module.exports = function() {
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    // const list =  fs.readdir('./', 'utf8', (err, files) => {
    //      if(err) {
    //       throw err;
    //     } else {
    //       process.stdout.write(files.join('\n'));
    //     }
    //   })
    // }
    if(cmd === 'ls') {
      process.stdout.write('\nprompt > ');
      fs.readdir('./', 'utf8', (err, files) => {
        if(err) {
          throw err;
        } else {
          process.stdout.write(files.join('\n'));
          process.stdout.write('\nprompt > ');
        }
      })
    }
  })


  // fs.readdir('./', 'utf8', (err, files) => {
  //   if(err) {
  //     throw err;
  //   } else {
  //     process.stdout.write(files.join('\n'));
  //     // process.stdout.write("prompt > ");
  //   }
  // })
}
