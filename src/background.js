'use strict'

import { app, protocol, BrowserWindow, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
import { generateEmployee, generateFakeDataModel, resetAllTable } from './fixtures/app_fixture'
import path from 'path'

const isDevelopment = process.env.NODE_ENV !== 'production'

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    icon: path.join(__dirname, 'logo.icns'),
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.Buffer = Buffer;
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }

  // On créer les différents handle
  const adherentController = require('./controllers/adherent')
  const employeController = require('./controllers/employee')

  // ipc adherent
  ipcMain.handle('fetchAdherents', adherentController.fetchAdherents)
  ipcMain.handle('fetchAdherentsWithLimit', adherentController.fetchAdherentsWithLimit)
  ipcMain.handle('insertAdherent', adherentController.insertAdherent)
  ipcMain.handle('updateAdherent', adherentController.updateAdherent)
  ipcMain.handle('deleteAdherent', adherentController.deleteAdherent)
  ipcMain.handle('getAdherent', adherentController.getAdherent)
  ipcMain.handle('searchAdherent', adherentController.searchAdherent)

  // ipc employee
  ipcMain.handle('fetchEmployes', employeController.fetchEmployes)
  ipcMain.handle('loginEmploye', employeController.loginEmploye)

  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}


// générate fake data only dev
if (isDevelopment && !process.env.IS_TEST) {
  ipcMain.on('fake_data', async (event, arg) => {
    try {
      await resetAllTable()
      await generateFakeDataModel()
      await generateEmployee()
    } catch (error) {
      console.error(error)
    }
  })

  // Génère des fausse donnée
  // ipcMain.emit('fake_data', /* arg */)
}