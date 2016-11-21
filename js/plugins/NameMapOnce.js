//=============================================================================
// NamMapOnce.js
//=============================================================================

/*:
 * @plugindesc Show map's display name only when first entering.
 * @author pareidolon
 * @help The first time a map is loaded it will show its display name.
 * Every time after it will not show the display name until you either
 * change maps or return to the title screen.
 * 
 * All new content is free to use under CC BY-SA 4.0
 * Please credit the contributor pareidolon at rpgmaker.net
 */

(function() {

var NameMapOnceID = 0;


// Window Map Name

var _Window_MapName_open = Window_MapName.prototype.open;
Window_MapName.prototype.open = function() {
    if (NameMapOnceID != $dataMap.displayName) {
        NameMapOnceID = $dataMap.displayName;
       _Window_MapName_open.call(this);
    }
};

// Re-initialize NameMapOnceID at title
var _Scene_Title_start = Scene_Title.prototype.start;
Scene_Title.prototype.start = function() {
    NameMapOnceID = 0;
    _Scene_Title_start.call(this);
};

})();
