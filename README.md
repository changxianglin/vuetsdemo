# vuetsdemo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Project instruction
1. 安装 vue-cli 工具
2. 创建 vue 项目
    vue create 项目名  默认安装即可
3. 在 vue 项目中添加 typescript
    vue add @vue/typescript 全部选 y 即可
4. 关闭项目声明未使用检查 eslint
    在 package.json 中找到 rules 中找到 "no-unused-vars" 改成 0,如没有则添加。