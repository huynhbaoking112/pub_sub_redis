# Một số quy tắc định hình nên quy trình pub_sub_redis hỗ trợ microservice ( Hạn chế dùng redis cho việc message broker, ưu tiên sử dụng những thằng như RabbitMQ và Kafka  vì nó hỗ trợ đầy đủ cho một mô hình message queue)

# Một số tài liệuy về redis với nodejs
 
  ## https://github.com/redis/node-redis?tab=readme-ov-file#pubsub

# Quy trình hoạt động

  Hoạt động theo kiểu channel là chính một consumer sẽ đăng ký lắng nghe các channel cụ thể và một publisher gửi data đến các channel cụ thể. Hai server hiện tại có thể giao tiếp với nhau như một mô hình bình thường nhưng không an toàn và hiệu quả như một hệ thống message queue thông 
  thường

# Một số tip nhỏ pub-sub
  pSubscribe và sSubscribe là các phương thức để subscribe lắng nghe các kênh có pattern trong Redis.

pSubscribe: Sử dụng để subscribe các kênh Redis có glob style patterns. Ví dụ muốn lắng nghe tất cả các kênh bắt đầu bằng "orders-", ta sẽ pSubscribe tới pattern "orders-*".
sSubscribe: Sử dụng để subscribe với các kênh Redis có Unix shell-style patterns. Ví dụ muốn lắng nghe kênh "orders-1" hoặc "orders-2", ta sử dụng pattern "orders-[12]".
Cả hai phương thức này đều cho phép subscribe nhiều kênh cùng một lúc thông qua việc sử dụng pattern.

Khi có dữ liệu publish lên các kênh phù hợp với pattern, client sẽ nhận được callback. Các callback này có cấu trúc:

pSubscribe: callback(pattern, channel)
sSubscribe: callback(pattern, channel)
Giúp biết được kênh cụ thể nào phát sinh sự kiện.

Nói tóm lại:

pSubscribe dùng với glob style patterns
sSubscribe dùng với Unix shell-style patterns
Cho phép subscribe nhiều kênh cùng lúc thông qua pattern
