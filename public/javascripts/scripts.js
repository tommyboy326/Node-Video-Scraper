$(document).ready(function(){
    $(".video-box").click(function(){
        console.log($(this));
    });
});


// $(function(){
//     $.ajax({
//       url: 'http://localhost:28017/local/andyb',
//       type: 'get',
//       dataType: 'jsonp',
//       jsonp: 'jsonp', // mongod is expecting the parameter name to be called "jsonp"
//       success: function (data) {
//         console.log('success', data);
//       },
//       error: function (XMLHttpRequest, textStatus, errorThrown) {
//         console.log('error', errorThrown);
//       }
//     });
//   })