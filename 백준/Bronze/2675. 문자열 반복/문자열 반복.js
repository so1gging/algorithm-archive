let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 0;i<input.length;i++) {
  const line = input[i].split(' ')

  if(line.length > 1) {
    const count = line[0]
    const str = line[1]

    let result = ''
    for(let j =0;j<str.length;j++) {
      const char = str.charAt(j)

    for(let m = 0;m<count;m++) {
      result += char
    }
    }

    console.log(result)

  }
}
