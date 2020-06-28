import * as fs from 'fs'

function main(input: string) {
  const params = input.split('\n')

  const num = [params[0], ...params[1].split(' ')]
    .map((i) => parseInt(i))
    .reduce((a, b) => a + b)
  const str = params[2]

  const output = `${num} ${str}`
  console.log(output)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
