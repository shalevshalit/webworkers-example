importScripts('compromise.min.js')
let port

self.onmessage = e => {
    if(e.data.port){
        port = e.data.port
        return
    }
    const doc = nlp(e.data)

    self.postMessage({
        text: doc.out('text'),
        html: doc.out('html')
    })
    port.postMessage(doc.nouns().data()[0])
}
