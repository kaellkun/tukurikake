//=============================================================================
// NotRandamEncounter.js
//=============================================================================

/*:
 * @plugindesc エンカウントは完全固定歩数とします。
 */

(function() {	

Game_Player.prototype.makeEncounterCount = function() {
    var n = $gameMap.encounterStep();
    this._encounterCount =  + 1;
};

})();


