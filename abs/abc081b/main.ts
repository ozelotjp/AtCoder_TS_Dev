import * as fs from 'fs'

function main(input: string) {
  const params = input.split('\n')

  let a = params[1].split(' ').map((i) => parseInt(i))
  let res = 0

  for (;;) {
    if (a.filter((i) => i % 2 === 1).length !== 0) {
      return res
    }
    a = a.map((i) => i / 2)
    res++
  }
}

console.log(main(fs.readFileSync('/dev/stdin', 'utf8')))
