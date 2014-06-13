MAC_RESOURCES = binaries/Atom.app/Contents/Resources

clean:
	@rm -rf $(MAC_RESOURCES)/app

build:
	@cd $(MAC_RESOURCES) && mkdir -p app && cd -
	@cp index.html $(MAC_RESOURCES)/app
	@cp main.js $(MAC_RESOURCES)/app
	@cp -r build $(MAC_RESOURCES)/app
	@cp package.json $(MAC_RESOURCES)/app
	@cd $(MAC_RESOURCES)/app && npm install

release: clean build

.PHONY: clean build release