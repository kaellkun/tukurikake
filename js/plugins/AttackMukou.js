//=============================================================================
// AttackMukou.js
//=============================================================================

/*:
 * @plugindesc 通常攻撃・防御コマンドを利用しないようにします
 */
 
 
(function() {
	
	
Window_ActorCommand.prototype.makeCommandList = function() {
    if (this._actor) {
//        this.addAttackCommand();
        this.addSkillCommands();
//        this.addGuardCommand();
        this.addItemCommand();
    }
};
	
})();
