console.log('work process');
console.log(self);

var CACHE_NAME = 'my-cache-v1';
var urlsToCache = [
  // '/images/1.png',
  '/common.js'
  // 'list.json'
];

// 如果sw.js一直都不变化的话，那么 install 事件只有在首次安装的时候才会调用
self.addEventListener('install', event => {
  // 进行安装回调
  console.log('install');
  // 开始缓存文件
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('成功打开缓存空间');
      return cache.addAll(urlsToCache);
    })
  );
});

/* self.addEventListener('install', function (event) {
  var now = Date.now();
  // 事先设置好需要进行更新的文件路径
  var urlsToPrefetch = [
    '/city.js'
  ];

  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function (cache) {
      var cachePromises = urlsToPrefetch.map(function (urlToPrefetch) {
        // 使用 url 对象进行路由拼接
        var url = new URL(urlToPrefetch, location.href);
        url.search += (url.search ? '&' : '?') + 'cache-bust=' + now;
        // 创建 request 对象进行流量的获取
        var request = new Request(url, {
          mode: 'no-cors'
        });
        // 手动发送请求，用来进行文件的更新
        return fetch(request).then(function (response) {
          if (response.status >= 400) {
            // 解决请求失败时的情况
            throw new Error('request for ' + urlToPrefetch +
              ' failed with status ' + response.statusText);
          }
          // 将成功后的 response 流，存放在 caches 套件中，完成指定文件的更新。
          return cache.put(urlToPrefetch, response);
        }).catch(function (error) {
          console.error('Not caching ' + urlToPrefetch + ' due to ' + error);
        });
      });

      return Promise.all(cachePromises).then(function () {
        console.log('Pre-fetching complete.');
      });
    }).catch(function (error) {
      console.error('Pre-fetching failed:', error);
    })
  );
}); */

self.addEventListener('fetch', event => {
  console.log('fetch');
  event.respondWith(
    caches.match(event.request).then(response => {
      // 如何有缓存的话，那么就直接返回缓存，否则直接获取源文件
      if (response) {
        return response;
      }
      return fetch(event.request);
      // fetch(url, {
      //   credentials: 'include'
      // });
    })
  );
});

/* self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      return cache.match(event.request).then(function(response) {
        var fetchPromise = fetch(event.request).then(function(networkResponse) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        })
        return response || fetchPromise;
      })
    })
  );
}); */

/* self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
    .then(function (response) {
      if (response) {
        return response;
      }

      // 因为 event.request 流已经在 caches.match 中使用过一次，
      // 那么该流是不能再次使用的。我们只能得到它的副本，拿去使用。
      var fetchRequest = event.request.clone();

      // fetch 的通过信方式，得到 Request 对象，然后发送请求
      return fetch(fetchRequest).then(
        function (response) {
          // 检查是否成功
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // 如果成功，该 response 一是要拿给浏览器渲染，二是要进行缓存。
          // 不过需要记住，由于 caches.put 使用的是文件的响应流，一旦使用，
          // 那么返回的 response 就无法访问造成失败，所以，这里需要复制一份。
          var responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(function (cache) {
              cache.put(event.request, responseToCache);
            });

          return response;
        }
      );
    })
  );
}); */

self.addEventListener('activate', event => {
  console.log('activate');

  const cacheWhitelist = ['my-cache-v1'];

  event.waitUntil(
    // 找到所有老的缓存空间
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // 如果不在当前缓存空间白名单列表中就删除。
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

/* self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
    .then(function (response) {
      if (response) {
        return response;
      }
      var fetchRequest = event.request.clone();
      return fetch(fetchRequest).then(
        function (response) {
          if (!response || response.status !== 200 || !response.headers.get('Content-type').match(/image/)) {
            return response;
          }
          var responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(function (cache) {
              cache.put(event.request, responseToCache);
            });

          return response;
        }
      );
    })
  )
}); */
