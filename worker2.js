const w = 800
const h = 400

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
    const newImage =  changeImage(e.data)
    self.postMessage(newImage, [newImage.buffer])
}