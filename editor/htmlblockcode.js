
Blockly.PHP['title'] = function(block) {
    var value_title01 = Blockly.PHP.statementToCode(block, 'title01')
  // TODO: Assemble PHP into code variable.
  var code = '<title>'+value_title01+'</title>\n';
  return code;
};
Blockly.PHP['head'] = function(block) {
  var statements_head01 = Blockly.PHP.statementToCode(block, 'head01');
  // TODO: Assemble PHP into code variable.
  var code = '<head>\n'+statements_head01+'\n</head>\n';
  return code;
};
Blockly.PHP['body'] = function(block) {
    var statements_body01 = Blockly.PHP.statementToCode(block, 'body01');
  // TODO: Assemble PHP into code variable.
  var code = '<body>\n'+statements_body01+'\n</body>\n';
  return code;
};
Blockly.PHP['html_dingyi'] = function(block) {
    var code = '<html>\n' + Blockly.PHP.statementToCode(block, 'html01')+'\n</html>\n';
  return code;
};
Blockly.PHP['html_code'] = function(block) {
  var code = block.getFieldValue('code');
  return code + '\n';
};
Blockly.PHP['top'] = function(block) {
  // TODO: Assemble PHP into code variable.
  var code = '<!DOCTYPE html>\n';
  return code;
};
Blockly.PHP['texto'] = function(block) {
  var text_texto01 = block.getFieldValue('texto01');
  // TODO: Assemble PHP into code variable.
  var code = text_texto01;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
Blockly.PHP['zs'] = function(block) {

  var zs = block.getFieldValue('zs');

  return '<!--'+zs + '-->\n';
};
Blockly.PHP['iframe'] = function(block) {

  var text_iframe01 = block.getFieldValue('iframe01');

  var text_iframe02 = block.getFieldValue('iframe02');

  var text_iframe03 = block.getFieldValue('iframe03');
    // TODO: Assemble PHP into code variable.
      var code = '<iframe height="'+text_iframe03+'" width="'+text_iframe02+'"  src="'+text_iframe01+'"></iframe>\n';
  return code;
};
Blockly.PHP['link'] = function(block) {
  var text_link01 = block.getFieldValue('link01');
  var text_link02 = block.getFieldValue('link02');
  var text_link03 = block.getFieldValue('link03');
    var text_link04 = block.getFieldValue('link04');
    // TODO: Assemble PHP into code variable.
    if (text_link04 != '') {
        var code = '<!--' + text_link04+ "-->" + '\n<link rel="' + text_link01 + '" type="' + text_link02 + '" href="' + text_link03 + '">\n';
    } else {
      var code = '<link rel="'+text_link01+'" type="'+text_link02+'" href="'+text_link03+'">\n';
    }

  return code;
};

Blockly.PHP['head1'] = function(block) {
  var text_head00 = block.getFieldValue('head00');
  var text_head02 = block.getFieldValue('head02');
    // TODO: Assemble PHP into code variable.
      var code = '<h'+text_head00+'>'+text_head02+'</h'+text_head00+'>\n';
  return code;
};
Blockly.PHP['p'] = function(block) {
    var value_p01 = Blockly.PHP.statementToCode(block, 'p01')
  // TODO: Assemble PHP into code variable.
  var code = '<p>'+value_p01+'</p>\n';
  return code;
};
Blockly.PHP['br'] = function(block) {
  // TODO: Assemble PHP into code variable.
  var code = '<br>\n';
  return code;
};
Blockly.PHP['hr'] = function(block) {
  // TODO: Assemble PHP into code variable.
  var code = '<hr>\n';
  return code;
};
Blockly.PHP['div'] = function(block) {
  var statements_div00 = Blockly.PHP.statementToCode(block, 'div00');
  var text_div01 = block.getFieldValue('div01');
  var text_div02 = block.getFieldValue('div02');
    // TODO: Assemble PHP into code variable.
        if (text_div01 == ''&&text_div02 == '') {
        var code = '<div>\n'+statements_div00+'\n</div>\n';
    }  else if (text_div02 == '') {
       var code = '<div class='+text_div01+'>\n'+statements_div00+'\n</div>\n';
    }else if (text_div01 == '') {
       var code = '<div id='+text_div02+'>\n'+statements_div00+'\n</div>\n';
    }else{
     var code = '<div id='+text_div02+' class='+text_div01+'>\n'+statements_div00+'\n</div>\n';
    }
  return code;
};
Blockly.PHP['span'] = function(block) {
  var statements_span00 = Blockly.PHP.statementToCode(block, 'span00');
  var text_span01 = block.getFieldValue('span01');
  var text_span02 = block.getFieldValue('span02');
    // TODO: Assemble PHP into code variable.
        if (text_span01 == ''&&text_span02 == '') {
        var code = '<span>\n'+statements_span00+'\n</span>\n';
    }  else if (text_span02 == '') {
       var code = '<span class='+text_span01+'>\n'+statements_span00+'\n</span>\n';
    }else if (text_span01 == '') {
       var code = '<span id='+text_span02+'>\n'+statements_span00+'\n</span>\n';
    }else{
     var code = '<span id='+text_span02+' class='+text_span01+'>\n'+statements_span00+'\n</span>\n';
    }
  return code;
};
Blockly.PHP['1link'] = function(block) {
  // TODO: Assemble PHP into code variable.
  var code = '<a href="' + block.getFieldValue('1link001') + '">' + block.getFieldValue('1link002') + "</a>\n";
  return code;
};
//Blockly.PHP['iframe'] = function(block) {
  // TODO: Assemble PHP into code variable.
  //var code = '<iframe src="' + block.getFieldValue('iframe1') + ' width='+block.getFieldValue('iframe2') +  ' height='+block.getFieldValue('iframe2') +'"></iframe>\n';
  //return code;
//};
