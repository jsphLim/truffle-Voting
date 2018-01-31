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
4.部署合约
放入自己的合约到contracts目录下，切记不要删除./contract/Migrations.sol合约，它是Truffle用来帮助部署的。<br>
接着,在migrations目录中创建一个2_deploy_contract.js，加入以下内容:<br>
```Bash
var Voting = artifacts.require("Voting");
module.exports = function(deployer) {
  deployer.deploy(Voting); //配置合约的发布
};
```


## 运行结果
