/*
 * Balller.js
 *
 * Copyright 2013, Daryl Ginn - http://daryl.im
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Github:  http://github.com/daryl/Balller
 * Version: 1.0
 */

;(function(Balller, window, document) {

  'use strict';

  var tmp, api,

  derulo = function(url, back) {
    var k, s, h;
    window._jsonpk || (window._jsonpk = 0);
    url += (url.match(/\?/, url) ? '&' : '?');
    k = 'jsonpee_' + window._jsonpk++;
    s = document.createElement('script');
    s.src = url + 'callback=' + k;
    h = document.getElementsByTagName('head')[0];
    window[k] = function(r) {
      back.call(window, r);
      h.removeChild(s);
      delete window[k];
    };
    h.appendChild(s);
  },

  extend = function(a, b) {
    for(var k in b) a[k] = b[k];
    return a;
  },

  b = function(args) {
    var self, save,
    fetch, pagify;

    self = this;

    this.args = extend(
      Balller.defaults,
      args || {}
    );

    save = function(key, data) {
      tmp = (Date.now() / 1000) + self.args.cache;
      localStorage.setItem(key, JSON.stringify({
        data: data,
        expires: tmp
      }));
    };

    fetch = function(key) {
      var item = localStorage.getItem(key);
      if((item = JSON.parse(item)) && item.expires) {
        tmp = (item.expires > (Date.now() / 1000));
        if(tmp) return item.data;
      }
      return false;
    };

    pagify = function(o) {
      return '?page=' + o.page + '&per_page=' + o.per_page;
    };

    this.request = function(url, back, nates) {
      var cache; tmp = this.args;

      cache = (window.localStorage && tmp.cache > 0);

      if(nates) url += pagify(tmp);

      if(cache && (tmp = fetch(url, args)))
        return back.call(window, tmp);

      derulo(url, function(r) {
        if(cache) save(url, r);
        back.call(window, r);
      });
    };
  },

  make = function(url, back, args, nates) {
    (new b(args)).request(api + url, back, nates || true);
  };

  /* ---------------------------------------- *\
     @ Player
  \* ---------------------------------------- */

  Balller.player = function(user, back, args) {
    make('players/' + user, back, args, false);
  };

  Balller.playerShots = function(user, back, args) {
    make('players/' + user + '/shots', back, args);
  };

  Balller.shotsPlayerFollowing = function(user, back, args) {
    make('players/' + user + '/shots/following', back, args);
  };

  Balller.shotsPlayerLikes = function(user, back, args) {
    make('players/' + user + '/shots/likes', back, args);
  };

  Balller.playerFollowers = function(user, back, args) {
    make('players/' + user + '/followers', back, args);
  };

  Balller.playerFollowing = function(user, back, args) {
    make('players/' + user + '/following', back, args);
  };

  Balller.playerDraftees = function(user, back, args) {
    make('players/' + user + '/draftees', back, args);
  };

  /* ---------------------------------------- *\
     @ Shot
  \* ---------------------------------------- */

  Balller.shot = function(id, back, args) {
    make('shots/' + id, back, args, false);
  };

  Balller.shotRebounds = function(id, back, args) {
    make('shots/' + id + '/rebounds', back, args);
  };

  Balller.shotComments = function(id, back, args) {
    make('shots/' + id + '/comments', back, args);
  };

  Balller.shotsList = function(type, back, args) {
    make('shots/' + type, back, args);
  };

  /* ---------------------------------------- *\
     @ Defaults
  \* ---------------------------------------- */

  Balller.defaults = {
    page: 1,
    per_page: 15,
    cache: 600
  };

  api = '//api.dribbble.com/';

  window.Balller = Balller;

})({}, this, document);
