const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  openFile: async () => ipcRenderer.invoke('open-file'),
  saveFile: async (content, suggestedName) => ipcRenderer.invoke('save-file', { content, suggestedName }),
  confirm: async (message) => ipcRenderer.invoke('confirm', message)
});
