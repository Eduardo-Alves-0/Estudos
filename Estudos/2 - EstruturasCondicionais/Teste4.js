let marcas = ["ferrari", "teesla", "ford"]

if (marcas.indexOf("tesla") !== -1) {
    console.log("Tem a tesla")
} else {
    marcas.push("tesla")
    console.log("tesla naão estava no array")
    console.log(marcas)
}
