(function(__opal) {
  var self = __opal.top, __scope = __opal, nil = __opal.nil, $mm = __opal.mm, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass;
  return (function(__base, __super){
    function ActiveModel() {};
    ActiveModel = __klass(__base, __super, "ActiveModel", ActiveModel);

    var def = ActiveModel.prototype, __scope = ActiveModel._scope;
    var xmlDoc;

    ActiveModel._defs('find', function(id) {
      if (typeof window.ActiveXObject != 'undefined' ) {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
        xmlDoc.onreadystatechange = this.build ;
      }
      else {
        xmlDoc = new XMLHttpRequest();
        xmlDoc.onload = this.build ;
      }
      xmlDoc.open( "GET", this.url(), true );
      xmlDoc.send( null );

    });

    ActiveModel._defs('build', function(id) {
      console.log('building')
      console.log(xmlDoc.responseText);
    });

    ActiveModel._defs('url', function(id) {
      var _a, _b, _c;if (id == null) {
        id = nil
      }
      return "/" + (((_a = ((_b = this).$pluralize || $mm('pluralize')).call(_b, ((_c = this).$name || $mm('name')).call(_c))).$downcase || $mm('downcase')).call(_a)) + "/" + (id)
    });

    ActiveModel._defs('$pluralize', function(word) {
      
      return "" + (word) + "s"
    });

    return nil;
  })(self, null)
})(Opal);
