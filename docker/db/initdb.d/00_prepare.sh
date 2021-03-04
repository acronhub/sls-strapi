#!/bin/bash -e

echo "START initdb prepare.sh"

# 権限設定
mysql -u root -p$MYSQL_ROOT_PASSWORD -e "GRANT ALL ON *.* TO $MYSQL_USER@'%' IDENTIFIED BY '$MYSQL_PASSWORD' ;"
