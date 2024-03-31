//Launch Server ==> req[URL - Method]
const http = require('http');
const fs = require('fs');
//#region Reading Files
var HomeHTML = "";
fs.readFile("../Client-Side/Pages/home.html", "utf-8", (err, data) => {
    if (err) {
        console.log("7asal Error")
    } else {
        HomeHTML = data;
    }
})
var ProfileHTML = fs.readFileSync("../Client-Side/Pages/profile.html", "utf-8");
var Style1CSS = fs.readFileSync("../Client-Side/Styles/style1.css", "utf-8");
var Script1JS = fs.readFileSync("../Client-Side/Scripts/script1.js", "utf-8");
var Image1Jpg = fs.readFileSync("../Client-Side/Images/2.jpg");
var FavIcon1ico = fs.readFileSync("../Client-Side/Icons/favicon.ico");
//#endregion

http.createServer((req, res) => {
    //#region GET
    if (req.method == "GET") {
        switch (req.url) {
            case "/":
            case "/home.html":
            case "/Pages/home.html":
            case "/Client-Side/Pages/home.html":
                res.setHeader("Content-Type", "text/html");
                // res.setHeader("Set-Cookie","userName='Aly'");
                res.write(HomeHTML)
                break;
            case "/style1.css":
            case "/Styles/style1.css":
            case "/Client-Side/Styles/style1.css":
                res.setHeader("Content-Type", "text/css");
                res.write(Style1CSS);
                break;
            case "/script1.js":
            case "/Scripts/script1.js":
            case "/Client-Side/Scripts/script1.js":
                res.setHeader("Content-Type", "text/javascript");
                res.write(Script1JS);
                break;
            case "/2.jpg":
            case "/Images/2.jpg":
            case "/Client-Side/Images/2.jpg":
                res.setHeader("Content-Type", "image/jpeg");
                res.write(Image1Jpg);
                break;
            case "/favicon.ico":
            case "/Icons/favicon.ico":
            case "/Client-Side/Icons/favicon.ico":
                res.setHeader("Content-Type", "image/vnd.microsoft.icon");
                res.write(FavIcon1ico);
                break;
            case "/data":
                const fileData = fs.readFileSync('db.json', 'utf8');
                res.write(fileData)
                break;
            default:
                if (req.url.includes("profile.html")) {
                    res.setHeader("Content-Type", "text/html");
                    res.write(ProfileHTML)
                }
                else
                    res.write("Invalid URL !!")
                break;
        }
        res.end()
    }
    //#endregion
    //#region POST
    else if (req.method == "POST") {
        let username = "";
        let Email = "";
        let Address = "";
        let mobile = "";

        req.on("data", (data) => {
            userData = data.toString(); // Assuming data is in the form of "name=Sama&age=22"
            username = userData.split("&")[0].split("=")[1];
            mobile = userData.split("&")[1].split("=")[1];
            Address = userData.split("&")[2].split("=")[1];
            Email = userData.split("&")[3].split("=")[1];
            console.log('asfasf');
            saveToDb(username, mobile, Address, Email);

        });//1)

        // res.end();
        // console.log("Ahmed Mansour")

        req.on("end", () => {
            res.setHeader("Content-Type", "text/html");
            let File = ProfileHTML.replace("{username}", username)
            File = File.replace("{Email}", Email)
            File = File.replace("{MobileNumber}", mobile)
            File = File.replace("{Address}", Address)
            File = File.replace("%", '@')
            res.write(File);
            res.end();
        })//2)

        req.on("error", () => { console.log("Error") })//1,2,3
        req.on("close", () => {
            console.log("Closed")
        })//3)
    }
    //#endregion
    //#region PUT
    else if (req.method == "PUT") {

    }
    //#endregion
    //#region PATCH
    else if (req.method == "PATCH") {

    }
    //#endregion
    //#region DELETE
    else if (req.method == "DELETE") {

    }
    //#endregion
    //#region Default
    else {
        res.end("Please Check ur Method [GET- POST - PATCH - PUT - DELETE]")
    }
    //#endregion
}).listen(7000, () => { console.log("http://localhost:7000") })



function saveToDb(username, mobile, Address, Email) {

    const fileData = fs.readFileSync('db.json', 'utf8');
    let existingData = [];
    if (fileData) {
        existingData = JSON.parse(fileData);
    }

    existingData.push({
        username,
        mobile,
        Address,
        Email
    });

    fs.writeFile('db.json', JSON.stringify(existingData), 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('New data has been appended to db.json');
    });

}