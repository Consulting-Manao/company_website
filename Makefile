HTMLDIR=public

BASEURL ?=

ifdef BASEURL
        BASEURLARG=-b $(BASEURL)
endif

.PHONY: help clean html serve serve-dev teams teams-clean


help:
	@echo "Please use \`make <target>' where <target> is one of"
	@echo "  html                   to make standalone HTML files"
	@echo "  serve                  to serve the website locally"
	@echo "  serve-dev              to serve the website locally and full rebuilds one change"

clean: ## remove the build artifacts, mainly the "public" directory
	rm -rf $(HTMLDIR)

prepare: clean
	git submodule update --init --recursive

html: prepare ## build the website in ./public
	hugo $(BASEURLARG)

serve: html
	@hugo --i18n-warnings --buildDrafts server

serve-dev: html
	@hugo --i18n-warnings --buildDrafts server --disableFastRender
