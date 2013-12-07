(function ( $ ) {

'use strict';

$.fn.viewSwitcher = function ( options ) {
  var DATA_ATTR_START = '[data-',
    DATA_ATTR_END = '="true"]';
  
  var $views = $( options.views ),
    viewClass = options.viewClass ? options.viewClass : 'view',
    
    $login = $( options.login ).add( DATA_ATTR_START + 'login' + DATA_ATTR_END ),
    
    $logout = $( options.logout ).add( DATA_ATTR_START + 'logout' + DATA_ATTR_END ),
    
    $tabs = $( this );
  
  $tabs.click(function () {
    $views.removeClass( viewClass );
    $( $views[$( this ).index()] ).addClass( viewClass );
  });
  
  $login.submit(function () {
    if ( options.loggedIn === undefined || options.loggedIn() ) {
      $login.removeClass( viewClass );
      $views.removeClass( viewClass );
      $tabs.addClass( viewClass );
      $logout.addClass( viewClass );
      $( options.home ).add( DATA_ATTR_START + 'home' + DATA_ATTR_END ).addClass( viewClass );
    }
  });
  
  $logout.click(function () {
    $views.removeClass( viewClass );
    $tabs.removeClass( viewClass );
    $logout.removeClass( viewClass );
    $login.addClass( viewClass );
  });
  
  return this;
};

})( jQuery );