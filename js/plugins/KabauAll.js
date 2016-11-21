//=============================================================================
// AltMenuScreen.js
//=============================================================================

/*:
 * @plugindesc かばうステート時に、味方のHPが十分でもかばうようにします
 */

(function() {	


Game_BattlerBase.prototype.isDying2 = function() {
    return this.isAlive();
};

BattleManager.checkSubstitute = function(target) {
    return target.isDying2() && !this._action.isCertainHit();
};

BattleManager.applySubstitute = function(target) {
    if (this.checkSubstitute(target)) {
        var substitute = target.friendsUnit().substituteBattler();
        if (substitute && target !== substitute) {
            this._logWindow.displaySubstitute(substitute, target);
            return substitute;
        }
    }
    return target;
};


})();


