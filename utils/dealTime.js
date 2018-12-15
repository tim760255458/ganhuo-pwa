export function dealStringTime (stringTime = '') {
    if (stringTime) {
        return `${stringTime.slice(0, 10)} ${stringTime.slice(11, 19)}`
    } else {
        return 'null'
    }
}
