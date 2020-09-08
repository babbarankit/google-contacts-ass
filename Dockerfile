FROM babbarankit/node_custom:latest
WORKDIR /apps
EXPOSE 3090
EXPOSE 3010
EXPOSE 6006
CMD tail -f /dev/null