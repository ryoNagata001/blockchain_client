import cmd from 'node-cmd'
import Promise from 'bluebird'

const getAsync = Promise.promisify(cmd.get, { multiArgs: true, context: cmd })

export default function ClientServer () {
  getAsync(
    'node ./src/blockChain/main.js'
  ).then(data => {
    alert(data)
    console.log('sever started')
  }).catch(err => {
    console.log('cmd err', err)
  })
}
