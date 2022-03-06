
	
		var $ = mdui.$;
var inst = new mdui.Dialog('#111111aaa');

// method
$('#open').on('click', function () {
  inst.open();
});

'use strict';

function start() {}


	  var demoworkspace = Blockly.inject('blocklyDiv', {toolbox: document.getElementById('toolbox'),grid: {spacing: 40,length: 3,colour: '#ccc',snap: true},})

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The toolbox category built during the custom toolbox codelab, in es6.
 * @author aschmiedt@google.com (Abby Schmiedt)
 */

class CustomCategory extends Blockly.ToolboxCategory {
  /**
   * Constructor for a custom category.
   * @override
   */
  constructor(categoryDef, toolbox, opt_parent) {
    super(categoryDef, toolbox, opt_parent);
  }

  /**
   * Adds the colour to the toolbox.
   * This is called on category creation and whenever the theme changes.
   * @override
   */
  addColourBorder_(colour){
    this.rowDiv_.style.backgroundColor = colour;
  }

  /**
   * Sets the style for the category when it is selected or deselected.
   * @param {boolean} isSelected True if the category has been selected,
   *     false otherwise.
   * @override
   */
  setSelected(isSelected){
    // We do not store the label span on the category, so use getElementsByClassName.
    var labelDom = this.rowDiv_.getElementsByClassName('blocklyTreeLabel')[0];
    if (isSelected) {
      // Change the background color of the div to white.
      this.rowDiv_.style.backgroundColor = 'white';
      // Set the colour of the text to the colour of the category.
      labelDom.style.color = this.colour_;
      this.iconDom_.style.color = this.colour_;
    } else {
      // Set the background back to the original colour.
      this.rowDiv_.style.backgroundColor = this.colour_;
      // Set the text back to white.
      labelDom.style.color = 'white';
      this.iconDom_.style.color = 'white';
    }
    // This is used for accessibility purposes.
    Blockly.utils.aria.setState(/** @type {!Element} */ (this.htmlDiv_),
        Blockly.utils.aria.State.SELECTED, isSelected);
  }

  /**
   * Creates the dom used for the icon.
   * @return {HTMLElement} The element for the icon.
   * @override
   */
  createIconDom_() {
    const iconImg = document.createElement('img');
    iconImg.src = './logo_only.svg';
    iconImg.alt = 'Blockly Logo';
    iconImg.width = '25';
    iconImg.height = '25';
    return iconImg;
  }
}

Blockly.registry.register(
    Blockly.registry.Type.TOOLBOX_ITEM,
    Blockly.ToolboxCategory.registrationName,
    CustomCategory, true);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The toolbox category built during the custom toolbox codelab, in es6.
 * @author aschmiedt@google.com (Abby Schmiedt)
 */

class CustomCategory extends Blockly.ToolboxCategory {
  /**
   * Constructor for a custom category.
   * @override
   */
  constructor(categoryDef, toolbox, opt_parent) {
    super(categoryDef, toolbox, opt_parent);
  }

  /**
   * Adds the colour to the toolbox.
   * This is called on category creation and whenever the theme changes.
   * @override
   */
  addColourBorder_(colour){
    this.rowDiv_.style.backgroundColor = colour;
  }

  /**
   * Sets the style for the category when it is selected or deselected.
   * @param {boolean} isSelected True if the category has been selected,
   *     false otherwise.
   * @override
   */
  setSelected(isSelected){
    // We do not store the label span on the category, so use getElementsByClassName.
    var labelDom = this.rowDiv_.getElementsByClassName('blocklyTreeLabel')[0];
    if (isSelected) {
      // Change the background color of the div to white.
      this.rowDiv_.style.backgroundColor = 'white';
      // Set the colour of the text to the colour of the category.
      labelDom.style.color = this.colour_;
      this.iconDom_.style.color = this.colour_;
    } else {
      // Set the background back to the original colour.
      this.rowDiv_.style.backgroundColor = this.colour_;
      // Set the text back to white.
      labelDom.style.color = 'white';
      this.iconDom_.style.color = 'white';
    }
    // This is used for accessibility purposes.
    Blockly.utils.aria.setState(/** @type {!Element} */ (this.htmlDiv_),
        Blockly.utils.aria.State.SELECTED, isSelected);
  }

