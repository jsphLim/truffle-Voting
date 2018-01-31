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
项目环境搭建可以参考文档:http://truffle.tryblockchain.org/
### 1.创建项目目录 
```Bash
mkdir truffle-Voting && cd truffle-Voting
```
### 2.先下载truffle
(前提是安装nodejs和npm 如果你不知道如何安装 请先看https://github.com/jsphLim/VotingSystem）
```Bash
npm install -g truffle
```
### 3.初始化truffle
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
### 4.部署合约
放入自己的合约到contracts目录下，切记不要删除./contract/Migrations.sol合约，它是Truffle用来帮助部署的。<br>
接着,在migrations目录中创建一个2_deploy_contract.js，加入以下内容:<br>
```Bash
var Voting = artifacts.require("Voting");
module.exports = function(deployer) {
  deployer.deploy(Voting); //配置合约的发布
};
```
配置完成后，在控制台输入以下命令来编译合约
```Bash
truffle compile
```
合约编译成功后会在build/contracts中生成一个json文件。<br>
接着输入以下指令来部署合约<br>
```Bash
truffle migrate
```
部署成功的话你会在控制台看到合约的地址。(每次修改合约或者重启都需要重新编译部署)<br>

### 5.ethereum客户端安装，这里我们使用ganache 安装地址:http://truffleframework.com/ganache/<br>
安装完成后启动客户端，可看到如下界面:<br>
![Image text](https://github.com/jsphLim/truffle-Voting/blob/master/doc/2.png)
### 6.安装metamask<br>
metamask是一个浏览器的插件 安装地址: https://metamask.io/ <br>
![Image text](https://github.com/jsphLim/truffle-Voting/blob/master/doc/3.png)<br>
接着点右上角，cunstom RPC<br>
![Image text](https://github.com/jsphLim/truffle-Voting/blob/master/doc/4.png)<br>
接着，从ganache客户端中复制第一个地址的privateKey<br>
回到metamask右上角Import Account<br>
![Image text](https://github.com/jsphLim/truffle-Voting/blob/master/doc/5.png)<br>
基本就配置完毕<br>
## 运行结果
以上配置完毕后，保持ganache和metamask是启动状态，在控制台输入以下指令启动项目
```Bash
npm run dev
```
在浏览器的控制台可以观察项目的一些相关输出用于debug，在网页输入投票人姓名并提交，不出意外的话metamask会自动弹出来让你确认交易,点击submit即可<br>
在ganache中可以看到交易发送的过程。<br>
接下来就是编写js了，这个通过以下文档自学即可:<br>
http://truffleframework.com/docs/
