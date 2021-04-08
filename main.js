const {app, BrowserWindow, ipcMain, Tray} = require('electron')
const path = require('path')
const assetsDirectory = path.join(__dirname, 'assets')
let tray = undefined
let window = undefined

function createWindow() {
	// Create the browser window.
	window = new BrowserWindow({ width: 1280, height: 720,
      fullscreenable: false,
      resizable: false,
      show:true,
      webPreferences: {
        nodeIntegration: true,
        'overlay-fullscreen-video': true,
        backgroundThrottling: false,
        webSecurity: false
      }
  });

	// and load the html of the app.
	window.loadFile("./camera.html");

	hidden = new BrowserWindow({ show:false });

	hidden.loadFile("./camera.html");

}


app.on('ready', () => {
  createWindow()
})


app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
});
