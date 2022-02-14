Blockly.Blocks['title'] = {
  init: function() {
    this.appendValueInput("title01")
        .setCheck(null)
        .appendField("定义标题");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("设置网页的标题");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['head'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("定义头部");
    this.appendStatementInput("head01")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("定义网页的头部，是制作网页必不可少的");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['top'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("定义网页");
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("一个网页的重中之重");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['texto'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("我是一串可爱的文本"), "texto01");
    this.setOutput(true, null);
    this.setColour(15);
 this.setTooltip("文本，必不可少");
 this.setHelpUrl("");
  }
};



Blockly.Blocks['link'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("连接外部资源");
    this.appendDummyInput()
        .appendField("网址：")
        .appendField(new Blockly.FieldTextInput("style.css"), "link01");
    this.appendDummyInput()
        .appendField("连接关系（见33h.co/brfct）：")
        .appendField(new Blockly.FieldTextInput("stylesheet"), "link02");
    this.appendDummyInput()
        .appendField("类型（详情见r6f.cn/brfcz）：")
        .appendField(new Blockly.FieldTextInput("text/css"), "link03");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("该标签作为HTML中所有的链接标签的默认链接");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['style'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("引用样式文件：");
    this.appendValueInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("引用样式文件");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['textand'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("连接");
    this.appendValueInput("textand01")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("和");
    this.appendValueInput("textand02")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(15);
 this.setTooltip("连接两个文本");
 this.setHelpUrl("");
  }
};