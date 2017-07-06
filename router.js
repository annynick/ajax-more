//假设域名是localhost, 端口是8080

router.get('/loadMore', function(req, res) {
  var curIdx = req.query.index
  var len = req.query.length
  var data =[]
  for(var i=0;i<len;i++){
    data.push('新闻'+(parseInt(curIdx)+i))

  }
 res.send(data)
  
})



