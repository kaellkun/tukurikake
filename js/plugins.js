// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"BattleRecord","status":true,"description":"戦績プラグイン","parameters":{}},
{"name":"TkoolMV_PluginCommandBook","status":true,"description":"プラグインコマンド集","parameters":{"制御文字の拡張":"はい"}},
{"name":"ChangeGameoverCondition","status":true,"description":"ゲームオーバー条件変更プラグイン","parameters":{}},
{"name":"HIME_PlaceholderStates","status":true,"description":"v1.0 - allows you to create a state that may resolve to a different\nstate when it is added or removed.","parameters":{}},
{"name":"MessageWindowPopup","status":true,"description":"フキダシウィンドウプラグイン","parameters":{"フォントサイズ":"21","余白":"13","自動設定":"ON","フェイス倍率":"50","ウィンドウ連携":"ON","行間":"13","ウィンドウ透過":"OFF"}},
{"name":"KGN_HitMinusEva","status":true,"description":"最終的な命中率を「命中率 - 回避率」にします。","parameters":{}},
{"name":"TinyGetInfoWnd","status":true,"description":"マップ上でアイテムの入手/消失を小さなウィンドウで表示します。","parameters":{"Event Command Switch":"5","Y position type":"1","textGainItem":"%1を入手した！","textLoseItem":"　","SE filename":"Chime2","SE volume":"90","SE pitch":"100"}},
{"name":"CraftingSystem","status":true,"description":"Craft items, weapons and armors based on categorized recipe books.","parameters":{"Categories":"工作, ファイア調理, 水汲み, 浄化","Price Text":"Price","Equip Text":"装備品","Type Text":"Type","Ingredients Text":"必要な物とその数","Currency Text":"Currency","Item Crafted Text":"▼持ち物がひとつ増えました！"}},
{"name":"KabauAll","status":true,"description":"かばうステート時に、味方のHPが十分でもかばうようにします","parameters":{}},
{"name":"UCHU_MobileOperation","status":true,"description":"スマホ操作用プラグイン。横持ち/縦持ちに対応した仮想ボタン、\r\nタッチ操作の方法を追加拡張し、スマホプレイを快適にします。","parameters":{"---PC Option---":"","PC BtnDisplay":"false","PC TouchExtend":"true","---File Path---":"","DPad Image":"./img/system/DirPad.png","ActionBtn Image":"./img/system/ActionButton.png","CancelBtn Image":"./img/system/CancelButton.png","---Button Customize---":"","Button Opacity":"0.7","Vertical BtnZoom":"1.7","Tablet BtnZoom":"0.8","TabVertical BtnZoom":"1.1","HideButton OnMessage":"true","DPad Visible":"true","DPad Size":"200","DPad Margin":"10; 10","DPad Orientation":"left; bottom","DPad OpelationRange":"1.3","DPad DiagonalRange":"0.3","ActionBtn Visible":"true","ActionBtn Size":"100","ActionBtn Margin":"10; 90","ActionBtn Orientation":"right; bottom","CancelBtn Visible":"true","CancelBtn Size":"100","CancelBtn Margin":"110; 10","CancelBtn Orientation":"right; bottom","---TouchInput Extend---":"","Flick PageUp-PageDown":"true","HoldCanvas ActionBtn":"true","OutCanvas CancelBtn":"false","OutCanvas ActionBtn":"false","--!need AnalogMove.js!--":"","Analog Move":"false","Analog Sensitivity":"1.8"}},
{"name":"AttackMukou","status":true,"description":"通常攻撃コマンドを利用しないようにします","parameters":{}},
{"name":"TMEventItemEx","status":true,"description":"アイテム選択の処理にヘルプウィンドウを追加し、\n個数表示の有無と表示行数をアイテムタイプごとに設定できます。","parameters":{"helpWindowEnabledItem":"1","helpWindowEnabledKey":"1","helpWindowEnabledA":"1","helpWindowEnabledB":"1","showItemNumberItem":"1","showItemNumberKey":"0","showItemNumberA":"1","showItemNumberB":"1","numVisibleRowsItem":"4","numVisibleRowsKey":"4","numVisibleRowsA":"4","numVisibleRowsB":"4"}},
{"name":"TargetWithoutUser","status":true,"description":"スキルやアイテムの対象から使用者を除外するためのプラグイン\r\nスキルやアイテムのnoteに「<target_without_user>」と書き込んで下さい","parameters":{}},
{"name":"TMStatusMenuEx","status":true,"description":"ステータスシーンに表示するパラメータを追加します。","parameters":{"paramNameX":"6","paramX":"112","paramNameWidth":"96","paramWidth":"60","xparamNameX":"204","xparamX":"330","xparamNameWidth":"120","xparamWidth":"60","xparamNameCritical":"会心","xparamNameCriticalEva":"会心回避","xparamNameMagicEva":"魔法回避","xparamNameMagicRef":"魔法反射","xparamNameCounter":"反撃","xparamFixed":"0","elementRegistIconX":"6","elementRegistX":"76","elementRegistWidth":"96","elementRegistIds":"2 3 4 5 6 7 8 9","elementRegistIconIds":"64 65 66 67 68 69 70 71","stateRegistIconX":"204","stateRegistX":"264","stateRegistWidth":"96","stateRegistIds":"4 5 6 7 8 9 10","registFixed":"1","paramBackGround":"1","paramBackGroundOpacity":"160","paramNameFontFace":"GameFont","paramValueFontFace":"GameFont"}},
{"name":"YEP_RegionEvents","status":true,"description":"v1.01a Make it so that whenever players step on certain\nRegion ID's, the game will play certain common events.","parameters":{"Region 1":"0","Region 2":"0","Region 3":"0","Region 4":"0","Region 5":"0","Region 6":"0","Region 7":"0","Region 8":"0","Region 9":"0","Region 10":"0","Region 11":"0","Region 12":"0","Region 13":"0","Region 14":"0","Region 15":"0","Region 16":"0","Region 17":"0","Region 18":"0","Region 19":"0","Region 20":"0","Region 21":"0","Region 22":"0","Region 23":"0","Region 24":"0","Region 25":"0","Region 26":"0","Region 27":"0","Region 28":"0","Region 29":"0","Region 30":"0","Region 31":"0","Region 32":"0","Region 33":"0","Region 34":"0","Region 35":"0","Region 36":"0","Region 37":"0","Region 38":"0","Region 39":"0","Region 40":"0","Region 41":"0","Region 42":"0","Region 43":"0","Region 44":"0","Region 45":"0","Region 46":"0","Region 47":"0","Region 48":"0","Region 49":"0","Region 50":"0","Region 51":"0","Region 52":"0","Region 53":"0","Region 54":"0","Region 55":"0","Region 56":"0","Region 57":"0","Region 58":"0","Region 59":"0","Region 60":"0","Region 61":"0","Region 62":"0","Region 63":"0","Region 64":"0","Region 65":"0","Region 66":"0","Region 67":"0","Region 68":"0","Region 69":"0","Region 70":"0","Region 71":"0","Region 72":"0","Region 73":"0","Region 74":"0","Region 75":"0","Region 76":"0","Region 77":"0","Region 78":"0","Region 79":"0","Region 80":"0","Region 81":"0","Region 82":"0","Region 83":"0","Region 84":"0","Region 85":"0","Region 86":"0","Region 87":"0","Region 88":"0","Region 89":"0","Region 90":"0","Region 91":"0","Region 92":"0","Region 93":"0","Region 94":"0","Region 95":"0","Region 96":"0","Region 97":"0","Region 98":"0","Region 99":"0","Region 100":"0","Region 101":"0","Region 102":"0","Region 103":"0","Region 104":"0","Region 105":"0","Region 106":"0","Region 107":"0","Region 108":"0","Region 109":"0","Region 110":"0","Region 111":"0","Region 112":"0","Region 113":"0","Region 114":"0","Region 115":"0","Region 116":"0","Region 117":"0","Region 118":"0","Region 119":"0","Region 120":"0","Region 121":"0","Region 122":"0","Region 123":"0","Region 124":"0","Region 125":"0","Region 126":"0","Region 127":"0","Region 128":"0","Region 129":"0","Region 130":"0","Region 131":"0","Region 132":"0","Region 133":"0","Region 134":"0","Region 135":"0","Region 136":"0","Region 137":"0","Region 138":"0","Region 139":"0","Region 140":"0","Region 141":"0","Region 142":"0","Region 143":"0","Region 144":"0","Region 145":"0","Region 146":"0","Region 147":"0","Region 148":"0","Region 149":"0","Region 150":"0","Region 151":"0","Region 152":"0","Region 153":"0","Region 154":"0","Region 155":"0","Region 156":"0","Region 157":"0","Region 158":"0","Region 159":"0","Region 160":"0","Region 161":"0","Region 162":"0","Region 163":"0","Region 164":"0","Region 165":"0","Region 166":"0","Region 167":"0","Region 168":"0","Region 169":"0","Region 170":"0","Region 171":"0","Region 172":"0","Region 173":"0","Region 174":"0","Region 175":"0","Region 176":"0","Region 177":"0","Region 178":"0","Region 179":"0","Region 180":"0","Region 181":"0","Region 182":"0","Region 183":"0","Region 184":"0","Region 185":"0","Region 186":"0","Region 187":"0","Region 188":"0","Region 189":"0","Region 190":"0","Region 191":"0","Region 192":"0","Region 193":"0","Region 194":"0","Region 195":"0","Region 196":"0","Region 197":"0","Region 198":"0","Region 199":"0","Region 200":"0","Region 201":"0","Region 202":"0","Region 203":"0","Region 204":"0","Region 205":"0","Region 206":"0","Region 207":"0","Region 208":"0","Region 209":"0","Region 210":"0","Region 211":"0","Region 212":"0","Region 213":"0","Region 214":"0","Region 215":"0","Region 216":"0","Region 217":"0","Region 218":"0","Region 219":"0","Region 220":"0","Region 221":"0","Region 222":"0","Region 223":"0","Region 224":"0","Region 225":"0","Region 226":"0","Region 227":"0","Region 228":"0","Region 229":"0","Region 230":"0","Region 231":"0","Region 232":"0","Region 233":"0","Region 234":"0","Region 235":"0","Region 236":"0","Region 237":"0","Region 238":"0","Region 239":"0","Region 240":"0","Region 241":"0","Region 242":"0","Region 243":"0","Region 244":"0","Region 245":"0","Region 246":"0","Region 247":"0","Region 248":"0","Region 249":"0","Region 250":"0","Region 251":"0","Region 252":"0","Region 253":"0","Region 254":"0","Region 255":"0"}},
{"name":"SSEP_BattleSpeedUp_v2","status":true,"description":"[ver2.01] 戦闘速度を上げるプラグインです。YanflyEngine対応。\n利用時は、必ずYanflyEngineの後に読み込んでください。","parameters":{"---General Setting---":"","BattleSpeed (Default)":"1","BattleSpeed (Boost)":"8","OkayKeyBoost":"true","VisibleSwitch":"true","BoostToggleSwitch":"shift","---Detail Setting---":"","StateIcon":"40","StateOverlay":"8","Weapon":"12","Motion":"12","Balloon":"12","Damage":"90","DamageMin":"60","--BattleLog Setting--":"","LogAnime BaseDelay":"8","LogAnime NextDelay":"12","LogWaitCount Default":"1","LogWaitCount Boost":"10","---Switch Setting---":"","SE BoostON":"Decision2","SE BoostOFF":"Decision2","SE Volume":"50","SwitchImage":"Balloon","SwitchX":"10","SwitchY":"10","SwitchWidth":"48","SwitchHeight":"48","SwitchTop":"2","SwitchLeft":"1","SwitchAnimePattern":"8","SwitchAnimeSpeed":"5","---YEP BattleCore---":"","YEP Battle MotionWait":"5","---YEP ATB---":"","YEP ATB BoostSwitch":"true","---ATB Speed---":"","ATB Speed(Default)":"1","ATB Speed(Boost)":"4","---YEP Victory AM---":"","YEP Victory Wait":"true"}},
{"name":"MrTS_BattleCharacterLimit","status":false,"description":"Changes character placement for battles.","parameters":{"Max Characters":"16","Characters Per Row":"4","Offset":"-80","Vertical Offset":"220","Lower Index":"24","Forward Offset":"100","Row Spacing":"60","Vertical Chara Spacing":"54"}},
{"name":"AmmunitionSystem","status":true,"description":"Allows skills to need ammunition.\r\n<Unco Ammo>","parameters":{"Show Ammo Left When Actor Command":"true","Show Ammo Left In Help Window":"true","Help Window Ammo Text":"Ammunition left","Show Ammo Left In Skill Window":"false","No Ammo Icon":"16","Gold Ammo Icon":"313","Ammo Font Size":"20","Ammo Font Color":"6","Show Ammo Left In Actor Command Window":"false","Compact Cost Display":"false"}},
{"name":"ChangeWeaponOnBattle","status":true,"description":"make battle command that changes weapon.","parameters":{"commandName":"武器変更"}},
{"name":"Torigoya_SameEquipType","status":true,"description":"If equip slot name is the same, it can have an item of the same type","parameters":{}},
{"name":"TMSkillCostEx","status":true,"description":"ＭＰやＴＰの代わりにＨＰやアイテムを消費するスキルを\n設定できるようになります。","parameters":{"hpVNumberId":"0","mpVNumberId":"0","ignoreEnemyItemCost":"1"}},
{"name":"StateChangeIfRemove","status":true,"description":"ステート解除時の変化プラグイン","parameters":{}},
{"name":"MrTS_SimpleSkillLeveling","status":true,"description":"Skills change to stronger version of themselves after X uses.","parameters":{}},
{"name":"Torigoya_QuickSkill","status":true,"description":"選択するとターンを消費せずに即発動するスキルを追加します。","parameters":{}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.03 (Requires YEP_BattleEngineCore.js) Reveal HP Gauges\r\nwhen a battler is selected or takes damage in battle.","parameters":{"---General---":"","Display Actor":"true","Defeat First":"false","Always Visible":"false","---Appearance---":"","Minimum Gauge Width":"144","Gauge Height":"18","Back Color":"19","HP Color 1":"20","HP Color 2":"21","Gauge Duration":"30","Gauge Position":"false","Y Buffer":"-16","Use Thick Gauges":"true","---Text Display---":"","Show HP":"false","Show Value":"false","Show Max":"false"}},
{"name":"YEP_ExtraEnemyDrops","status":true,"description":"v1.06 Allows your enemies to drop more than just three\nitems as per the editor's limit.","parameters":{}},
{"name":"RX_T_ChangeEncounterCount","status":true,"description":"エンカウント歩数（敵の出現率）をイベントによって自在に変えることができるようになります。","parameters":{}},
{"name":"TMMapHpGauge","status":true,"description":"マップシーンに顔グラフィックとＨＰゲージを表示します。\n必要に応じてＭＰや変数などをゲージで表示することもできます。","parameters":{"gaugeWindowX":"0","gaugeWindowY":"0","gaugeWindowWidth":"288","gaugeWindowHeight":"64","gaugeAType":"HP","gaugeAX":"12","gaugeAY":"12","gaugeAWidth":"144","gaugeAHeight":"36","gaugeAFontSize":"28","gaugeAParam":"0","gaugeAMax":"0","gaugeAName":"AP","gaugeAColor":"#ff60c0 #ffa0e0","gaugeBType":"","gaugeBX":"12","gaugeBY":"12","gaugeBWidth":"144","gaugeBHeight":"36","gaugeBFontSize":"28","gaugeBParam":"0","gaugeBMax":"0","gaugeBName":"BP","gaugeBColor":"#ff60c0 #ffa0e0","gaugeCType":"","gaugeCX":"12","gaugeCY":"12","gaugeCWidth":"144","gaugeCHeight":"36","gaugeCFontSize":"28","gaugeCParam":"0","gaugeCMax":"0","gaugeCName":"CP","gaugeCColor":"#ff60c0 #ffa0e0","faceOffsetX":"-4","faceOffsetY":"-4","stateIconMax":"4","stateIconX":"156","stateIconY":"24","goldWidth":"0","goldX":"12","goldY":"12","shakeTime":"0","startVisible":"1","windowOpacity":"255","collideOpacity":"128","messageBusyHide":"1","eventBusyHide":"1"}},
{"name":"TMSkillCostEx","status":true,"description":"ＭＰやＴＰの代わりにＨＰやアイテムを消費するスキルを\n設定できるようになります。","parameters":{"hpVNumberId":"0","mpVNumberId":"0","ignoreEnemyItemCost":"1"}},
{"name":"TMCostShow","status":true,"description":"ＭＰ消費とＴＰ消費が両方設定されたスキルのコストを\n無理やり両方表示します。","parameters":{"mpCostHeader":"MP","tpCostHeader":"TP","conjunction":"/","costWidthText":"000","maxCostNum":"2","---TMSkillCostEx---":"以下はTMSkillCostEx併用時に利用","hpCostHeader":"HP","expCostHeader":"EXP","expCostFooter":"","goldCostHeader":"","goldCostFooter":"G","hpCostColor":"21","expCostColor":"16","goldCostColor":"0"}},
{"name":"CounterExtend","status":true,"description":"反撃拡張プラグイン","parameters":{"反撃コスト消費":"OFF","コスト不足で失敗":"OFF"}},
{"name":"ConditionallyCore","status":true,"description":"ver1.06/条件付き○○のプラグインを使用するのに、必要となる条件をまとめたベースプラグインです。","parameters":{}},
{"name":"ConditionallyDrop","status":true,"description":"ver1.03/条件を満たすとドロップするアイテムを設定できるようになります。","parameters":{"Display Reward Item Text":"\\c[6]Bonus!","Display Reward Gold Text":"\\c[6]Bonus!","Display Reward Exp Text":"\\c[6]Bonus!"}},
{"name":"Kath_GameOver","status":true,"description":"Change what happens when the party dies or Game Over is called.","parameters":{"Party Death Common Event ID":"","Show Game Over Scene":"true","Reload Last Save":"false","After Game Over Common Event ID":"14"}},
{"name":"StackBattleLog","status":false,"description":"ver1.04/戦闘ログを蓄積型に変更し、戦闘ログを表示するパーティコマンドを追加します。","parameters":{"Stack Log UseLog":"true","Stack Log UseStack":"true","Stack Log Text":"Log","Stack Log Start":"------Start Battle------","Stack Log TurnEnd":"------ %d Turn End------","Stack Log MaxLines":"6","Stack Log FontSize":"24","Stack Log Size":"100"}},
{"name":"PartyCommandSkip","status":true,"description":"戦闘の戦う・逃げるを飛ばして戦闘へ","parameters":{"SwitchNumber":"1"}}
];
