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
  saveShareContent(Blockly.Xml.domToText(xml), "myxml.htb");
  mdui.snackbar({
    message: "Htblock ：下载成功",
    position: "right-top"
  });
}
function donosaveblockly() {
  mdui.dialog({
    title: "上传文件",
    content: '<input type="file" id="file_id" onchange="readFile()">',
    buttons: [
      {
        text: "关闭"
      }
    ]
  });
}
function readFile() {
  const objFile = document.getElementById("file_id");
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
    const xml = Blockly.Xml.textToDom(fileString);
    Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());
    mdui.snackbar({
      message: "Htblock ：打开成功",
      position: "right-top"
    });
  };

  // 读取文件
}
