
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

Blockly.PHP['head'] = function(block) {
  var text_head01 = block.getFieldValue('head01');
  var text_head02 = block.getFieldValue('head02');
    // TODO: Assemble PHP into code variable.
      var code = '<h'+text_head01+'>'+text_head02+'</h'+text_head01+'>\n';

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
  var code = '<br></br>\n';
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
