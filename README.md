# Crud Electron VueJS

L'application démonstration d'un crud fictif pour la société Up. **Ce projet est fictif !**

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run electron:serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Fixtures

Dans background.js, décommenté le bout code :
```
ipcMain.emit('fake_data', /* arg */)
```
Pensez à le recommenter une fois générée sous risque d'avoir beaucoup de data générée.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
