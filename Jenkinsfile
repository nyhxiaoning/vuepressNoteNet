node {
	checkout scm
  	docker.image('node:14-alpine').inside('-v $HOME/node_modules:/node_modules -p 3000:3000') {
	    stage('Build') {
	      sh 'yarn config set registry https://registry.npm.taobao.org'  //设置国内服务，加速下载
	      sh 'yarn -v'  //查看版本
	      sh 'yarn'  //下载包
	      sh 'yarn build' //编译打包
	      sh 'ls -l'   //查看目录结构
	    }
	}
}
