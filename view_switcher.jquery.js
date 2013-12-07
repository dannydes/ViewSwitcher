(function ( $ ) {

'use strict';

$.fn.viewSwitcher = function ( options ) {
  var DATA_ATTR_START = '[data-',
    DATA_ATTR_END = '="true"]';
  
  var $views = $( options.views ),
    viewClass = options.viewClass ? options.viewClass : 'view',
    
    $login = $( options.login ).add( DATA_ATTR_START + 'login' + DATA_ATTR_END ),
    
    $logout = $( options.logout ).add( DATA_ATTR_START + 'logout' + DATA_ATTR_END ),
    
    $forgotPassword = $( options.forgotPassword ).add( DATA_ATTR_START + 'forgotPassword' + DATA_ATTR_END ),
    
    $registration = $( options.registration ).add( DATA_ATTR_START + 'registration' + DATA_ATTR_END ),
    
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
    return false;
  });
  
  $( options.forgotPasswordButton )
    .add( DATA_ATTR_START + 'forgotPasswordButton' + DATA_ATTR_END )
    .click(function () {
      $login.removeClass( viewClass );
      $forgotPassword.addClass( viewClass );
    });
  
  $forgotPassword.submit(function () {
    $forgotPassword.removeClass( viewClass );
    $login.addClass( viewClass );
    return false;
  });
  
  $( options.registrationButton )
    .add( DATA_ATTR_START + 'registrationButton' + DATA_ATTR_END )
    .click(function () {
      $login.removeClass( viewClass );
      $registration.addClass( viewClass );
    });
  
  $registration.submit(function () {
    if ( options.registrationSuccess === undefined || options.registrationSuccess() ) {
      $registration.removeClass( viewClass );
      $login.addClass( viewClass );
    }
    return false;
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