// process.stdout.write('prompt > ');

module.exports = function() {
  process.stdin.on('data', (data) => {
    // Accepts input and returns current working directory
    const cwd = process.cwd();
    const cmd = data.toString().trim();
    if(cmd === 'pwd') {
      process.stdout.write(cwd);
      process.stdout.write('\nprompt > ');
    }
    // process.stdout.write('You typed: ' + cmd);

  });
}
