var demoWorkspace = Blockly.inject('blocklyDiv', {toolbox: document.getElementById('toolbox'),grid: {spacing: 40,length: 3,colour: '#ccc',snap: true},});Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), demoWorkspace);

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
function showabout() {
  mdui.snackbar({
    message: "Rapid ：Version 0.1.1",
    position: "right-top"
  });  
mdui.snackbar({
    message: "Theme for 白篮 | Make for 王翊轩&SUDA编程",
    position: "right-bottom"
  });
	


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
  // 需要将保存的 xmlText 转为 xml dom 对象
  const xml = Blockly.Xml.textToDom(localStorage.getItem("xmlText"));
  // 回显数据
  Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());

  mdui.snackbar({
    message: "Rapid ：回显成功",
    position: "right-top"
  });
}

