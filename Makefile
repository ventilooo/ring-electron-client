deps_linux: dring_linux
	cd ./contrib/ring-daemon/contrib; \
		mkdir native; \
			cd native; \
				../bootstrap && make
dring_linux: 
	cd ./contrib/ring-daemon/; \
		./autogen.sh  
		./configure 
		make with-nodejs
		make install
