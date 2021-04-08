const { app, BrowserWindow } = require("electron");

function createWindow() {
	console.log("hello");
	// Create the browser window.
	const win = new BrowserWindow({ width: 1280, height: 720});

	// and load the html of the app.
	win.loadFile("./camera.html");
}

app.on("ready", createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
});
