#!/bin/bash
git pull && vagrant up && vagrant ssh -c "cd /vagrant && npm start"
