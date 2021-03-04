FROM mysql:5.7

RUN apt-get update -qq \
    && apt-get install -y apt-utils \
                          vim \
                          locales \
    && echo "ja_JP.UTF-8 UTF-8" > /etc/locale.gen \
    && locale-gen ja_JP.UTF-8 \
    && /usr/sbin/update-locale LANG=ja_JP.UTF-8 LANGUAGE="ja_JP:ja" \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

ARG DOCKER_DIR="./docker/db"
ENV LC_ALL ja_JP.UTF-8

COPY ${DOCKER_DIR}/conf.d/my.cnf /etc/mysql/conf.d/my.cnf
COPY ${DOCKER_DIR}/mysql.conf.d/mysqld.cnf /etc/mysql/mysql.conf.d/mysqld.cnf
ADD  ${DOCKER_DIR}/initdb.d /docker-entrypoint-initdb.d

EXPOSE 3306

CMD ["mysqld"]
