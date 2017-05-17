#!/bin/bash

export PORT=80
touch .id
touch todo.list
sudo -E nohup ./bin/www > ./app.log  2>&1 &
