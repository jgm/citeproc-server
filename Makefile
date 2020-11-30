all:
	cabal install --install-method=copy --installdir=.

update-styles:
	mkdir -p styles; \
	i=1; for x in ~/src/styles/*.csl; do cp $$x styles/$$(printf "%04d" $$i).csl; i=$$((i+1)); done
