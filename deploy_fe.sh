#!/bin/bash
cd /home/lvrunjia/deploy/topten-fe/tag/
timestamp=`date '+%s'`
git clone https://github.com/rayman-v/topten-fe-dist.git ${timestamp}
ln -s /home/lvrunjia/deploy/topten-fe/tag/${timestamp} /home/lvrunjia/deploy/topten-fe/dist