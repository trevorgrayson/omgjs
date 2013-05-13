OMG.onsubmit = function(e) {
  var form = e.target;
  var inputs = form.getElementsByTagName('input');
  inputs = Array.prototype.slice.call(inputs);
  var textareas = form.getElementsByTagName('textarea');
  inputs = inputs.concat( Array.prototype.slice.call(textareas) );
  var selects = form.getElementsByTagName('select');
  inputs = inputs.concat( Array.prototype.slice.call(selects) );

  var modelName;
  var o = {}
  for(var i=0; i < inputs.length; i++) {
    var input = inputs[i];
    if( /\[/.test(input.name) ) {
      modelName = input.name.substr(0,input.name.indexOf('['));
      var name = input.name.replace(/^.*?\[/,'');
      name = name.substr(0,name.length - 1);
      o[name] = input.value;
    }

  }

  modelName = OMG.util.toCamelCase(modelName);
  try {
    console.log( Opal[modelName].create(o) ); 
  } catch(e) { alert(e) }
  return false;
}

OMG.util = {};
OMG.util.toCamelCase = function(str) {
  var o = str.replace(/^./, function(c) {
    return c.toUpperCase();
  });
  o = o.replace(/_[a-z]/, function(c) {
    return c[1].toUpperCase();
  });
  return o;
}

