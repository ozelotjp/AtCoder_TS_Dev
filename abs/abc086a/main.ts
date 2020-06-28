import * as fs from 'fs'

function main(input: string) {
  const params = input.split(' ').map((i) => parseInt(i))
  const output = (params[0] * params[1]) % 2 === 1 ? 'Odd' : 'Even'
  console.log(output)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
