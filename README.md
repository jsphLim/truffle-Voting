## truffle-Voting
## 开发环境
Ubuntu 16.10<br>
web3 0.2.x<br>
ganache<br>
metamask<br>
truffle4.0.5<br>
webstorm<br>

## 写在前面
使用truffle框架开发一个投票系统 原生web3js开发可以先看下之前写的 https://github.com/jsphLim/VotingSystem<br>

## 项目结构
src/ - 你的应用文件运行的默认目录。这里面包括推荐的javascript文件和css样式文件目录. <br>
contract/ - Truffle默认的合约文件存放地址。<br>
migrations/ - 存放发布脚本文件 <br>
test/ - 用来测试应用和合约的测试文件 <br>
truffle.js - Truffle的配置文件 <br>

## 环境搭建
1.创建项目目录 
```Bash
mkdir truffle-Voting && cd truffle-Voting
```
2.先下载truffle
(前提是安装nodejs和npm 如果你不知道如何安装 请先看https://github.com/jsphLim/VotingSystem）
```Bash
npm install -g truffle
```
3.初始化truffle
```Bash
truffle init
```
配置truffle.js
```Bash
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1", 
      port: 7545,
      network_id: "*" // Match any network id
    }
  }
};
```
4.部署合约
放入自己的合约到contracts目录下，切记不要删除./contract/Migrations.sol合约，它是Truffle用来帮助部署的。<br>
接着,在migrations目录中创建一个2_deploy_contract.js，加入以下内容:<br>
```Bash
var Voting = artifacts.require("Voting");
module.exports = function(deployer) {
  deployer.deploy(Voting); //配置合约的发布
};
```
配置完成后，在控制台输入truffle compile，即可编译合约，合约编译成功后会在build/contracts中生成一个json文件。<br>

5.ethereum客户端安装，这里我们使用ganache 安装地址:http://truffleframework.com/ganache/<br>
安装完成后启动客户端，可看到如下界面:<br>
![Image text](https://github.com/jsphLim/truffle-Voting/blob/master/doc/2.png)
6.安装metamask<br>
metamask是一个浏览器的插件 安装地址: https://metamask.io/ <br>
![Image text](https://github.com/jsphLim/truffle-Voting/blob/master/doc/3.png)<br>
接着点右上角，cunstom RPC<br>
![Image text](https://github.com/jsphLim/truffle-Voting/blob/master/doc/4.png)<br>
## 运行结果
