$(document).ready(function () {

    var form = document.getElementById("form");
    form.addEventListener("submit", e => {
        e.preventDefault();
        let url = 'https://verify3-9449-lsdga7.twil.io/start-verify'

        const phoneValue = e.target.phone.value
        const country = e.target.india.value
        const phone = country + phoneValue
        const username = "AC8f7e48170ef56733fee58a24637ad805"
        const password = "8625ddca384a88d55f00713b877b2747"
        console.log(phone)
//   let form =new FormData()
//   form.append("to",phone)
//   form.append("channel","sms")
//   form.append("locate","en")
        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization': 'basic' + 'AC8f7e48170ef56733fee58a24637ad805:8625ddca384a88d55f00713b877b2747'
            }

            , body: JSON.stringify({
                to: "+919639806383",
                channel: "sms",
                locate: "en"
            })
        })
            .then(resp => resp.json())
            .then(json => console.log(json))



    });





















})