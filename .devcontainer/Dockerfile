FROM mcr.microsoft.com/devcontainers/typescript-node:20

ENV HOME="/home/node"

RUN apt-get update \
  && apt-get install -y awscli vim

RUN curl https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash -o $HOME/.git-completion.bash \
  && echo "source $HOME/.git-completion.bash" >> $HOME/.zshrc
