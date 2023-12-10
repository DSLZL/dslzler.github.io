 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '这里看不懂看其他也是没用的';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '只看不做是没用的';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });