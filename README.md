# A Simple "Hello World" with JSPM and Riot.js

Hello! Here's the quick guide to get up and running with JSPM and Riot.js.

Please note that this tutorial was written for JSPM v0.17 beta. If something doesn't quite work, it's probably best to check the up-to-date "getting started" tutorials at [jspm.io](http://jspm.io/), and [riot-systemjs on npm](https://www.npmjs.com/package/systemjs-riot)

In this tutorial, we'll just be doing 3 things:

1. Install NPM and JSPM
2. Install riot and a jspm plugin which allows us to easily import our riot tags.
3. Make our `index.html`, `main.js` and `app.tag` files.

## Install NPM and JSPM
You'll need to first [install node.js](https://nodejs.org) if you haven't already. Then we'll just make a new directory and jump into it:
```
mkdir riot-jspm
cd riot-jspm
```

Initialise the Node Package Manager in this new folder (just use the default settings):
```
npm init
```

Install JSPM. Note that as I write this, JSPM v0.17 is in beta. To use this we need to install `jspm@beta` instead of just `jspm`. After 0.17 is released officially, you can omit the "`@beta`" part.
```
npm install jspm@beta --save
```

Next, we'll initialise JSPM (just use the default settings):
```
jspm init
```

## Install Riot and Plugin
Now that we've got jspm installed, we can use it to install riot.js. That's as simple as executing:
```
jspm install riot
```
Note that we don't need to use "--save" with JSPM. Riot is saved to our dependencies (in package.js under the "jspm" key) by default.

And now that we've got riot installed, we'll install a plugin for JSPM which lets us `import` riot tags (all thanks to [@amenadiel](https://github.com/amenadiel)!):
```
jspm install tag=npm:systemjs-riot
```
Note that the `tag=` part simply tells jspm that files ending in the ".tag" extension should be passed to this plugin for processing.

## Create Hello World Files
Great! We're done installing npm, jspm, riot, and the plugin for importing ".tag" files. Now we can simply create three files:

1. Our main page that the user visits: `index.html`
2. The "triggering" script which starts our app in motion: `main.js`.
3. Our custom tag (riot component): `app.tag`

Here's `index.html`:
```
<!doctype html>
<meta charset="utf-8">
<script src="/jspm_packages/system.js"></script>
<script src="/jspm.browser.js"></script>
<script src="/jspm.config.js"></script>
<body>
  <app></app>
  <script> SystemJS.import("main"); </script>
</body>
```

Here's `main.js`:
```
import riot from 'riot';
import 'app.tag!';
riot.mount('app', {title:"Hello, JSPM and Riot!"});
```

And here's `app.tag`:
```
<app>
  <h3>{ opts.title }</h3>
  <p>{ subtitle }</p>
  <ul>
    <li each={ list }>{ name }</li>
  </ul>

  <script>
    this.subtitle = 'Easy, right?';
    this.list = [
      { name: 'my' },
      { name: 'little' },
      { name: 'list' }
    ];
  </script>

  <style scoped>
    :scope { font-size: 2rem }
    h3 { color: #444 }
    ul { color: #999 }
  </style>
</app>
```

And that's it! All you need to do now is start a simple http server in this riot-jspm folder, and view it. If you don't know how to do that, it's as simple as installing `http-server` and then running it in the riot-jspm directory:
```
npm install http-server -g
http-server
```
And then it'll give you an address to type into your web browser.

## Keep reading

 - The [System.js repo](https://github.com/systemjs/systemjs) has [great explanations](https://github.com/systemjs/systemjs/tree/master/docs) of the config files which are definitely worth reading.
 - [jspm.io](http://jspm.io) has a guide for each major release - you'll probably run into problems if you don't invest the time in reading it.
 - Cédric Tran-Xuan at [streamdata.io](http://streamdata.io) has a [great series of introductory posts](http://streamdata.io/blog/exploring-riot-js-part1/) on Riot.js.
 - Of course, the official [Riot.js guide](http://riotjs.com/guide/) is definitely worth reading if you haven't already.
