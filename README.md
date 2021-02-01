# Northeastern University CS 4530 + CS 5500 Spring 2021 Website Source
*This is not the website for the class*, but instead is the source code for the website. The website is located at [https://neu-se.github.io/CS4530-CS5500-Spring-2021/](https://neu-se.github.io/CS4530-CS5500-Spring-2021/).

### License
All materials in this repository (the lectures, assignments, and also the site itself) are released under the [Creative Commons Attribution-ShareAlike 4.0 License](https://creativecommons.org/licenses/by-sa/4.0/). Please feel free to reuse or remix
these materials in your class (and suggest you peruse the [detailed course outline](https://neu-se.github.io/CS4530-CS5500-Spring-2021/outline) to get a better sense of the topics). If you do, we'd love to hear your thoughts.


### Local development environment
This site is built using [Kevin Lin's the Just the Class template](https://kevinl.info/just-the-class/).
Just the Class is built for [Jekyll](https://jekyllrb.com), a static site generator. View the [quick start guide](https://jekyllrb.com/docs/) for more information. 

Windows requires an [additional step](https://jekyllrb.com/docs/installation/windows/#autoregeneration) in the Jekyll install. To do this, say

    gem install wdm

in the shell, and insert the following line

    gem 'wdm', '~> 0.1.1', :install_if => Gem.win_platform?

in the file called `Gemfile` in the root directory of this document.


Other than that, Just the Docs requires no special Jekyll plugins and can run on GitHub Pages' standard Jekyll compiler.



1. Follow the GitHub documentation for [Setting up your GitHub Pages site locally with Jekyll](https://help.github.com/en/articles/setting-up-your-github-pages-site-locally-with-jekyll).
1. Start your local Jekyll server.
```bash
$ bundle exec jekyll serve
```
1. Point your web browser to [http://localhost:4000/CS4530-CS5500-Spring-2021/](http://localhost:4000/CS4530-CS5500-Spring-2021/)
1. Reload your web browser after making a change to preview its effect.

For more information, refer to [Just the Docs](https://pmarsceill.github.io/just-the-docs/).
