const w = 800
const h = 400
let imageData

const changeImage = data => {
    for (let x = 0; x < w / 2; x++) {
        for (let y = 0; y < h; y++) {
            let index = (x + (y * w)) * 4
            data[index] = 255 - data[index]
            data[index + 1] = 255 - data[index + 1]
            data[index + 2] = 255 - data[index + 2]
        }
    }
    return data
}

self.onmessage = (e) => {
    if (e.data.port) {
        const canvas = new OffscreenCanvas(800, 400)
        const imageCtx = canvas.getContext('2d')
        e.data.port.onmessage = e => {
            const type = e.data && e.data.normal
            if (!type) {
                return
            }
            src = `https://source.unsplash.com/800x400/?${type}`
            fetch(src, { mode: 'cors' })
                .then(response => createImageBitmap(response.blob()))
                .then(imageBitmap => {
                    imageCtx.drawImage(imageBitmap, 0, 0)
                    console.log(imageCtx.getImageData(0, 0, 800, 400))
                    imageData = changeImage(imageCtx.getImageData(0, 0, 800, 400))
            })
        }
        return
    }

    self.postMessage(imageData.data, [imageData.data.buffer])
}