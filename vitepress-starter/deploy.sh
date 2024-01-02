#!use/bin/env sh
###
 # @Author: dushuai
 # @Date: 2024-01-02 11:53:53
 # @LastEditors: dushuai
 # @LastEditTime: 2024-01-02 15:19:36
 # @description: 心平气和
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init

git add -A

git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/
# git push -f git@github.com:dshuais/danmaku-vue.github.io.git master:gh-pages
git push -f https://github.com/dshuais/danmaku-vue.github.io.git master:gh-pages

cd -
