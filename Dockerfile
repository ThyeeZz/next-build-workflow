# Dockerfile
# 使用轻量级 Node 镜像作为运行时
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制构建好的应用文件
COPY .next /app/.next
COPY public /app/public
COPY package.json /app/package.json
COPY next.config.ts /app/next.config.ts
COPY node_modules /app/node_modules
COPY bin /app/bin

# 暴露端口并启动应用
EXPOSE 80

CMD ["/bin/sh", "/app/bin/start.sh"]
