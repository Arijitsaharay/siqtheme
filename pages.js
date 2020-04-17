/*
 |--------------------------------------------------------------------------
 | Pages Source
 |--------------------------------------------------------------------------
 | title:       The page title
 | template:    Source to ejs file
 | filename:    Filename in public
 | topmenu:     Top menu category
 | submenu:     Sub-menu category
 */
module.exports = [
    {
        title: "siQtheme by 3M Square",
        template: "src/index.ejs",
        filename: "index.html",
        topmenu: "db",
        submenu: "dashboard1"
    }, {
        title: "siQtheme - UI Buttons",
        template: "src/ui_buttons.ejs",
        filename: "ui_buttons.html",
        topmenu: "ui",
        submenu: "uibutton",
    }, {
        title: "siQtheme - UI Typography",
        template: "src/ui_typography.ejs",
        filename: "ui_typography.html",
        topmenu: "ui",
        submenu: "uitypo"
    }
];