//=============================================================================
// AchivementBook.js
//=============================================================================

/*:
 * @plugindesc Displays detailed statuses of items.
 * @author Yoji Ojima
 *
 * @param Unknown Data
 * @desc The index name for an unknown item.
 * @default ??????
 *
 * @param Price Text
 * @desc The text for "Price".
 * @default Price
 *
 * @param Equip Text
 * @desc The text for "Equip".
 * @default Equip
 *
 * @param Type Text
 * @desc The text for "Type".
 * @default Type
 *
 * @help
 *
 * Plugin Command:
 *   AchivementBook open            # Open the item book screen
 *   AchivementBook add weapon 3    # Add weapon #3 to the item book
 *   AchivementBook add armor 4     # Add armor #4 to the item book
 *   AchivementBook remove armor 5  # Remove armor #5 from the item book
 *   AchivementBook remove item 6   # Remove item #6 from the item book
 *   AchivementBook complete        # Complete the item book
 *   AchivementBook clear           # Clear the item book
 *
 * Item (Weapon, Armor) Note:
 *   <book:no>                # This item does not appear in the item book
 */

/*:ja
 * @plugindesc アイテム図鑑です。アイテムの詳細なステータスを表示します。
 * @author Yoji Ojima
 *
 * @param Unknown Data
 * @desc 未確認のアイテムの索引名です。
 * @default ？？？？？？
 *
 * @param Price Text
 * @desc 「価格」の文字列です。
 * @default 価格
 *
 * @param Equip Text
 * @desc 「装備」の文字列です。
 * @default 装備
 *
 * @param Type Text
 * @desc 「タイプ」の文字列です。
 * @default タイプ
 *
 * @help
 *
 * プラグインコマンド:
 *   AchivementBook open            # 図鑑画面を開く
 *   AchivementBook add weapon 3    # 武器３番を図鑑に追加
 *   AchivementBook add armor 4     # 防具４番を図鑑に追加
 *   AchivementBook remove armor 5  # 防具５番を図鑑から削除
 *   AchivementBook remove item 6   # アイテム６番を図鑑から削除
 *   AchivementBook complete        # 図鑑を完成させる
 *   AchivementBook clear           # 図鑑をクリアする
 *
 * アイテム（武器、防具）のメモ:
 *   <book:no>                # 図鑑に載せない場合
 */

