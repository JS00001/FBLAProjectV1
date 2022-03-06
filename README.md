![FblaMockup-LIGHT](https://user-images.githubusercontent.com/49812749/156910603-3cd1ab94-938e-4ff6-8534-fa2f6eeef3e8.png)

![FblaMockup_DARK](https://user-images.githubusercontent.com/49812749/156910605-7f9a3aaf-7922-44a6-b887-3bc9ccb0446e.png)


# Athens Attractions

## Sources

**Images**

| Item | Website | 
| --- | --- |
| `Icons` | https://react-icons.github.io/react-icons/icons?name=ri | 
| `Empty State PNG's` | https://themeisle.com/illustrations |
| `Location Images` | https://pixabay.com | 

**Libraries**

| Libary | Purpose | 
| --- | --- |
| `NextJS` | Frontend framework used for rendering the frontend |
| `Nextron` | Fork of ElectronJS; Used for rendering the NextJS Frontend as an application (exe) |
| `TailwindCSS` | Used for styling the frontend |
| `React Icons` | Library containing all icons used | 
| `NextUI` | NextJS component library used for the UI | 
| `Redux` | Used for global state management (Stores the location data and selected filters |
| `React-Redux` | Used to update components when the redux state is updated | 
| `Node-Fetch` | Used to make requests to PDF api |
| `Electron-Store` | Used to store links to generated output reports |


## Setup

**Installation**
1. Download the latest release from https://github.com/JS00001/fbla-project-exe/releases
2. Run the executable from the release files.
3. Running the executable will install the program as `Athens Attractions`
4. Upon first install, the program will automatically run.
5. Use the program to find new attractions.


**Building From the Source Code**
1. Download [NodeJS](https://nodejs.org/en/download/) and install the runtime. 
2. Download the source code of the repository.
3. Move the files into a folder, and open a command prompt in the folder.
4. Run `npm install`
5. Once all dependencies are installed, run `npm run build`
6. A folder named `dist` will be created it, inside of it will be the compiled program, `Athens Attactions x.x.x install.exe`


## Docs

**File Structure**
| Folder | Purpose | Author |
| --- | --- | --- | 
| `resources` | Assets for the Nextron build process | Our Team |
| `renderer`| NextJS Frontend | Our Team |
| `main` | Nextron Application | [Nextron](https://github.com/saltyshiomix/nextron) (Unless Commented Otherwise) |


**Features**
- Select filters to sort locations by.
- Generate a cloud-stored PDF document containing all filtered locations.
- View all reports that you have generated, and clear them.
- Toggle the theme between light and dark.
