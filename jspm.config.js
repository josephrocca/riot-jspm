SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    globalEvaluationScope: false,
    transpiler: "plugin-babel",

    map: {
        "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
        "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
        "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
        "cluster": "github:jspm/nodelibs-cluster@0.2.0-alpha",
        "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
        "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
        "dgram": "github:jspm/nodelibs-dgram@0.2.0-alpha",
        "dns": "github:jspm/nodelibs-dns@0.2.0-alpha",
        "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
        "events": "github:jspm/nodelibs-events@0.2.0-alpha",
        "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
        "fsevents": "npm:fsevents@1.0.7",
        "http": "github:jspm/nodelibs-http@0.2.0-alpha",
        "https": "github:jspm/nodelibs-https@0.2.0-alpha",
        "jodid25519": "npm:jodid25519@1.0.2",
        "jsbn": "npm:jsbn@0.1.0",
        "module": "github:jspm/nodelibs-module@0.2.0-alpha",
        "net": "github:jspm/nodelibs-net@0.2.0-alpha",
        "os": "github:jspm/nodelibs-os@0.2.0-alpha",
        "path": "github:jspm/nodelibs-path@0.2.0-alpha",
        "plugin-babel": "npm:systemjs-plugin-babel@0.0.2",
        "process": "github:jspm/nodelibs-process@0.2.0-alpha",
        "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
        "querystring": "github:jspm/nodelibs-querystring@0.2.0-alpha",
        "riot": "npm:riot@2.3.15",
        "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
        "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
        "tag": "npm:systemjs-riot@0.9.0",
        "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
        "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
        "tweetnacl": "npm:tweetnacl@0.13.3",
        "url": "github:jspm/nodelibs-url@0.2.0-alpha",
        "util": "github:jspm/nodelibs-util@0.2.0-alpha",
        "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
        "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
    },

    packages: {
        "riot-jspm": {},
        "github:jspm/nodelibs-buffer@0.2.0-alpha": {
            "map": {
                "buffer-browserify": "npm:buffer@4.4.0"
            }
        },
        "github:jspm/nodelibs-crypto@0.2.0-alpha": {
            "map": {
                "crypto-browserify": "npm:crypto-browserify@3.11.0"
            }
        },
        "github:jspm/nodelibs-http@0.2.0-alpha": {
            "map": {
                "http-browserify": "npm:stream-http@2.1.0"
            }
        },
        "github:jspm/nodelibs-os@0.2.0-alpha": {
            "map": {
                "os-browserify": "npm:os-browserify@0.2.0"
            }
        },
        "github:jspm/nodelibs-punycode@0.2.0-alpha": {
            "map": {
                "punycode-browserify": "npm:punycode@1.3.2"
            }
        },
        "github:jspm/nodelibs-stream@0.2.0-alpha": {
            "map": {
                "stream-browserify": "npm:stream-browserify@2.0.1"
            }
        },
        "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
            "map": {
                "string_decoder-browserify": "npm:string_decoder@0.10.31"
            }
        },
        "github:jspm/nodelibs-url@0.2.0-alpha": {
            "map": {
                "url-browserify": "npm:url@0.11.0"
            }
        },
        "github:jspm/nodelibs-zlib@0.2.0-alpha": {
            "map": {
                "zlib-browserify": "npm:browserify-zlib@0.1.4"
            }
        },
        "npm:anymatch@1.3.0": {
            "map": {
                "arrify": "npm:arrify@1.0.1",
                "micromatch": "npm:micromatch@2.3.7"
            }
        },
        "npm:are-we-there-yet@1.0.6": {
            "map": {
                "delegates": "npm:delegates@1.0.0",
                "readable-stream": "npm:readable-stream@1.1.13"
            }
        },
        "npm:arr-diff@2.0.0": {
            "map": {
                "arr-flatten": "npm:arr-flatten@1.0.1"
            }
        },
        "npm:asn1.js@4.4.0": {
            "map": {
                "bn.js": "npm:bn.js@4.10.1",
                "inherits": "npm:inherits@2.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:aws4@1.2.1": {
            "map": {
                "lru-cache": "npm:lru-cache@2.7.3"
            }
        },
        "npm:bl@1.0.2": {
            "map": {
                "readable-stream": "npm:readable-stream@2.0.5"
            }
        },
        "npm:block-stream@0.0.8": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:boom@2.10.1": {
            "map": {
                "hoek": "npm:hoek@2.16.3"
            }
        },
        "npm:brace-expansion@1.1.2": {
            "map": {
                "balanced-match": "npm:balanced-match@0.3.0",
                "concat-map": "npm:concat-map@0.0.1"
            }
        },
        "npm:braces@1.8.3": {
            "map": {
                "expand-range": "npm:expand-range@1.8.1",
                "preserve": "npm:preserve@0.2.0",
                "repeat-element": "npm:repeat-element@1.1.2"
            }
        },
        "npm:browserify-aes@1.0.6": {
            "map": {
                "buffer-xor": "npm:buffer-xor@1.0.3",
                "cipher-base": "npm:cipher-base@1.0.2",
                "create-hash": "npm:create-hash@1.1.2",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:browserify-cipher@1.0.0": {
            "map": {
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "browserify-des": "npm:browserify-des@1.0.0",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
            }
        },
        "npm:browserify-des@1.0.0": {
            "map": {
                "cipher-base": "npm:cipher-base@1.0.2",
                "des.js": "npm:des.js@1.0.0",
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:browserify-rsa@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.10.1",
                "randombytes": "npm:randombytes@2.0.2"
            }
        },
        "npm:browserify-sign@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.10.1",
                "browserify-rsa": "npm:browserify-rsa@4.0.0",
                "create-hash": "npm:create-hash@1.1.2",
                "create-hmac": "npm:create-hmac@1.1.4",
                "elliptic": "npm:elliptic@6.2.3",
                "inherits": "npm:inherits@2.0.1",
                "parse-asn1": "npm:parse-asn1@5.0.0"
            }
        },
        "npm:browserify-zlib@0.1.4": {
            "map": {
                "pako": "npm:pako@0.2.8",
                "readable-stream": "npm:readable-stream@2.0.5"
            }
        },
        "npm:buffer@4.4.0": {
            "map": {
                "base64-js": "npm:base64-js@1.0.2",
                "ieee754": "npm:ieee754@1.1.6",
                "isarray": "npm:isarray@1.0.0"
            }
        },
        "npm:chalk@1.1.1": {
            "map": {
                "ansi-styles": "npm:ansi-styles@2.1.0",
                "escape-string-regexp": "npm:escape-string-regexp@1.0.4",
                "has-ansi": "npm:has-ansi@2.0.0",
                "strip-ansi": "npm:strip-ansi@3.0.0",
                "supports-color": "npm:supports-color@2.0.0"
            }
        },
        "npm:chokidar@1.4.2": {
            "map": {
                "anymatch": "npm:anymatch@1.3.0",
                "async-each": "npm:async-each@0.1.6",
                "glob-parent": "npm:glob-parent@2.0.0",
                "inherits": "npm:inherits@2.0.1",
                "is-binary-path": "npm:is-binary-path@1.0.1",
                "is-glob": "npm:is-glob@2.0.1",
                "path-is-absolute": "npm:path-is-absolute@1.0.0",
                "readdirp": "npm:readdirp@2.0.0"
            }
        },
        "npm:cipher-base@1.0.2": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:combined-stream@1.0.5": {
            "map": {
                "delayed-stream": "npm:delayed-stream@1.0.0"
            }
        },
        "npm:commander@2.9.0": {
            "map": {
                "graceful-readlink": "npm:graceful-readlink@1.0.1"
            }
        },
        "npm:create-ecdh@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.10.1",
                "elliptic": "npm:elliptic@6.2.3"
            }
        },
        "npm:create-hash@1.1.2": {
            "map": {
                "cipher-base": "npm:cipher-base@1.0.2",
                "inherits": "npm:inherits@2.0.1",
                "ripemd160": "npm:ripemd160@1.0.1",
                "sha.js": "npm:sha.js@2.4.4"
            }
        },
        "npm:create-hmac@1.1.4": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2",
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:cryptiles@2.0.5": {
            "map": {
                "boom": "npm:boom@2.10.1"
            }
        },
        "npm:crypto-browserify@3.11.0": {
            "map": {
                "browserify-cipher": "npm:browserify-cipher@1.0.0",
                "browserify-sign": "npm:browserify-sign@4.0.0",
                "create-ecdh": "npm:create-ecdh@4.0.0",
                "create-hash": "npm:create-hash@1.1.2",
                "create-hmac": "npm:create-hmac@1.1.4",
                "diffie-hellman": "npm:diffie-hellman@5.0.2",
                "inherits": "npm:inherits@2.0.1",
                "pbkdf2": "npm:pbkdf2@3.0.4",
                "public-encrypt": "npm:public-encrypt@4.0.0",
                "randombytes": "npm:randombytes@2.0.2"
            }
        },
        "npm:dashdash@1.12.2": {
            "map": {
                "assert-plus": "npm:assert-plus@0.2.0"
            }
        },
        "npm:des.js@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:diffie-hellman@5.0.2": {
            "map": {
                "bn.js": "npm:bn.js@4.10.1",
                "miller-rabin": "npm:miller-rabin@4.0.0",
                "randombytes": "npm:randombytes@2.0.2"
            }
        },
        "npm:ecc-jsbn@0.1.1": {
            "map": {
                "jsbn": "npm:jsbn@0.1.0"
            }
        },
        "npm:elliptic@6.2.3": {
            "map": {
                "bn.js": "npm:bn.js@4.10.1",
                "brorand": "npm:brorand@1.0.5",
                "hash.js": "npm:hash.js@1.0.3",
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:evp_bytestokey@1.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2"
            }
        },
        "npm:expand-range@1.8.1": {
            "map": {
                "fill-range": "npm:fill-range@2.2.3"
            }
        },
        "npm:extglob@0.3.2": {
            "map": {
                "is-extglob": "npm:is-extglob@1.0.0"
            }
        },
        "npm:fill-range@2.2.3": {
            "map": {
                "is-number": "npm:is-number@2.1.0",
                "isobject": "npm:isobject@2.0.0",
                "randomatic": "npm:randomatic@1.1.5",
                "repeat-element": "npm:repeat-element@1.1.2",
                "repeat-string": "npm:repeat-string@1.5.2"
            }
        },
        "npm:for-own@0.1.3": {
            "map": {
                "for-in": "npm:for-in@0.1.4"
            }
        },
        "npm:form-data@1.0.0-rc3": {
            "map": {
                "async": "npm:async@1.5.2",
                "combined-stream": "npm:combined-stream@1.0.5",
                "mime-types": "npm:mime-types@2.1.9"
            }
        },
        "npm:fsevents@1.0.7": {
            "map": {
                "nan": "npm:nan@2.2.0",
                "node-pre-gyp": "npm:node-pre-gyp@0.6.19"
            }
        },
        "npm:fstream-ignore@1.0.3": {
            "map": {
                "fstream": "npm:fstream@1.0.8",
                "inherits": "npm:inherits@2.0.1",
                "minimatch": "npm:minimatch@3.0.0"
            }
        },
        "npm:fstream@1.0.8": {
            "map": {
                "graceful-fs": "npm:graceful-fs@4.1.3",
                "inherits": "npm:inherits@2.0.1",
                "mkdirp": "npm:mkdirp@0.5.1",
                "rimraf": "npm:rimraf@2.5.1"
            }
        },
        "npm:gauge@1.2.5": {
            "map": {
                "ansi": "npm:ansi@0.3.1",
                "has-unicode": "npm:has-unicode@2.0.0",
                "lodash.pad": "npm:lodash.pad@3.2.2",
                "lodash.padleft": "npm:lodash.padleft@3.1.1",
                "lodash.padright": "npm:lodash.padright@3.1.1"
            }
        },
        "npm:generate-object-property@1.2.0": {
            "map": {
                "is-property": "npm:is-property@1.0.2"
            }
        },
        "npm:glob-base@0.3.0": {
            "map": {
                "glob-parent": "npm:glob-parent@2.0.0",
                "is-glob": "npm:is-glob@2.0.1"
            }
        },
        "npm:glob-parent@2.0.0": {
            "map": {
                "is-glob": "npm:is-glob@2.0.1"
            }
        },
        "npm:glob@6.0.4": {
            "map": {
                "inflight": "npm:inflight@1.0.4",
                "inherits": "npm:inherits@2.0.1",
                "minimatch": "npm:minimatch@3.0.0",
                "once": "npm:once@1.3.3",
                "path-is-absolute": "npm:path-is-absolute@1.0.0"
            }
        },
        "npm:har-validator@2.0.6": {
            "map": {
                "chalk": "npm:chalk@1.1.1",
                "commander": "npm:commander@2.9.0",
                "is-my-json-valid": "npm:is-my-json-valid@2.12.4",
                "pinkie-promise": "npm:pinkie-promise@2.0.0"
            }
        },
        "npm:has-ansi@2.0.0": {
            "map": {
                "ansi-regex": "npm:ansi-regex@2.0.0"
            }
        },
        "npm:hash.js@1.0.3": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:hawk@3.1.3": {
            "map": {
                "boom": "npm:boom@2.10.1",
                "cryptiles": "npm:cryptiles@2.0.5",
                "hoek": "npm:hoek@2.16.3",
                "sntp": "npm:sntp@1.0.9"
            }
        },
        "npm:http-signature@1.1.1": {
            "map": {
                "assert-plus": "npm:assert-plus@0.2.0",
                "jsprim": "npm:jsprim@1.2.2",
                "sshpk": "npm:sshpk@1.7.3"
            }
        },
        "npm:inflight@1.0.4": {
            "map": {
                "once": "npm:once@1.3.3",
                "wrappy": "npm:wrappy@1.0.1"
            }
        },
        "npm:is-binary-path@1.0.1": {
            "map": {
                "binary-extensions": "npm:binary-extensions@1.4.0"
            }
        },
        "npm:is-equal-shallow@0.1.3": {
            "map": {
                "is-primitive": "npm:is-primitive@2.0.0"
            }
        },
        "npm:is-glob@2.0.1": {
            "map": {
                "is-extglob": "npm:is-extglob@1.0.0"
            }
        },
        "npm:is-my-json-valid@2.12.4": {
            "map": {
                "generate-function": "npm:generate-function@2.0.0",
                "generate-object-property": "npm:generate-object-property@1.2.0",
                "jsonpointer": "npm:jsonpointer@2.0.0",
                "xtend": "npm:xtend@4.0.1"
            }
        },
        "npm:is-number@2.1.0": {
            "map": {
                "kind-of": "npm:kind-of@3.0.2"
            }
        },
        "npm:isobject@2.0.0": {
            "map": {
                "isarray": "npm:isarray@0.0.1"
            }
        },
        "npm:jodid25519@1.0.2": {
            "map": {
                "jsbn": "npm:jsbn@0.1.0"
            }
        },
        "npm:jsprim@1.2.2": {
            "map": {
                "extsprintf": "npm:extsprintf@1.0.2",
                "json-schema": "npm:json-schema@0.2.2",
                "verror": "npm:verror@1.3.6"
            }
        },
        "npm:kind-of@3.0.2": {
            "map": {
                "is-buffer": "npm:is-buffer@1.1.2"
            }
        },
        "npm:levn@0.2.5": {
            "map": {
                "prelude-ls": "npm:prelude-ls@1.1.2",
                "type-check": "npm:type-check@0.3.2"
            }
        },
        "npm:lodash._createpadding@3.6.1": {
            "map": {
                "lodash.repeat": "npm:lodash.repeat@3.1.2"
            }
        },
        "npm:lodash.pad@3.2.2": {
            "map": {
                "lodash.repeat": "npm:lodash.repeat@3.1.2"
            }
        },
        "npm:lodash.padleft@3.1.1": {
            "map": {
                "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
                "lodash._createpadding": "npm:lodash._createpadding@3.6.1"
            }
        },
        "npm:lodash.padright@3.1.1": {
            "map": {
                "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
                "lodash._createpadding": "npm:lodash._createpadding@3.6.1"
            }
        },
        "npm:micromatch@2.3.7": {
            "map": {
                "arr-diff": "npm:arr-diff@2.0.0",
                "array-unique": "npm:array-unique@0.2.1",
                "braces": "npm:braces@1.8.3",
                "expand-brackets": "npm:expand-brackets@0.1.4",
                "extglob": "npm:extglob@0.3.2",
                "filename-regex": "npm:filename-regex@2.0.0",
                "is-extglob": "npm:is-extglob@1.0.0",
                "is-glob": "npm:is-glob@2.0.1",
                "kind-of": "npm:kind-of@3.0.2",
                "normalize-path": "npm:normalize-path@2.0.1",
                "object.omit": "npm:object.omit@2.0.0",
                "parse-glob": "npm:parse-glob@3.0.4",
                "regex-cache": "npm:regex-cache@0.4.2"
            }
        },
        "npm:miller-rabin@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.10.1",
                "brorand": "npm:brorand@1.0.5"
            }
        },
        "npm:mime-types@2.1.9": {
            "map": {
                "mime-db": "npm:mime-db@1.21.0"
            }
        },
        "npm:minimatch@2.0.10": {
            "map": {
                "brace-expansion": "npm:brace-expansion@1.1.2"
            }
        },
        "npm:minimatch@3.0.0": {
            "map": {
                "brace-expansion": "npm:brace-expansion@1.1.2"
            }
        },
        "npm:mkdirp@0.5.1": {
            "map": {
                "minimist": "npm:minimist@0.0.8"
            }
        },
        "npm:node-pre-gyp@0.6.19": {
            "map": {
                "mkdirp": "npm:mkdirp@0.5.1",
                "nopt": "npm:nopt@3.0.6",
                "npmlog": "npm:npmlog@2.0.2",
                "rc": "npm:rc@1.1.6",
                "request": "npm:request@2.69.0",
                "rimraf": "npm:rimraf@2.5.1",
                "semver": "npm:semver@5.1.0",
                "tar": "npm:tar@2.2.1",
                "tar-pack": "npm:tar-pack@3.1.2"
            }
        },
        "npm:nopt@3.0.6": {
            "map": {
                "abbrev": "npm:abbrev@1.0.7"
            }
        },
        "npm:npmlog@2.0.2": {
            "map": {
                "ansi": "npm:ansi@0.3.1",
                "are-we-there-yet": "npm:are-we-there-yet@1.0.6",
                "gauge": "npm:gauge@1.2.5"
            }
        },
        "npm:object.omit@2.0.0": {
            "map": {
                "for-own": "npm:for-own@0.1.3",
                "is-extendable": "npm:is-extendable@0.1.1"
            }
        },
        "npm:once@1.3.3": {
            "map": {
                "wrappy": "npm:wrappy@1.0.1"
            }
        },
        "npm:optionator@0.7.1": {
            "map": {
                "deep-is": "npm:deep-is@0.1.3",
                "fast-levenshtein": "npm:fast-levenshtein@1.0.7",
                "levn": "npm:levn@0.2.5",
                "prelude-ls": "npm:prelude-ls@1.1.2",
                "type-check": "npm:type-check@0.3.2",
                "wordwrap": "npm:wordwrap@1.0.0"
            }
        },
        "npm:parse-asn1@5.0.0": {
            "map": {
                "asn1.js": "npm:asn1.js@4.4.0",
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "create-hash": "npm:create-hash@1.1.2",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "pbkdf2": "npm:pbkdf2@3.0.4"
            }
        },
        "npm:parse-glob@3.0.4": {
            "map": {
                "glob-base": "npm:glob-base@0.3.0",
                "is-dotfile": "npm:is-dotfile@1.0.2",
                "is-extglob": "npm:is-extglob@1.0.0",
                "is-glob": "npm:is-glob@2.0.1"
            }
        },
        "npm:pbkdf2@3.0.4": {
            "map": {
                "create-hmac": "npm:create-hmac@1.1.4"
            }
        },
        "npm:pinkie-promise@2.0.0": {
            "map": {
                "pinkie": "npm:pinkie@2.0.4"
            }
        },
        "npm:public-encrypt@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.10.1",
                "browserify-rsa": "npm:browserify-rsa@4.0.0",
                "create-hash": "npm:create-hash@1.1.2",
                "parse-asn1": "npm:parse-asn1@5.0.0",
                "randombytes": "npm:randombytes@2.0.2"
            }
        },
        "npm:randomatic@1.1.5": {
            "map": {
                "is-number": "npm:is-number@2.1.0",
                "kind-of": "npm:kind-of@3.0.2"
            }
        },
        "npm:rc@1.1.6": {
            "map": {
                "deep-extend": "npm:deep-extend@0.4.1",
                "ini": "npm:ini@1.3.4",
                "minimist": "npm:minimist@1.2.0",
                "strip-json-comments": "npm:strip-json-comments@1.0.4"
            }
        },
        "npm:readable-stream@1.1.13": {
            "map": {
                "core-util-is": "npm:core-util-is@1.0.2",
                "inherits": "npm:inherits@2.0.1",
                "isarray": "npm:isarray@0.0.1",
                "stream-browserify": "npm:stream-browserify@1.0.0",
                "string_decoder": "npm:string_decoder@0.10.31"
            }
        },
        "npm:readable-stream@2.0.5": {
            "map": {
                "core-util-is": "npm:core-util-is@1.0.2",
                "inherits": "npm:inherits@2.0.1",
                "isarray": "npm:isarray@0.0.1",
                "process-nextick-args": "npm:process-nextick-args@1.0.6",
                "string_decoder": "npm:string_decoder@0.10.31",
                "util-deprecate": "npm:util-deprecate@1.0.2"
            }
        },
        "npm:readdirp@2.0.0": {
            "map": {
                "graceful-fs": "npm:graceful-fs@4.1.3",
                "minimatch": "npm:minimatch@2.0.10",
                "readable-stream": "npm:readable-stream@2.0.5"
            }
        },
        "npm:regex-cache@0.4.2": {
            "map": {
                "is-equal-shallow": "npm:is-equal-shallow@0.1.3",
                "is-primitive": "npm:is-primitive@2.0.0"
            }
        },
        "npm:request@2.69.0": {
            "map": {
                "aws-sign2": "npm:aws-sign2@0.6.0",
                "aws4": "npm:aws4@1.2.1",
                "bl": "npm:bl@1.0.2",
                "caseless": "npm:caseless@0.11.0",
                "combined-stream": "npm:combined-stream@1.0.5",
                "extend": "npm:extend@3.0.0",
                "forever-agent": "npm:forever-agent@0.6.1",
                "form-data": "npm:form-data@1.0.0-rc3",
                "har-validator": "npm:har-validator@2.0.6",
                "hawk": "npm:hawk@3.1.3",
                "http-signature": "npm:http-signature@1.1.1",
                "is-typedarray": "npm:is-typedarray@1.0.0",
                "isstream": "npm:isstream@0.1.2",
                "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
                "mime-types": "npm:mime-types@2.1.9",
                "node-uuid": "npm:node-uuid@1.4.7",
                "oauth-sign": "npm:oauth-sign@0.8.1",
                "qs": "npm:qs@6.0.2",
                "stringstream": "npm:stringstream@0.0.5",
                "tough-cookie": "npm:tough-cookie@2.2.1",
                "tunnel-agent": "npm:tunnel-agent@0.4.2"
            }
        },
        "npm:rimraf@2.4.5": {
            "map": {
                "glob": "npm:glob@6.0.4"
            }
        },
        "npm:rimraf@2.5.1": {
            "map": {
                "glob": "npm:glob@6.0.4"
            }
        },
        "npm:riot-cli@2.3.14": {
            "map": {
                "chalk": "npm:chalk@1.1.1",
                "chokidar": "npm:chokidar@1.4.2",
                "co": "npm:co@4.6.0",
                "optionator": "npm:optionator@0.7.1",
                "riot-compiler": "npm:riot-compiler@2.3.22",
                "rollup": "npm:rollup@0.21.3",
                "shelljs": "npm:shelljs@0.5.3"
            }
        },
        "npm:riot-route@2.3.15": {
            "map": {
                "riot-observable": "npm:riot-observable@2.3.14"
            }
        },
        "npm:riot@2.3.15": {
            "map": {
                "riot-cli": "npm:riot-cli@2.3.14",
                "riot-compiler": "npm:riot-compiler@2.3.22",
                "riot-observable": "npm:riot-observable@2.3.14",
                "riot-route": "npm:riot-route@2.3.15",
                "riot-tmpl": "npm:riot-tmpl@2.3.21",
                "simple-dom": "npm:simple-dom@0.2.7",
                "simple-html-tokenizer": "npm:simple-html-tokenizer@0.2.1"
            }
        },
        "npm:rollup@0.21.3": {
            "map": {
                "chalk": "npm:chalk@1.1.1",
                "minimist": "npm:minimist@1.2.0",
                "source-map-support": "npm:source-map-support@0.3.3"
            }
        },
        "npm:sha.js@2.4.4": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:sntp@1.0.9": {
            "map": {
                "hoek": "npm:hoek@2.16.3"
            }
        },
        "npm:source-map-support@0.3.3": {
            "map": {
                "source-map": "npm:source-map@0.1.32"
            }
        },
        "npm:source-map@0.1.32": {
            "map": {
                "amdefine": "npm:amdefine@1.0.0"
            }
        },
        "npm:sshpk@1.7.3": {
            "map": {
                "asn1": "npm:asn1@0.2.3",
                "assert-plus": "npm:assert-plus@0.2.0",
                "dashdash": "npm:dashdash@1.12.2"
            }
        },
        "npm:stream-browserify@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "readable-stream": "npm:readable-stream@1.1.13"
            }
        },
        "npm:stream-browserify@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "readable-stream": "npm:readable-stream@2.0.5"
            }
        },
        "npm:stream-http@2.1.0": {
            "map": {
                "builtin-status-codes": "npm:builtin-status-codes@1.0.0",
                "inherits": "npm:inherits@2.0.1",
                "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
                "xtend": "npm:xtend@4.0.1"
            }
        },
        "npm:strip-ansi@3.0.0": {
            "map": {
                "ansi-regex": "npm:ansi-regex@2.0.0"
            }
        },
        "npm:tar-pack@3.1.2": {
            "map": {
                "debug": "npm:debug@0.7.4",
                "fstream": "npm:fstream@1.0.8",
                "fstream-ignore": "npm:fstream-ignore@1.0.3",
                "once": "npm:once@1.1.1",
                "readable-stream": "npm:readable-stream@2.0.5",
                "rimraf": "npm:rimraf@2.4.5",
                "tar": "npm:tar@2.2.1",
                "uid-number": "npm:uid-number@0.0.3"
            }
        },
        "npm:tar@2.2.1": {
            "map": {
                "block-stream": "npm:block-stream@0.0.8",
                "fstream": "npm:fstream@1.0.8",
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:type-check@0.3.2": {
            "map": {
                "prelude-ls": "npm:prelude-ls@1.1.2"
            }
        },
        "npm:url@0.11.0": {
            "map": {
                "punycode": "npm:punycode@1.3.2",
                "querystring": "npm:querystring@0.2.0"
            }
        },
        "npm:verror@1.3.6": {
            "map": {
                "extsprintf": "npm:extsprintf@1.0.2"
            }
        },
        "npm:systemjs-riot@0.9.0": {
            "map": {
                "riot-compiler": "npm:riot-compiler@2.3.22"
            }
        }
    }
});