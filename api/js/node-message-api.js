const axios = require("axios")

const execute = () => {
    return new Promise(resolve => {
        axios.get(`https://dev.woidzero.xyz/twaddle/api/events/listen.php?req=${btoa(JSON.stringify({'token':'u2ufYqv5BEEpSSGHWfQlh3Yi'}))}`).then(response => {
            const r = atob(response.data)
            const data = {
                message: JSON.parse(r)["event"][0]["content"]["message"],
                author: JSON.parse(r)["event"][0]["content"]["message"]["author"]
            }
            resolve(data)
        }).catch(error => {
            return error
        })
    })
}

module.exports = execute
