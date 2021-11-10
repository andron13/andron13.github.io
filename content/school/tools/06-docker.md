docker login
docker logout
docker run hello-world
docker pull busybox
docker images
docker run busybox
docker run busybox echo "hello from busybox"
docker ps
docker ps -a
docker run -it busybox sh
docker run --help
docker rm 7e5790795c19 
docker rm $(docker ps -a -q -f status=exited)
docker run --rm
docker rmi

docker run prakhar1989/static-site

detached mode.
docker run -d -P --name static-site prakhar1989/static-site e61d12292d69556eabe2a44c16cbd54486b2527e2ce4f95438e504afb7b02810

docker port static-site

docker run -p 8888:80 prakhar1989/static-site

docker build -t andron13/catnip .
docker run -p 8888:5000 andron13/catnip
docker push andron13/catnip

docker stop $(docker ps -a -q)