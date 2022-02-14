
Blockly.PHP['title'] = function(block) {
  var value_title01 = Blockly.PHP.valueToCode(block, 'title01', Blockly.PHP.ORDER_ATOMIC);
  // TODO: Assemble PHP into code variable.
  var value_title01 = value_title01.substring(1,(value_title01.length-1))
  var code = '<title>'+value_title01+'</title>\n';
  return code;
};
Blockly.PHP['head'] = function(block) {
  var statements_head01 = Blockly.PHP.statementToCode(block, 'head01');
  // TODO: Assemble PHP into code variable.
  var code = '<head>\n'+statements_head01+'\n</head>\n';
  return code;
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
  return [code, Blockly.PHP.ORDER_NONE];
};


Blockly.PHP['link'] = function(block) {
  var text_link01 = block.getFieldValue('link01');
  var text_link02 = block.getFieldValue('link02');
  var text_link03 = block.getFieldValue('link03');
  // TODO: Assemble PHP into code variable.
  var code = '<link rel="'+text_link01+'" type="'+text_link02+'" href="'+text_link03+'">\n';
  return code;
};

Blockly.PHP['style'] = function(block) {
  var value_name = Blockly.PHP.valueToCode(block, 'NAME', Blockly.PHP.ORDER_ATOMIC);
    var value_name = value_name.substring(1,(value_name.length-1))
  // TODO: Assemble PHP into code variable.
  var code = '<style type="text/css">'+value_name+'</style>\n';
  
  return code;
};

Blockly.PHP['textand'] = function(block) {
  var value_textand01 = Blockly.PHP.valueToCode(block, 'textand01', Blockly.PHP.ORDER_ATOMIC);
      var value_textand01 = value_textand01.substring(1,(value_textand01.length-1))
  var value_textand02 = Blockly.PHP.valueToCode(block, 'textand02', Blockly.PHP.ORDER_ATOMIC);
      var value_textand02 = value_textand02.substring(1,(value_textand02.length-1))
  // TODO: Assemble PHP into code variable.
  var code = value_textand01+value_textand02;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.PHP.ORDER_NONE];
};
