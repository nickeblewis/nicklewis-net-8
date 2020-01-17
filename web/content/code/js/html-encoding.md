http://jsfiddle.net/E3EqX/13/

```js
$('#doIt').click(function () {
    var encodedStr = $('#inputText').val().replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
       return '&#'+i.charCodeAt(0)+';';
    });
    $('#output').html(encodedStr.replace(/&/gim, '&amp;'));
});
```

Encoding HTML from Quill in FormBuilder 2