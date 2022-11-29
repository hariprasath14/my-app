export function checkIfFilesAreTooBig(file, maxSize) {
    maxSize = maxSize ? maxSize : 1
    // console.log(file);

    let valid = true
    if (file) {
        const size = file?.size / 1024 / 1024
        // console.log(size,maxSize);

        if (size > maxSize) {
            valid = false
        }
    }
    // console.log(valid);

    return valid
}

export function checkIfFilesAreCorrectType(file) {
    let valid = true
    // console.log(file);

    if (file) {
        if (!['image/png', 'image/jpeg', 'image/png'].includes(file.type)) {
            valid = false
        }
    }
    // console.log(valid);

    return valid
}