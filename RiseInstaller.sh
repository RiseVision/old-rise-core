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
elif [[ `lsb_release -i -s` == 'Ubuntu' ]]; then
    platform='ubuntu'
    echo "Ubuntu detected - installing Rise-Core"

   	#Install pre-reqs
	curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
	sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" >> /etc/apt/sources.list.d/pgdg.list'
    wget -q https://www.postgresql.org/media/keys/ACCC4CF8.asc -O - | sudo apt-key add -

    sudo apt-get purge -y nodejs
    sudo apt-get purge -y postgresql*

	# Install Postgres, Node, Git
	sudo apt-get update
	sudo apt-get install -y nodejs postgresql postgresql-contrib libpq-dev git build-essential

	# Configure Postgres
	sudo -u postgres psql -c "CREATE DATABASE rise_testnet;"
	sudo -u postgres psql -c "CREATE USER risetest WITH PASSWORD 'risetestpassword';"
	sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE rise_testnet TO risetest;"

echo "configuring NTP"
#Install NTP or Chrony for Time Management - Physical Machines only
if [[ "$(uname)" == "Linux" ]]; then
    if [[ -f "/etc/debian_version" &&  ! -f "/proc/user_beancounters" ]]; then
        if sudo pgrep -x "ntpd" > /dev/null; then
            echo "√ NTP is running"
        else
            echo "X NTP is not running"
            read -r -n 1 -p "Would like to install NTP? (y/n): " $REPLY
            if [[  $REPLY =~ ^[Yy]$ ]]; then
                echo -e "\nInstalling NTP, please provide sudo password.\n"
                sudo apt-get install ntp -yyq
                sudo service ntp stop
                sudo ntpdate pool.ntp.org
                sudo service ntp start
                if sudo pgrep -x "ntpd" > /dev/null; then
                    echo "√ NTP is running"
                else
                    echo -e "\nLisk requires NTP running on Debian based systems. Please check /etc/ntp.conf and correct any issues."
                    exit 0
                fi
            else
                echo -e "\nLisk requires NTP on Debian based systems, exiting."
                exit 0
            fi
        fi #End Debian Checks
    elif [[ -f "/etc/redhat-release" &&  ! -f "/proc/user_beancounters" ]]; then
        if sudo pgrep -x "ntpd" > /dev/null; then
            echo "√ NTP is running"
        else
            if sudo pgrep -x "chronyd" > /dev/null; then
                echo "√ Chrony is running"
            else
                echo "X NTP and Chrony are not running"
                echo -e "\nInstalling NTP, please provide sudo password.\n"
                sudo yum -yq install ntp ntpdate ntp-doc
                sudo chkconfig ntpd on
                sudo service ntpd stop
                sudo ntpdate pool.ntp.org
                sudo service ntpd start
                if pgrep -x "ntpd" > /dev/null; then
                    echo "√ NTP is running"
                else
                    echo -e "\nLisk requires NTP running on Debian based systems. Please check /etc/ntp.conf and correct any issues."
                    exit 0
                fi
            fi
        fi #End Redhat Checks
    elif [[ -f "/proc/user_beancounters" ]]; then
        echo "_ Running OpenVZ VM, NTP and Chrony are not required"
    fi
    elif [[ "$(uname)" == "FreeBSD" ]]; then
        if sudo pgrep -x "ntpd" > /dev/null; then
            echo "√ NTP is running"
        else
            echo "X NTP is not running"

            echo -e "\nInstalling NTP, please provide sudo password.\n"
            sudo pkg install ntp
            sudo sh -c "echo 'ntpd_enable=\"YES\"' >> /etc/rc.conf"
            sudo ntpdate -u pool.ntp.org
            sudo service ntpd start
            if pgrep -x "ntpd" > /dev/null; then
                echo "√ NTP is running"
            else
                echo -e "\nLisk requires NTP running on FreeBSD based systems. Please check /etc/ntp.conf and correct any issues."
                exit 0
            fi
        fi
    fi #End FreeBSD Checks
elif [[ "$(uname)" == "Darwin" ]]; then
    if pgrep -x "ntpd" > /dev/null; then
        echo "√ NTP is running"
    else
        sudo launchctl load /System/Library/LaunchDaemons/org.ntp.ntpd.plist
        sleep 1
        if pgrep -x "ntpd" > /dev/null; then
            echo "√ NTP is running"
        else
            echo -e "\nNTP did not start, Please verify its configured on your system"
            exit 0
        fi
    fi  #End Darwin Checks
fi #End NTP Checks
echo ""
echo ""

# Download Release
git clone https://bitbucket.org/risevisionfoundation/rise-core.git

# Configure
echo "Installing Dependencies for Rise-Core"
cd rise-core
sudo npm install -g forever
npm install

echo "Installing Dependencies for Web-UI"
cd public
npm install

cd ../
npm start

forever list
echo "You should rise-core running in the above list"
echo ""
echo "Run the following command to start Rise-Core on Testnet if you need to start Rise-Core after a reboot. You will
 need to be in the rise-core directory"
echo "npm start"
echo ""
echo "Exiting"
exit 1