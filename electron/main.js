const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs').promises;

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 820,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  // Load the existing HTML in the parent folder
  const indexPath = path.join(__dirname, '..', 'Elaborador de Prompt MP Consultoria.html');
  win.loadFile(indexPath);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

ipcMain.handle('open-file', async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    title: 'Abrir exercício 7Perguntas',
    filters: [{ name: 'JSON', extensions: ['json'] }],
    properties: ['openFile']
  });
  if (canceled || !filePaths || !filePaths[0]) return null;
  try {
    const content = await fs.readFile(filePaths[0], 'utf8');
    return { content, path: filePaths[0] };
  } catch (err) {
    return { error: String(err) };
  }
});

ipcMain.handle('save-file', async (_event, { content, suggestedName }) => {
  try {
    const { canceled, filePath } = await dialog.showSaveDialog({
      title: 'Salvar exercício 7Perguntas',
      defaultPath: suggestedName,
      filters: [{ name: 'JSON', extensions: ['json'] }]
    });
    if (canceled || !filePath) return { canceled: true };
    await fs.writeFile(filePath, content, 'utf8');
    return { canceled: false, path: filePath };
  } catch (err) {
    return { error: String(err) };
  }
});

ipcMain.handle('confirm', async (_event, message) => {
  const res = await dialog.showMessageBox({
    message: message || '',
    buttons: ['Yes', 'No'],
    defaultId: 1
  });
  return res.response === 0;
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
