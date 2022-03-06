var demoWorkspace = Blockly.inject('blocklyDiv', {toolbox: document.getElementById('toolbox'));
// 1. 为了创建自定义类别，先创建自定义类别，继承自Blockly.ToolboxCategory
class CustomCategory extends Blockly.ToolboxCategory {
    // 自定义类别创造函数
    // categoryDef: 类别定义的信息
    // toolbox: 表示类别的父级toolbox
    // opt_parent: 可选参数，表示其父类别
    constructor(categoryDef, toolbox, opt_parent) {
        super(categoryDef, toolbox, opt_parent);
    }
}

// 2. 自定义类别需要向Blockly注册，告知自定义类别的存在，不然会无法识别新建的类
Blockly.registry.register(
    Blockly.registry.Type.TOOLBOX_ITEM,
    Blockly.ToolboxCategory.registrationName,
    CustomCategory, true);
