import { app, ipcMain, screen } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  // Start code written by our team
  const mainWindow = createWindow('main', {
    width: 1344,
    height: 756,
    show: false
  });

  mainWindow.setMenu(null);
  mainWindow.setFullScreen(true)

  // Once the NextJS app has loaded, render the application
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  })

  // When the frontend sends cue to minimize, minimize window
  ipcMain.on('minimize', () => {
    mainWindow.minimize();
  })

  // When the frontend sends cue to close, close window
  ipcMain.on('close', () => {
    mainWindow.close();
  })

  // End code written by our team
  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});
