function convertToYen(event) {
    console.log("we called the function")
    event.preventDefault()
    const Yen = Number (event.target.Yen.value)
    const USD = 0.0072 * Yen

    document.getElementById("displayoutput").innerText= Yen.toFixed(0) + " is equal to " + USD.toFixed(2)

}

const form = document.querySelector('form')
form.addEventListener("submit",convertToYen)
