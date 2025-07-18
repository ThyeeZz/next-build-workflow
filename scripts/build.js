// build.js
const { execSync } = require('child_process');
const args = process.argv.slice(2);

// 解析命令行参数
const envVars = {};
args.forEach(arg => {
  if (arg.startsWith('--env=')) {
    const vars = arg.replace('--env=', '').split(' ');
    vars.forEach(v => {
      const [key, value] = v.split('=');
      if (key && value) {
        envVars[key] = value;
      }
    });
  }
});

// 设置环境变量
Object.entries(envVars).forEach(([key, value]) => {
  process.env[key] = value;
});

// 执行 Next.js 构建
console.log('构建环境变量:', envVars);
execSync('next build', { stdio: 'inherit' });
