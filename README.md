# groll-cli

> 面向前端工程一整套解决方案，主要解决前端工程中如开发规范、工程脚手架、前端构建、项目部署服务等问题。 

## 实现

1. 使用 `commander` 创建相关命令，`inquirer` 收集用户输入信息；
2. 使用 `download` 从 github 下载相关模板文件；
3. 使用 `metalsmith` 解析模板文件并在指定目录下创建；

## 安装

在控制台执行如下命令：

```
npm install -g git+https://github.com/pxy0809/groll-cli.git
```

如果安装比较慢，建议切换 npm 镜像到淘宝：

```
npm config set registry https://registry.npm.taobao.org
```

安装完成后，请在控制台执行如下命令：

```
groll-cli -v
```

若能够正常输出版本号，则安装成功，若安装失败，请卸载重新安装。

## 起步

1.初始化项目

我们使用 `groll-cli init` 命令来初始化项目：

```
groll-cli init <project-name>
```

`<project-name>`，标识项目名称，可以根据实际情况进行命名。执行 `init` 命令后需要输入有关信息：

```
? Project name (project)
? Project description (Create a project built using Gulp and Rollup.)
? Author ()
? Version (1.0.0)
```

请根据实际情况进行填写项目信息，当然，我们也设置了一些默认的值，你可以不用输入任何信息，直接 `enter` 进行跳过。

2.安装依赖

在创建的项目根目录执行如下命令安装依赖：

```
npm install
```

3.启动服务

启动开发服务器，监听文件变化，并在修改这些文件时重新构建此应用。

```
npm run dev
```

4.浏览

打开浏览器并访问 `http://localhost:8090`，就可以看到应用正常运行。

5.部署

当所有模块均已开发完毕，执行如下命令进行部署打包：

```
npm run build
```

该命令会在项目根目录下生成 `dist` 文件夹，存放所有的打包过后的静态资源。

## 工程结构

`gup` 脚手架工具就是为我们搭建了开发所需要的环境，为我们省去了很多精力。有必要对这个环境进行熟悉，我们就从项目的结构讲起。

```
project
|- build
|	|- html.js
|	|- img.js
|	|- less.js
|	|- rollup.js
|	|- server.js
|	└─ utils.js
|- src		
|	|- assets
|		|- img
|		|- less
|		└─ tpl
|	|- components
|	|- fonts
|	|- mock
|	└─ views
|		└─ index
|			|- index.html
|			|- index.js
|			|- index.less
|			└─ router.js
|- .babelrc
|- .editorconfig
|- .gitignore
|- .postcssrc.js
|- build.config.js
|- gulpfile.js
|- package.json
└─ README.md
```

## 链接

- [commander](https://www.npmjs.com/package/commander)
- [inquirer](https://www.npmjs.com/package/inquirer)
- [download](https://www.npmjs.com/package/download)
- [metalsmith](http://www.metalsmith.io/)
