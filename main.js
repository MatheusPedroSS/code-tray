const path = require('path')
const { app, Menu, Tray} = require('electron')

app.on('ready', () =>{

    const iconPath = path.join(__dirname, 'assets', 'iconTemplate.png')
    
    const tray = new Tray(iconPath);

    const contextMenu = Menu.buildFromTemplate([
        {label: 'Te amo duda!! :)', type: 'radio', checked: true}
    ]);
    
    tray.setContextMenu(contextMenu);  
});

