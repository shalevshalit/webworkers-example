importScripts('https://unpkg.com/compromise@latest/builds/compromise.min.js')

self.onmessage = e => {
    const doc = nlp(e.data)

    self.postMessage({
        text: doc.out('text'),
        html: doc.out('html'),
        nouns: doc.nouns().data()
    })
}
