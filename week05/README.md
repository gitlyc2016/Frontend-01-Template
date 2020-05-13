# body: 'ok\r\n'  解决思路：
* class TrunkedBodyParser 里面 打印出的 body.content 没有问题，问题可能出现在 class ResponseParser 里面  
  
* 在 this.bodyParser.receiveChar(char); 后面 打印一下  
  
![alt test](https://github.com/gitlyc2016/Frontend-01-Template/blob/master/week05/images/1.png) 
  
  打印结果：  
  
![alt test](https://github.com/gitlyc2016/Frontend-01-Template/blob/master/week05/images/2.png) 
  
* class ResponseParser 的 receive 打印一下  
  
![alt test](https://github.com/gitlyc2016/Frontend-01-Template/blob/master/week05/images/3.png)   

  打印结果：   

![alt test](https://github.com/gitlyc2016/Frontend-01-Template/blob/master/week05/images/4.png) 
  
* 得出结论： body: 'ok\r\n'中的 \r\n 是由于 body 后面区域产生的  
  
![alt test](https://github.com/gitlyc2016/Frontend-01-Template/blob/master/week05/images/5.png) 
  
*  解决方案： ResponseParser 类 下面 的 receive 的 string少循环两次  
  
![alt test](https://github.com/gitlyc2016/Frontend-01-Template/blob/master/week05/images/6.png) 
  
运行结果：  

![alt test](https://github.com/gitlyc2016/Frontend-01-Template/blob/master/week05/images/7.png) 
