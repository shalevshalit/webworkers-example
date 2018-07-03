console.log('hello from two')
importScripts('https://static.parastorage.com/unpkg/lodash@4.17.4/lodash.min.js')

const paintImage = (imageData, i = 2) => {
    setTimeout(() => {
        const w = imageData.width
        const h = imageData.height
        const data = imageData.data
        // const newImageData = new ImageData(new Uint8ClampedArray(data), w, h)
        // const newData = newImageData.data
        // const rgb = Math.floor(Math.random() * 3)

        for (let x = 0; x < w; x++) {
            for (let y = 0; y < h; y++) {
                let index = (x + (y * w)) * 4
                data[index] = data[index] * 1.2
                data[index + 1] = data[index + 1] * 1.2
                data[index + 2] = data[index + 2] * 1.2
            }
        }

        postMessage(imageData)
        if (i) {
            paintImage(imageData, i - 1)
        }
    }, 1000)
}

self.onmessage = (e) => {
    paintImage(e.data)
}