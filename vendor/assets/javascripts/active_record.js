(function(__opal) {
  var self = __opal.top, __scope = __opal, nil = __opal.nil, $mm = __opal.mm, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass;
  return (function(__base, __super){
    function ActiveRecord() {};
    ActiveRecord = __klass(__base, __super, "ActiveRecord", ActiveRecord);
    function Base() {};
    Base = __klass(__base, __super, "Base", Base);

    var def = ActiveRecord.prototype, __scope = Base._scope;
    var xmlDoc;

    Base._defs('find', function(id, params) {
      if (typeof window.ActiveXObject != 'undefined' ) {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
        xmlDoc.onreadystatechange = this.build ;
      }
      else {
        xmlDoc = new XMLHttpRequest();
        xmlDoc.onload = this.build ;
      }
      xmlDoc.open( "GET", this.url(id) + this.paramsToQuery(params), false ); //synchronous for now
      xmlDoc.send( null );

      return JSON.parse( xmlDoc.responseText )

    });

    Base._defs('build', function(id) {
      //cache in a hash
      console.log(xmlDoc.responseText);
      o = JSON.parse(xmlDoc.responseText);
    });

    Base._defs('url', function(id) {
      var _a, _b, _c;if (id == null) {
        id = nil
      }
      return "/" + (((_a = ((_b = this).$pluralize || 
        $mm('pluralize')).call(_b, ((_c = this).$name 
        || $mm('name')).call(_c))).$downcase 
        || $mm('downcase')).call(_a)) + (id == nil || id == 'all' ? '' : "/" + id.toString() ) + ".json"
    });

    Base._defs('paramsToQuery', function(params) {
      s = '?';

      for(var k in params) {
        s += 'object['+ encodeURIComponent(k) + ']=' + encodeURIComponent(params[k]) + '&';
      }

      return s.substring(0,s.length - 1);
    });

    Base._defs('save',function() {
      //{'object': this}
      JSON.stringify(this)
    });

    //should I be doing this the JS way?
    Base._defs('$new', function(word) {
    });

    Base._defs('$pluralize', function(word) {
      return "" + (word) + "s"
    });

    //Place holding to avoid errors for now
    //probably need to make attributes hash
    //use attr_accessible to define attrs
    //allow user to define more just in case
    Base._defs('$attr_accessible', function(word) {
    });

    return nil;
  })(self, null)
})(Opal);
