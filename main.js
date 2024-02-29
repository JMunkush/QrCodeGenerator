const {app, BrowserWindow} = require("electron");


const createWindow = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 800,
        resizable: true
    })

    win.setMenuBarVisibility(false);
    win.setTitle("QR Code")
    win.loadFile("index.html");

}

app.whenReady().then(() => createWindow());
app.on("window-all-closed", () => app.quit());