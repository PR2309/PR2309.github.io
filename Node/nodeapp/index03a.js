// # Nodemon

/* Use:
// nodemon is a utility that monitors your Node.js app and automatically restarts the server whenever it detects file changes in the directory.
// Without it, every time when we change a file, we have to manually
*/

/* Installation:
//  Install Globally (recommended for CLI usage)
    command:
        npm install -g nodemon
    Install as a Dev Dependency in your project
    command:
        npm install --save-dev nodemon
    This way, it’s listed in your package.json under devDependencies.
*/

/* Using:
    Run a file:
    command:
        nodemon index.js
2. Run a file with custom extension:
    command:
        nodemon app.mjs
3. Set a watch directory or extension:
    command:
        nodemon --ext js,json --watch src
*/