echo Configurando

docker build -t gusflopes/debug-webhook .

docker run -d -p 6100:6000 --name webhook-debug gusflopes/debug-webhook
