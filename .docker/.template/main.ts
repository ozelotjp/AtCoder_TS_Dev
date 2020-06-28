import * as fs from 'fs'

function main(input: string) {
  const params = input.split('\n')
  return params.map((i) => parseInt(i)).reduce((a, b) => a + b)
}

console.log(main(fs.readFileSync('/dev/stdin', 'utf8')))
