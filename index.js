var express=require('express');  // 获取第三方插件
var app=express();  //实例化插件方法
//静态资源
app.use(express.static(__dirname + '/public'));//设置静态资源
app.set('port',process.env.PORT || 2001);//设置服务器端口号
//配置默认进入页面
app.get('/',function (req,res) {
    console.log('user in');
    res.type('text/html');
    res.send('<span style="color: green;">- welcome -</span>');
});
//404
app.use(function (req,res) {
    res.type('text/html');
    res.status(404);
    res.send('<span style="color: red;">404 - NOT Found</span>');
});
//500 服务器数据错误 内部逻辑错误
app.use(function (req,res,err,next) {
    console.error(err,stack);
    res.type('text/plain');
    res.status(500);
    res.send('<span style="color: red;">500 -Server Error</span>');
});

app.listen(app.get('port'),function () {
    console.log('Express Started on http://localhost:'+app.get('port')+';press Ctrl + C to terminate');
});