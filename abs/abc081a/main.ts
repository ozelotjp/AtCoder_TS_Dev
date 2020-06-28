import * as fs from 'fs'

function main(input: string) {
  const params = input.split('')
  const output = params.filter((i) => i === '1').length
  console.log(output)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
