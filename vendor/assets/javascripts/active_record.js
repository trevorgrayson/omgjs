(function(__opal) {
  var self = __opal.top, __scope = __opal, nil = __opal.nil, $mm = __opal.mm, __breaker = __opal.breaker, __slice = __opal.slice, __klass = __opal.klass;
  return (function(__base, __super){
    //TODO Let's get ActiveModel, ActiveResource in here
    function ActiveRecord() {};
    ActiveRecord = __klass(__base, __super, "ActiveRecord",  ActiveRecord);
    function Base() {};
    Base = __klass(__base, __super, "Base", Base);

    var def = ActiveRecord.prototype, __scope = Base._scope;
    var xmlDoc;

    Base._defs('find', function(id, params) {
      //should be going through new function
      return this.build( this.request(this.url(id), params) );

    });

    Base._defs('build', function(id) {
      //cache in a hash
      return this.new(JSON.parse(xmlDoc.responseText));
    });

    Base._defs('create', function(params) {
      response = this.request( this.url(), params, "POST" );
      return this.build( response )
    });

    def.save = function() {
      this.request( this.url(this.id), params, "PUT" );
    };

    //def reload

    Base._defs('request', function(url, params, action) {
      if(action == null) { action = "GET" }
      var body, query = null;

      if (typeof window.ActiveXObject != 'undefined' ) {
        xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
      }
      else {
        xmlDoc = new XMLHttpRequest();
      }

      if( action == "GET" ) {
        url =  url + '?' + this.paramsToQuery(params);
      } else {
        body = JSON.stringify(params);
      }

      xmlDoc.open( action, url, false ); //synchronous for now?
      //Requiring this to be JSON for now
      xmlDoc.setRequestHeader("Content-Type","application/json");
      xmlDoc.setRequestHeader("Accepts","application/json");
      xmlDoc.send( body );

      return xmlDoc.responseText;
      
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
      s = '';

      for(var k in params) {
        s += 'object['+ encodeURIComponent(k) + ']=' + encodeURIComponent(params[k]) + '&';
      }

      return s.substring(0,s.length - 1);
    });


    //should I be doing this the JS way?
    Base._defs('new', function(params) {
      var m = new this;
      var p;
      for( p in params ) {
        m[p] = params[p];
      }

      return m;
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
OMG = Opal;
