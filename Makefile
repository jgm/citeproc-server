all:
	cabal install --install-method=copy --installdir=. --overwrite-policy=always

clean:
	rm -f ./citeproc-server
	cabal clean

.PHONY: all clean
