# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty32"

  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.network "forwarded_port", guest: 8081, host: 8081

  config.vm.provision "shell", inline: <<-SHELL
    #Update sources.
    sudo apt-get update

    #Install Node
    sudo apt-get install -y nodejs
    sudo ln -s /usr/bin/nodejs /usr/bin/node
    sudo apt-get install -y npm

    #Install support tools
    sudo apt-get install -y git
    sudo apt-get install -y build-essential

    #Run the app
    cd /vagrant && npm install
  SHELL

end
