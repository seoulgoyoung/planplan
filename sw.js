// 앱 설치를 가능하게 하기 위한 최소한의 서비스 워커 설정
const CACHE_NAME = 'pop-planner-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // 앱이 설치 가능하려면 fetch 이벤트 리스너가 반드시 필요합니다.
  event.respondWith(fetch(event.request));
});
