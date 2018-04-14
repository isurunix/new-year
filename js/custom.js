var url = window.location.href;
var tokens = url.split("?");
var params = tokens[tokens.length - 1].split("&");
var param = params[0].split("=")[1];
var greeting = null;

if (param == 'dms') {
  greeting = {
    strings: ['ලැබුවා වූ අලුත් අවුරුද්ද සාමය,සතුට සපිරි සෞභාග්‍යමත් නව වසරක් වේවා !!','புத்தாண்டு வாழ்த்துக்கள்... !!','Happy New Year for all of you...'],
    typeSpeed: 60,
    backSpeed: 0,
    loop: false,
    cursorChar: '',
    fadeOut: true,
    loop: true
  };
}else{
  greeting = {
    strings: ['ලැබුවා වූ නව වසර සාමය,සතුට සපිරි සෞභාග්‍යමත් නව වසරක් වේවා !!','புத்தாண்டு வாழ்த்துக்கள்... !!','Wish you a Happy New Year... !!'],
    typeSpeed: 60,
    backSpeed: 0,
    loop: false,
    cursorChar: '',
    fadeOut: true,
    loop: true
  };
}



var greeting = new Typed('#greeting', greeting);