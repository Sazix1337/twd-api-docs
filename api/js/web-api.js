function execute_api(method_without_php, payload = Object) {
    const xhr = new XMLHttpRequest()
    return new Promise(resolve => {
        xhr.open('GET', 'https://dev.woidzero.xyz/twaddle/api/' + method_without_php + '.php?req=' + btoa(JSON.stringify(payload)))
        xhr.onload = () => {
            const response = atob(xhr.responseText)
            resolve(response)
        }
        xhr.send()
    })
}
