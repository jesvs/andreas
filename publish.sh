#!/bin/bash

# updates the public website on andreasitalian.com

rsync -avz -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --progress public/ andreasitalian.com:/var/www/andreas/