
function getQueryString(name) {var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");var r = window.location.search.substr(1).match(reg);if (r != null) return unescape(r[2]); return null;} 
if(getQueryString("lan")=="en"){
  var blan = new Array();
  blan['title001'] = "Define title";
  blan['title002'] = "Set the title of the page";
  blan['html_dingyi001'] = "Define HTML";
  blan['head001'] = "Define header";
  blan['html_code001'] = "HTML tags";
  blan['html_code002'] = "<p>Hello!<p>";
  blan['body001'] = "Define body";
  blan['top001'] = "Define web page";
  blan['top002'] = "The top priority of a web page";
  blan['texto001'] = "text";
  blan['texto002'] = "Text, essential";
  blan['link001'] = "Connect external resources";
  blan['link002'] = "website:";
  blan['link003'] = "Connection relationship:";
  blan['link004'] = "Type:";
  blan['link005'] = "Remarks (not required):";
  blan['link006'] = "This tag serves as the default link for all link tags in HTML";
  blan['head1001'] = "Insert title text";
  blan['head1002'] = "Size: (1-6)";
  blan['head1003'] = "Text content:";
  blan['head1004'] = "Heading is defined by < H1 > - < H6 > tags< H1 > defines the largest title< H6 > defines the smallest title.";
  blan['p001'] = "Insert paragraph";
  blan['p002'] = "A small paragraph";
    blan['div001'] = "Insert partition (div typography)";
      blan['span001'] = "Inserting partition(not occupy separate rows)";
  blan['divspan1'] = "CSS class (optional):";
    blan['divspan2'] = "JS id (optional):";
    blan['hr'] = "Insert a horizontal line";
    blan['br'] = "Insert a line break";
  blan['1link001'] = "Insert link";
  blan['1link002'] = "text";
   blan['iframe'] = "Embedded web page";
        blan['iframe1'] = "link";
        blan['iframe2'] = "wdth";
        blan['iframe3'] = "heigh";
          blan['textx01'] = "Insert text formatting label";
}else{
  var blan = new Array();
  blan['title001'] = "定义标题";
  blan['title002'] = "设置网页的标题";
  blan['html_dingyi001'] = "定义HTML内容";
  blan['head001'] = "定义头部";
  blan['html_code001'] = "HTML标签";
  blan['html_code002'] = "<p>你好！<p>";
  blan['body001'] = "定义身体";
  blan['top001'] = "定义网页";
  blan['top002'] = "一个网页的重中之重";
  blan['texto001'] = "文本";
  blan['texto002'] = "文本，必不可少";
  blan['zs001'] = "注释";
  blan['za002'] = "内容：";
  blan['iframe001'] = "嵌入外部网页";
  blan['iframe002'] = "网址：";
  blan['iframe003'] = "高：";
  blan['iframe004'] = "宽：";
  blan['iframe005'] = "输入网址";
  blan['link001'] = "连接外部资源";
  blan['link002'] = "网址：";
  blan['link003'] = "连接关系：";
  blan['link004'] = "类型：";
  blan['link005'] = "备注(没有可不填)：";
  blan['link006'] = "该标签作为HTML中所有的链接标签的默认链接";
  blan['head1001'] = "插入标题文字";
  blan['head1002'] = "大小：（1-6）";
  blan['head1003'] = "文字内容：";
  blan['head1004'] = "标题（Heading）是通过 <h1> - <h6> 标签进行定义的。<h1> 定义最大的标题。 <h6> 定义最小的标题。";
    blan['p001'] = "插入段落";
  blan['p002'] = "一个小小的段落";
      blan['div001'] = "插入分区(div排版)";
      blan['span001'] = "插入不占单独行分区(span排版)";
  blan['divspan1'] = "CSS类（可不填）：";
    blan['divspan2'] = "JS id（可不填）：";
      blan['hr'] = "插入水平线";
    blan['br'] = "插入换行符";
  blan['1link001'] = "插入链接";
    blan['1link002'] = "文本";
    //  blan['iframe'] = "嵌入网页";
     //   blan['iframe1'] = "链接";
    //    blan['iframe2'] = "宽";
     //   blan['iframe3'] = "高";
            blan['textx01'] = "插入文本格式化标签";
  
};
Blockly.Blocks['title'] = {
  init: function() {
    this.appendValueInput("title01")
        .setCheck(null)
        .appendField(blan['title001']);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip(blan['title002']);
 this.setHelpUrl("");
  }
};
Blockly.Blocks['html_dingyi'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(blan['html_dingyi001']);
        this.appendStatementInput("html01")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['head'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(blan['head001']);
        this.appendStatementInput("head01")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['html_code'] = {
  init: function() {
        this.appendDummyInput()
        .appendField(blan['html_code001'])
        .appendField(new Blockly.FieldTextInput(blan['html_code002']), "code");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['body'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(blan['body001']);
        this.appendStatementInput("body01")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['top'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(blan['top001']);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip(blan['top002']);
 this.setHelpUrl("");
  }
};

Blockly.Blocks['texto'] = {
  init: function() {
        this.appendDummyInput()
            .appendField(" ")
            .appendField(new Blockly.FieldTextInput(blan['texto001']), "texto01")
            .appendField(" ");
    this.setOutput(true, null);
    this.setColour(15);
 this.setTooltip(blan['texto002']);
 this.setHelpUrl("");
  }
};
Blockly.Blocks['zs'] = {

  init: function() {

        this.appendDummyInput()
        .appendField(blan['zs001'])
        .appendField(new Blockly.FieldTextInput(blan['zs002']), "zs");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['iframe'] = {

  init: function() {
        this.appendDummyInput()
        .appendField(blan['iframe001']);
    this.appendDummyInput()
        .appendField(blan['iframe002'])
        .appendField(new Blockly.FieldTextInput("https://qq.com/"), "iframe01");
    this.appendDummyInput()
        .appendField(blan['iframe003'])
        .appendField(new Blockly.FieldTextInput("200"), "iframe02");
    this.appendDummyInput()
        .appendField(blan['iframe004'])
        .appendField(new Blockly.FieldTextInput("200"), "iframe03");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip(blan['iframe005']);
 this.setHelpUrl("");
  }
};

Blockly.Blocks['link'] = {
  init: function() {
        this.appendDummyInput()
        .appendField(blan['link001']);
    this.appendDummyInput()
        .appendField(blan['link002'])
        .appendField(new Blockly.FieldTextInput("https://cdn.staticfile.org/twitter-bootstrap/5.1.1/css/bootstrap.min.css"), "link01");
    this.appendDummyInput()
        .appendField(blan['link003'])
        .appendField(new Blockly.FieldTextInput("stylesheet"), "link02");
    this.appendDummyInput()
        .appendField(blan['link004'])
        .appendField(new Blockly.FieldTextInput("text/css"), "link03");
        this.appendDummyInput()
            .appendField(blan['link005'])
            .appendField(new Blockly.FieldTextInput("text/css"), "link04");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip(blan['link006']);
 this.setHelpUrl("");
  }
};
Blockly.Blocks['head1'] = {
  init: function() {
        this.appendDummyInput()
        .appendField(blan['head1001']);
    this.appendDummyInput()
        .appendField(blan['head1002'])
        .appendField(new Blockly.FieldTextInput("1"), "head00");
    this.appendDummyInput()
        .appendField(blan['head1003'])
        .appendField(new Blockly.FieldTextInput("stylesheet"), "head02");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip(blan['head1004']);
 this.setHelpUrl("");
  }
};
Blockly.Blocks['p'] = {
  init: function() {
    this.appendValueInput("p01")
        .setCheck(null)
        .appendField(blan['p001']);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip(blan['p002']);
 this.setHelpUrl("");
  }
};
Blockly.Blocks['hr'] = {
  init: function() {
     this.appendDummyInput()
        .appendField(blan['hr']);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip(blan['hr']);
 this.setHelpUrl("");
  }
};
Blockly.Blocks['br'] = {
  init: function() {
     this.appendDummyInput()
        .appendField(blan['br']);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip(blan['br']);
 this.setHelpUrl("");
  }
};
Blockly.Blocks['div'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(blan['div001']);
        this.appendDummyInput()
        .appendField(blan['divspan1'])
        .appendField(new Blockly.FieldTextInput('""'), "div01");
         this.appendDummyInput()
        .appendField(blan['divspan2'])
        .appendField(new Blockly.FieldTextInput('""'), "div02");
        this.appendStatementInput("div00")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['span'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(blan['span001']);
        this.appendDummyInput()
        .appendField(blan['divspan1'])
        .appendField(new Blockly.FieldTextInput('""'), "span01");
         this.appendDummyInput()
        .appendField(blan['divspan2'])
        .appendField(new Blockly.FieldTextInput('""'), "span02");
        this.appendStatementInput("span00")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['1link'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(blan['1link001'])
        .appendField(new Blockly.FieldTextInput("https://rapideditor.vercel.app/"), "link01")
        .appendField(blan['1link002'])
        .appendField(new Blockly.FieldTextInput("Rapid网站"), "link02");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
          this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
  }
};
Blockly.Blocks['textx'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(blan['textx01']);
        .appendField(new Blockly.FieldDropdown([["定义粗体文本","1"], ["定义大号字","2"], ["定义着重文字","3"],["定义斜体字","4"],["定义小号字","5"],["定义加重语气","6"],["定义下标字","7"],["定义上标字","8"],["定义插入字","9"],["定义删除字","10"]]), "textxk001");
        this.appendStatementInput("textxk002")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//Blockly.Blocks['iframe'] = {
 //   init: function () {
   //     this.appendDummyInput()
   //         .appendField(blan['iframe']);
   //     this.appendDummyInput()
     //   .appendField(blan['iframe1'])
    //    .appendField(new Blockly.FieldTextInput('""'), "https://rapideditor.vercel.app/");
    //     this.appendDummyInput()
     //   .appendField(blan['iframe2'])
     //   .appendField(new Blockly.FieldTextInput('""'), "100");
     //   this.appendStatementInput()
     //    .appendField(blan['iframe3'])
     //   .appendField(new Blockly.FieldTextInput('""'), "100");
     //   this.appendStatementInput()
      //      .setCheck(null);
      //  this.setPreviousStatement(true, null);
     //   this.setNextStatement(true, null);
      //  this.setColour(0);
     //   this.setTooltip("");
     //   this.setHelpUrl("");
   // }
//};
