path = require 'path'

require 'coffee-script/register'
proxyquire = require('proxyquire').noCallThru()
glob = require 'glob'


addHooks = (hooks, pattern) ->

    return unless pattern

    files = glob.sync pattern

    console.log 'Found Hookfiles: ' + files

    bad_files = []
    for file in files
      try
        proxyquire path.resolve(process.cwd(), file), {
          'hooks': hooks
        }
      catch error
        bad_files.push({file: file, error: error})
    if bad_files.length > 0
      console.error 'Error reading hook files:'
      for i in bad_files
        console.error("\n#{i.file}:")
        console.error 'Message: ' + i.error.message if i.error.message?
        console.error 'Stack: ' + i.error.stack if i.error.stack?
      process.exit(1)


module.exports = addHooks