(function() {

    var parameters = PluginManager.parameters('AchivementBook');
    var unknownData = String(parameters['Unknown Data'] || '??????');
//    var priceText = String(parameters['Price Text'] || 'Price');
    var equipText = String(parameters['Equip Text'] || 'Equip');
    var typeText = String(parameters['Type Text'] || 'Type');

    var _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'AchivementBook') {
            switch (args[0]) {
            case 'open':
                SceneManager.push(Scene_AchivementBook);
                break;
            case 'add':
                $gameSystem.addToAchivementBook(args[1], Number(args[2]));
                break;
            case 'remove':
                $gameSystem.removeFromAchivementBook(args[1], Number(args[2]));
                break;
            case 'complete':
                $gameSystem.completeAchivementBook();
                break;
            case 'clear':
                $gameSystem.clearAchivementBook();
                break;
            }
        }
    };

    Game_System.prototype.addToAchivementBook = function(type, dataId) {
        if (!this._AchivementBookFlags) {
            this.clearAchivementBook();
        }
        var typeIndex = this.AchivementBookTypeToIndex(type);
        if (typeIndex >= 0) {
            this._AchivementBookFlags[typeIndex][dataId] = true;
        }
    };

    Game_System.prototype.removeFromAchivementBook = function(type, dataId) {
        if (this._AchivementBookFlags) {
            var typeIndex = this.AchivementBookTypeToIndex(type);
            if (typeIndex >= 0) {
                this._AchivementBookFlags[typeIndex][dataId] = false;
            }
        }
    };

    Game_System.prototype.AchivementBookTypeToIndex = function(type) {
        switch (type) {
        case 'item':
            return 0;
        case 'weapon':
            return 1;
        case 'armor':
            return 2;
        default:
            return -1;
        }
    };

    Game_System.prototype.completeAchivementBook = function() {
        var i;
        this.clearAchivementBook();
        for (i = 1; i < $dataItems.length; i++) {
            this._AchivementBookFlags[0][i] = true;
        }
        for (i = 1; i < $dataWeapons.length; i++) {
            this._AchivementBookFlags[1][i] = true;
        }
        for (i = 1; i < $dataArmors.length; i++) {
            this._AchivementBookFlags[2][i] = true;
        }
    };

    Game_System.prototype.clearAchivementBook = function() {
        this._AchivementBookFlags = [[], [], []];
    };

    Game_System.prototype.isInAchivementBook = function(item) {
        if (this._AchivementBookFlags && item) {
            var typeIndex = -1;
            if (DataManager.isItem(item)) {
                typeIndex = 0;
            } else if (DataManager.isWeapon(item)) {
                typeIndex = 1;
            } else if (DataManager.isArmor(item)) {
                typeIndex = 2;
            }
            if (typeIndex >= 0) {
                return !!this._AchivementBookFlags[typeIndex][item.id];
            } else {
                return false;
            }
        } else {
            return false;
        }
    };

    var _Game_Party_gainItem = Game_Party.prototype.gainItem;
    Game_Party.prototype.gainItem = function(item, amount, includeEquip) {
        _Game_Party_gainItem.call(this, item, amount, includeEquip);
        if (item && amount > 0) {
            var type;
            if (DataManager.isItem(item)) {
                type = 'item';
            } else if (DataManager.isWeapon(item)) {
                type = 'weapon';
            } else if (DataManager.isArmor(item)) {
                type = 'armor';
            }
            $gameSystem.addToAchivementBook(type, item.id);
        }
    };

    function Scene_AchivementBook() {
        this.initialize.apply(this, arguments);
    }

    Scene_AchivementBook.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_AchivementBook.prototype.constructor = Scene_AchivementBook;

    Scene_AchivementBook.prototype.initialize = function() {
        Scene_MenuBase.prototype.initialize.call(this);
    };

    Scene_AchivementBook.prototype.create = function() {
        Scene_MenuBase.prototype.create.call(this);
        this._indexWindow = new Window_AchivementBookIndex(0, 0);
        this._indexWindow.setHandler('cancel', this.popScene.bind(this));
        var wy = this._indexWindow.height;
        var ww = Graphics.boxWidth;
        var wh = Graphics.boxHeight - wy;
        this._statusWindow = new Window_AchivementBookStatus(0, wy, ww, wh);
        this.addWindow(this._indexWindow);
        this.addWindow(this._statusWindow);
        this._indexWindow.setStatusWindow(this._statusWindow);
    };

    function Window_AchivementBookIndex() {
        this.initialize.apply(this, arguments);
    }

    Window_AchivementBookIndex.prototype = Object.create(Window_Selectable.prototype);
    Window_AchivementBookIndex.prototype.constructor = Window_AchivementBookIndex;

    Window_AchivementBookIndex.lastTopRow = 0;
    Window_AchivementBookIndex.lastIndex  = 0;

    Window_AchivementBookIndex.prototype.initialize = function(x, y) {
        var width = Graphics.boxWidth;
        var height = this.fittingHeight(6);
        Window_Selectable.prototype.initialize.call(this, x, y, width, height);
        this.refresh();
        this.setTopRow(Window_AchivementBookIndex.lastTopRow);
        this.select(Window_AchivementBookIndex.lastIndex);
        this.activate();
    };

    Window_AchivementBookIndex.prototype.maxCols = function() {
        return 3;
    };

    Window_AchivementBookIndex.prototype.maxItems = function() {
        return this._list ? this._list.length : 0;
    };

    Window_AchivementBookIndex.prototype.setStatusWindow = function(statusWindow) {
        this._statusWindow = statusWindow;
        this.updateStatus();
    };

    Window_AchivementBookIndex.prototype.update = function() {
        Window_Selectable.prototype.update.call(this);
        this.updateStatus();
    };

    Window_AchivementBookIndex.prototype.updateStatus = function() {
        if (this._statusWindow) {
            var item = this._list[this.index()];
            this._statusWindow.setItem(item);
        }
    };

    Window_AchivementBookIndex.prototype.refresh = function() {
        var i, item;
        this._list = [];
        for (i = 1; i < $dataItems.length; i++) {
            item = $dataItems[i];
            if (item.name && item.itypeId === 3 && item.meta.acbook !== 'no') {
                this._list.push(item);
            }
        }
		/*
        for (i = 1; i < $dataWeapons.length; i++) {
            item = $dataWeapons[i];
            if (item.name && item.meta.acbook !== 'no') {
                this._list.push(item);
            }
        }
        for (i = 1; i < $dataArmors.length; i++) {
            item = $dataArmors[i];
            if (item.name && item.meta.acbook !== 'no') {
                this._list.push(item);
            }
        }
		*/
        this.createContents();
        this.drawAllItems();
    };

    Window_AchivementBookIndex.prototype.drawItem = function(index) {
        var item = this._list[index];
        var rect = this.itemRect(index);
        var width = rect.width - this.textPadding();
        if ($gameSystem.isInAchivementBook(item)) {
            this.drawItemName(item, rect.x, rect.y, width);
        } else {
            var iw = Window_Base._iconWidth + 4;
            this.drawText(unknownData, rect.x + iw, rect.y, width - iw);
        }
    };

    Window_AchivementBookIndex.prototype.processCancel = function() {
        Window_Selectable.prototype.processCancel.call(this);
        Window_AchivementBookIndex.lastTopRow = this.topRow();
        Window_AchivementBookIndex.lastIndex = this.index();
    };

    function Window_AchivementBookStatus() {
        this.initialize.apply(this, arguments);
    }

    Window_AchivementBookStatus.prototype = Object.create(Window_Base.prototype);
    Window_AchivementBookStatus.prototype.constructor = Window_AchivementBookStatus;

    Window_AchivementBookStatus.prototype.initialize = function(x, y, width, height) {
        Window_Base.prototype.initialize.call(this, x, y, width, height);
    };

    Window_AchivementBookStatus.prototype.setItem = function(item) {
        if (this._item !== item) {
            this._item = item;
            this.refresh();
        }
    };

    Window_AchivementBookStatus.prototype.refresh = function() {
        var item = this._item;
        var x = 0;
        var y = 0;
        var lineHeight = this.lineHeight();

        this.contents.clear();

        if (!item || !$gameSystem.isInAchivementBook(item)) {
            return;
        }

        this.drawItemName(item, x, y);

        x = this.textPadding();
        y = lineHeight + this.textPadding();
/*
        var price = item.price > 0 ? item.price : '-';
        this.changeTextColor(this.systemColor());
        this.drawText(priceText, x, y, 120);
        this.resetTextColor();
        this.drawText(price, x + 120, y, 120, 'right');
        y += lineHeight;
*/
        if (DataManager.isWeapon(item) || DataManager.isArmor(item)) {
            var etype = $dataSystem.equipTypes[item.etypeId];
            this.changeTextColor(this.systemColor());
            this.drawText(equipText, x, y, 120);
            this.resetTextColor();
            this.drawText(etype, x + 120, y, 120, 'right');
            y += lineHeight;

            var type;
            if (DataManager.isWeapon(item)) {
                type = $dataSystem.weaponTypes[item.wtypeId];
            } else {
                type = $dataSystem.armorTypes[item.atypeId];
            }
            this.changeTextColor(this.systemColor());
            this.drawText(typeText, x, y, 120);
            this.resetTextColor();
            this.drawText(type, x + 120, y, 120, 'right');

            x = this.textPadding() + 300;
            y = lineHeight + this.textPadding();
            for (var i = 2; i < 8; i++) {
                this.changeTextColor(this.systemColor());
                this.drawText(TextManager.param(i), x, y, 160);
                this.resetTextColor();
                this.drawText(item.params[i], x + 160, y, 60, 'right');
                y += lineHeight;
            }
        }

        x = 0;
        y = this.textPadding() * 2 + lineHeight * 7;
        this.drawTextEx(item.description, x, y);
    };

})();
