docker build -f ./dockers/Dockerfile . -t google-contacts-app:latest
docker tag google-contacts-app:latest 774444384523.dkr.ecr.ap-south-1.amazonaws.com/google-contacts-app:latest
docker push 774444384523.dkr.ecr.ap-south-1.amazonaws.com/google-contacts-app