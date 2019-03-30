importScripts('compromise.min.js')

self.onmessage = e => {
    const doc = nlp(e.data)

    self.postMessage({
        text: doc.out('text'),
        html: doc.out('html')
    })
}