  /**
   * Creates the dom used for the icon.
   * @return {HTMLElement} The element for the icon.
   * @override
   */
  createIconDom_() {
    const iconImg = document.createElement('img');
    iconImg.src = './logo_only.svg';
    iconImg.alt = 'Blockly Logo';
    iconImg.width = '25';
    iconImg.height = '25';
    return iconImg;
  }
}

Blockly.registry.register(
    Blockly.registry.Type.TOOLBOX_ITEM,
    Blockly.ToolboxCategory.registrationName,
    CustomCategory, true);
		function showHtml() {
  Blockly.PHP.INFINITE_LOOP_TRAP = true;
  var code = Blockly.PHP.workspaceToCode(demoWorkspace);
  //让varcode等于上面定义的东西
  alert(code);
  function copy(data) {
    var sel = window.getSelection(); //获取Selection对象
    var range = document.createRange(); //创建Range对象
    var node = document.createTextNode(data); //创建文本节点，并指定内容
    document.body.appendChild(node); //加入body末尾（否则无法选中）
    range.selectNode(node); //选中文本节点
    sel.removeAllRanges(); //删除原先选区
    sel.addRange(range); //将区域加入选区
    document.execCommand("copy"); //execCommand执行复制操作
    document.body.removeChild(node); //删除临时节点
    return data;
  }
  copy(code);

  mdui.snackbar({
    message: "Rapid ：代码成功生成，已复制！",
    position: "right-top"
  });
}
function saveHtml() {
  Blockly.PHP.INFINITE_LOOP_TRAP = true;
  var code = Blockly.PHP.workspaceToCode(demoWorkspace);
  //让varcode等于上面定义的东西
  function saveShareContent(content, fileName) {
    let downLink = document.createElement("a");
    downLink.download = fileName;
    //字符内容转换为blod地址
    let blob = new Blob([content]);
    downLink.href = URL.createObjectURL(blob);
    // 链接插入到页面
    document.body.appendChild(downLink);
    downLink.click();
    // 移除下载链接
    document.body.removeChild(downLink);
  }
  const xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
  saveShareContent(code, "myhtml.html");
  mdui.snackbar({
    message: "Rapid ：Html文件成功下载",
    position: "right-top"
  });
}
function about() {
  //暂无
}

function saveblockly() {
  const xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
  localStorage.setItem("xmlText", Blockly.Xml.domToText(xml));

  mdui.snackbar({
    message: "Rapid ：保存成功",
    position: "right-top"
  });
}

