console.log('hello from one')
importScripts('https://static.parastorage.com/unpkg/lodash@4.17.4/lodash.min.js')

self.onmessage = (e) => {
    console.log(`message received: ${e.data}`)

    self.postMessage(`https://source.unsplash.com/800x400/?${e.data}`)
}