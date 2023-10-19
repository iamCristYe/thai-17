
let connecting = false
//for (let index = 0; index < 10000; index++) {
let seat = [

    "p_B1",
    "p_B2",

    "p_C2A",
    "p_C3A",
    "p_C4A",
    "p_C5A",

]

let set_index = 0
//while(true){
let id = setInterval(() => {
    if (connecting == false) {
        document.getElementsByClassName(seat[set_index % seat.length])[0].click()
        connecting = true
        set_index += 1
        //document.getElementsByClassName("p_C3A")[0].click()
        //document.getElementsByClassName("p_C4A")[0].click()
        //document.getElementsByClassName("p_C5A")[0].click()
        console.log("choosing", id)
    }
    else {
        if (document.getElementsByClassName("spinner-loading").length) {
            console.log("loading", seat[set_index % seat.length], id)
        }
        else if (document.getElementsByClassName("swal2-content").length) {
            document.getElementsByClassName("swal2-confirm swal2-styled")[0].click()
            connecting = false
            console.log("closing", id)
        }
        else {
            console.log("!!!!!!")
            clearInterval(id)
        }
    }
}, 100)