function nosaveblockly() {
Blockly.getMainWorkspace().clear();
  // 需要将保存的 xmlText 转为 xml dom 对象
  const xml = Blockly.Xml.textToDom(localStorage.getItem("xmlText"));
  // 回显数据
  Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());

  mdui.snackbar({
    message: "Rapid ：回显成功",
    position: "right-top"
  });
}

		function Base64() {
    // private property  
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";  

    // public method for encoding  
    this.encode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = _utf8_encode(input);  
        while (i < input.length) {  
            chr1 = input.charCodeAt(i++);  
            chr2 = input.charCodeAt(i++);  
            chr3 = input.charCodeAt(i++);  
            enc1 = chr1 >> 2;  
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  
            enc4 = chr3 & 63;  
            if (isNaN(chr2)) {  
                enc3 = enc4 = 64;  
            } else if (isNaN(chr3)) {  
                enc4 = 64;  
            }  
            output = output +  
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +  
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);  
        }  
        return output;  
    }  

    // public method for decoding  
    this.decode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3;  
        var enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");  
        while (i < input.length) {  
            enc1 = _keyStr.indexOf(input.charAt(i++));  
            enc2 = _keyStr.indexOf(input.charAt(i++));  
            enc3 = _keyStr.indexOf(input.charAt(i++));  
            enc4 = _keyStr.indexOf(input.charAt(i++));  
            chr1 = (enc1 << 2) | (enc2 >> 4);  
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);  
            chr3 = ((enc3 & 3) << 6) | enc4;  
            output = output + String.fromCharCode(chr1);  
            if (enc3 != 64) {  
                output = output + String.fromCharCode(chr2);  
            }  
            if (enc4 != 64) {  
                output = output + String.fromCharCode(chr3);  
            }  
        }  
        output = _utf8_decode(output);  
        return output;  
    }  

    // private method for UTF-8 encoding  
    _utf8_encode = function (string) {  
        string = string.replace(/\r\n/g,"\n");  
        var utftext = "";  
        for (var n = 0; n < string.length; n++) {  
            var c = string.charCodeAt(n);  
            if (c < 128) {  
                utftext += String.fromCharCode(c);  
            } else if((c > 127) && (c < 2048)) {  
                utftext += String.fromCharCode((c >> 6) | 192);  
                utftext += String.fromCharCode((c & 63) | 128);  
            } else {  
                utftext += String.fromCharCode((c >> 12) | 224);  
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);  
                utftext += String.fromCharCode((c & 63) | 128);  
            }  

        }  
        return utftext;  
    }  

    // private method for UTF-8 decoding  
    _utf8_decode = function (utftext) {  
        var string = "";  
        var i = 0;  
        var c = c1 = c2 = 0;  
        while ( i < utftext.length ) {  
            c = utftext.charCodeAt(i);  
            if (c < 128) {  
                string += String.fromCharCode(c);  
                i++;  
            } else if((c > 191) && (c < 224)) {  
                c2 = utftext.charCodeAt(i+1);  
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));  
                i += 2;  
            } else {  
                c2 = utftext.charCodeAt(i+1);  
                c3 = utftext.charCodeAt(i+2);  
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));  
                i += 3;  
            }  
        }  
        return string;  
    }  
}
function dosaveblockly() {
  function saveShareContent(content, fileName) {
    let downLink = document.createElement("a");
    downLink.download = fileName;
    //字符内容转换为blod地址
    let blob = new Blob([content]);
    downLink.href = URL.createObjectURL(blob);
    // 链接插入到页面
    document.body.appendChild(downLink);
    downLink.click();
    // 移除下载链接
    document.body.removeChild(downLink);
  }
  const xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
  var str = Blockly.Xml.domToText(xml);  
var base = new Base64();  
var result = base.encode(str);  
  saveShareContent(result, "myxml.rapid");
  mdui.snackbar({
    message: "Rapid ：下载成功",
    position: "right-top"
  });
}

function openFile() {
  const objFile = document.getElementById("files");
  if (objFile.value === "") {
    alert("请选择文件！");
    return;
  }
  // 获取文件
  const files = objFile.files;

  // 新建一个FileReader
  const reader = new FileReader();
  reader.readAsText(files[0], "UTF-8");
  // 读取完文件之后会回来这里
  reader.onload = function (e) {
    // 读取文件内容
    const fileString = e.target.result;
    // 接下来可对文件内容进行处理
    var base = new Base64();  
    var result2 = base.decode(fileString);  
    const xml = Blockly.Xml.textToDom(result2);
    Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());
    mdui.snackbar({
      message: "Rapid ：打开成功",
      position: "right-top"
    });
  };

  // 读取文件
}
function myFunction() {
   document.getElementById('files').click() 
}
    function html2Escape(sHtml) {
 return sHtml.replace(/[<>&"]/g,function(c){
   return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c];
 });
}
function openWindow() {
var myVar = setInterval(function(){ myTimer() }, 1000);
function myTimer() {
      Blockly.PHP.INFINITE_LOOP_TRAP = true;
  var code = Blockly.PHP.workspaceToCode(demoWorkspace);
            var codes=html2Escape(code)
            document.getElementById("001").innerHTML = codes
}
    layer.open({
  title: '代码转换'
  ,content: '<div class="mdui-card"><div class="mdui-card-media"><div class="mdui-card-actions"><pre class="layui-code"><div id="001"></div></pre></div></div></div>'
,shade: 0
,area: ['400px','700px']
,type: 1
,anim: 5
,offset: 'r'
,resize:true
});   
layui.code({
          title: 'HTML'
});
  
    }
window.onbeforeunload = function(event){
	    mdui.snackbar({
      message: "Rapid ：你保存了吗？真的要关闭吗？",
      position: "right-top"
    });
	return '???快保存！'; 
};


