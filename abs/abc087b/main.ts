import * as fs from 'fs'

function main(input: string) {
  const params = input.split('\n').map((i) => parseInt(i))
  const target = params[3]
  let result = 0

  for (let c500 = 0; c500 <= params[0]; c500++) {
    for (let c100 = 0; c100 <= params[1]; c100++) {
      for (let c50 = 0; c50 <= params[2]; c50++) {
        if (c500 * 500 + c100 * 100 + c50 * 50 === target) {
          result++
        }
      }
    }
  }

  return result
}

console.log(main(fs.readFileSync('/dev/stdin', 'utf8')))
