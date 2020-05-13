#每周总结可以写在这里
## 收获
* WebHTTP 理解比以前更深入
* 报错时，根据提示信息分析定位问题的能力得到提升


##    body: 'ok\r\n'  解决思路：
* class TrunkedBodyParser 里面 打印出的 body.content 没有问题，问题可能出现在 class ResponseParser 里面
* 在 this.bodyParser.receiveChar(char); 后面 打印一下  
![alt test]("./images/1.png")  
打印结果：  
![alt test]("./images/2.png")  
  
  
  
  
 * class ResponseParser 的 receive 打印一下  
![alt test]("./images/3.png")  
打印结果：  
![alt test]("./images/4.png")  

得出结论： body: 'ok\r\n'中的 \r\n 是由于 body 后面区域产生的  
![alt test]("./images/5.png")   

解决方案： ResponseParser 类 下面 的 receive 的 string少循环两次  
![alt test]("./images/6.png")  

运行结果：
![alt test]("./images/7.png") 
