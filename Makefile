BIN =./node_modules/.bin

test:
	./node_modules/.bin/mocha --reporter spec

.PHONY: test

clean:
	@rm ./testRead-distilled.md
