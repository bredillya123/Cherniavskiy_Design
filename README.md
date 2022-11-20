# Starter for SCSS
sass --watch scss/styles.scss:css/styles.min.css --style compressed

## Visual Studio Code
Add Extension: **Live Sass Compiler** <br/>
Add new setting: File -> Preferences -> Settings -> Live Sass Compiler <br/>
*"liveSassCompile.settings.formats": [
    {
        "format": "compressed",
        "extensionName": ".min.css",
        "savePath": "/css"
    }
],
"liveSassCompile.settings.autoprefix": [
    "> 1%",
    "last 2 versions"
]*
