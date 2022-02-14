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

//   const splashScreen = createWindow('splash', {
//       width: 340,
//       height: 500,
//       frame: false
//   })

//   splashScreen.setAlwaysOnTop(true);
//   splashScreen.loadURL(`file://${__dirname}/static/loading.html`);

  const mainWindow = createWindow('main', {
    width: 1344,
    height: 756,
    show: false
  });

  mainWindow.setMenu(null);
  mainWindow.setFullScreen(true)

  mainWindow.once('ready-to-show', () => {
    // splashScreen.destroy();
    mainWindow.show();
  })

  ipcMain.on('minimize', () => {
    mainWindow.minimize();
  })

  ipcMain.on('close', () => {
    mainWindow.close();
  })

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
