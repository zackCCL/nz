# nz

npm install
npm run dev

開啟瀏覽器
http://127.0.0.1:3000/ui/

測試api
/v

觀察log
每個req, 印一次‘getVerson route’ ＆ 五次‘getVerson service’, 並有自己的traceId 
[2023-10-15T10:06:09.793Z] DEBUG: nz/27963 on chengzacks-MacBook-Pro.local: getVerson route (traceId=1697364369793)
[2023-10-15T10:06:10.170Z] DEBUG: nz/27963 on chengzacks-MacBook-Pro.local: getVerson route (traceId=1697364370170)
[2023-10-15T10:06:10.464Z] DEBUG: nz/27963 on chengzacks-MacBook-Pro.local: getVerson service (traceId=1697364370170)
[2023-10-15T10:06:10.502Z] DEBUG: nz/27963 on chengzacks-MacBook-Pro.local: getVerson service (traceId=1697364369793)
[2023-10-15T10:06:10.502Z] DEBUG: nz/27963 on chengzacks-MacBook-Pro.local: getVerson service (traceId=1697364369793)
[2023-10-15T10:06:10.550Z] DEBUG: nz/27963 on chengzacks-MacBook-Pro.local: getVerson service (traceId=1697364369793)
[2023-10-15T10:06:10.591Z] DEBUG: nz/27963 on chengzacks-MacBook-Pro.local: getVerson service (traceId=1697364370170)
[2023-10-15T10:06:10.701Z] DEBUG: nz/27963 on chengzacks-MacBook-Pro.local: getVerson service (traceId=1697364369793)
[2023-10-15T10:06:10.744Z] DEBUG: nz/27963 on chengzacks-MacBook-Pro.local: getVerson service (traceId=1697364370170)
[2023-10-15T10:06:11.284Z] DEBUG: nz/27963 on chengzacks-MacBook-Pro.local: getVerson service (traceId=1697364369793)
[2023-10-15T10:06:11.710Z] DEBUG: nz/27963 on chengzacks-MacBook-Pro.local: getVerson service (traceId=1697364370170)
[2023-10-15T10:06:11.731Z] DEBUG: nz/27963 on chengzacks-MacBook-Pro.local: getVerson service (traceId=1697364370170)