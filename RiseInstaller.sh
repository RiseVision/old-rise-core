#!/bin/bash

platform='unknown'
unamestr=`uname`
if [[ $unamestr == 'Darwin' ]]; then
   platform='dawrin'
   	echo "OS X detected - installing Rise-Core"
	#Install pre-reqs
	/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

	brew install git node

	# Install Postgres
	echo "Downloading Postgres.app, unzipping it, and putting it into Applications"
	curl -s "https://rise.vision/cdn/Postgres.zip"

	unzip Postgres.zip
	mv Postgres.app /Applications
	echo "Please enter your sudo password"
	sudo spctl --master-disable
	open -a Postgres
	sudo spctl --master-enable
	# Configure Postgres
	psql -U $USER -c "CREATE DATABASE rise_testnet;"
	psql -U $USER -c "CREATE USER risetest WITH PASSWORD 'risetestpassword';"
	psql -U $USER -c "GRANT ALL PRIVILEGES ON DATABASE rise_testnet TO risetest;"
	# Download Release
	git clone https://bitbucket.org/risevisionfoundation/rise-core.git

	# Configure
	cd rise-core
	npm install

	cd public
	npm install

	cd ../
	
elif [[ `lsb_release -i -s` == 'Ubuntu' ]]; then
   platform='ubuntu'
   echo "Ubuntu detected - installing Rise-Core"

   	#Install pre-reqs
	curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

	# Install Postgres, Node, Git
	sudo apt-get update
	sudo apt-get install -y nodejs postgresql git

	# Configure Postgres
	sudo -u postgres psql -c "CREATE DATABASE rise_testnet;"
	sudo -u postgres psql -c "CREATE USER risetest WITH PASSWORD 'risetestpassword';"
	sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE rise_testnet TO risetest;"
	# Download Release
	git clone https://bitbucket.org/risevisionfoundation/rise-core.git

	# Configure
	echo "Installing Dependencies for Rise-Core"
	cd rise-core
	npm install

	echo "Installing Dependencies for Web-UI"
	cd public
	npm install

	cd ../

	echo ""
	echo ""
	echo "Run node app.js to start Rise-Core on Testnet"
fi

echo ""
echo "Exiting"