//404 not found
var request = new XMLHttpRequest();
request.open('GET', '/asdfsd/sdsd.html', false);
request.send();

//sync
//http://echo.jsontest.com/key/value/one/two
var request = new XMLHttpRequest();
request.open('GET', 'http://echo.jsontest.com/key/value/one/two', false);
request.send();
request.responseText;

//async
//http://echo.jsontest.com/key/value/one/two
var request = new XMLHttpRequest();
request.open('GET', 'http://echo.jsontest.com/key/value/one/two', true);
request.send();
request.responseText;//""


//async
//http://echo.jsontest.com/key/value/one/two
var request = new XMLHttpRequest();
request.open('GET', 'http://echo.jsontest.com/key/value/one/two', true);
request.addEventListener('load', function () {
    // body...
    console.log(request.responseText, 'load');
});
request.send();
console.log(request.responseText, 'outside listener');

//readystatechange event and status
var request = new XMLHttpRequest();
var STATE_READY = 4;
var STATUS_SUCCESSS = 200;
request.open('get', 'http://echo.jsontest.com/key/value/one/two', true)
request.onreadystatechange = function () {
    console.log('request.onreadystatechange', request.readyState);
    console.log('request.status', request.status);
  if (request.readyState === STATE_READY && request.status === STATUS_SUCCESSS) {
    console.log(request.responseText);
  }
};
request.send();


//get 
function get(url, cb) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.addEventListener('load', function () {
        console.log(request.status, 'status');
        console.log(request.statusText, 'statusText');
        if(request.status == 200) {
            cb(request.responseText);
        }
    });
    request.send();
}
get('http://echo.jsontest.com/key/value/one/two', function(data) {
    console.log(data);
});

