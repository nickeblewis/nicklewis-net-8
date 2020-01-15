https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-nodejs

# Building a NodeJS Server on Azure

## Prerequisites 

- Visual Studio Code (VSC)
- NodeJS & NPM
- Azure App Service Extension

- [ ] add links for the above later...

## Connect to Azure from within VSC

- [ ] add screenshot later

Login to Azure account via the icon that appears on the lefthand side of VSC.

## Creating the application locally first

We shall use a quickstart method to get up and running

## Introducing the Express scaffold generator

Launch a terminal and navigate to the folder where you keep your code

```npx express-generator myExpressApp --view pug --git```

This provides the next steps for you and these should be:

```bash
cd myExpressApp
npm install
npm start
```

Then go to localhost:3000 in your browser and you should see this:

- [ ] add screenshot later

## Time to deploy it to Azure

First of all open the new app project in VSC

```code .```

Click on the Azure extension and then click on the blue "up" arrow
You will be given a choice of folders, select the one related to your current project.
Select create new web app
Select Node LTS
Provide a globally unique name for your app, mine was "nicks-test-nodejs-app" for e
The system will then go away and begin creating the new "app service plan" for you which will take a little while to complete
You are then prompted whether you want to update your workspace config to run build commands on the target server.... YES
YES to "always deploy the workspace...."
After a little while you will be notified of completed deployment and then BROWSE WEBSITE to see your new web app running

https://nicks-test-nodejs-app.azurewebsites.net/

## That's it, what next?

- [ ] what to research next?? How about adding a datasource?
  - [ ] Explore the Azure browser in VSC and what this provides you with
  - [ ] [Cosmos DB](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-cosmosdb)
  - [ ] [Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)
  - [ ] [Docker Tools](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
  - [ ] [Azure CLI Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azurecli)
  - [ ] [Azure Resource Manager Tools](https://marketplace.visualstudio.com/items?itemName=msazurermtools.azurerm-vscode-tools)
  - [ ] or install the above in one go [Node Pack for Azure](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack)

https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-nodejs-application


