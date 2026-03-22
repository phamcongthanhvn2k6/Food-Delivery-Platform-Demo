# 🍔 Culinary Flow - Food Delivery System

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white)

Bản thiết kế hệ thống giao thức ăn toàn diện (như ShopeeFood, GrabFood) bao gồm API, Database, Backend Logic và UI/UX cho từng nền tảng ứng dụng.

---

## 🌟 Trải nghiệm Người dùng (UI/UX) & Frontend

### 1. App Khách Hàng (Customer) - *Mobile-first*
- **Công nghệ**: `React Native` / `Flutter`.
- **Cốt lõi**:
  - Gợi ý món ăn Location-based, Menu có hiệu ứng Scroll Spy.
  - BottomSheet để chọn Topping/Size.
  - Bản đồ Tracking xe chạy theo thời gian thực.
  - Giỏ hàng & Thanh toán đa phương thức.

### 2. Web Quản Trị Quán & Admin (Merchant) - *PC/Tablet*
- **Công nghệ**: `React.js` / `Next.js` kết hợp thư viện `Ant Design` / `MUI`.
- **Cốt lõi**:
  - Bảng Dashboard thống kê biểu đồ (Charts).
  - Bảng Quản lý Đơn (Live Order Queue) dạng Kanban có chuông báo.
  - Quản lý Menu (Tắt/Bật món hết hàng bằng thao tác 1 chạm).

### 3. App Tài xế (Shipper) - *Mobile-optimized*
- **Công nghệ**: `React Native` / `Flutter` (Tập trung xin quyền Background Location).
- **Cốt lõi**:
  - UI siêu tối giản, tương phản cao để dùng rõ ngoài trời nắng.
  - Heatmap (Bản đồ nhiệt) khu vực đang có nhiều rớt đơn.
  - Popup Nhận Đơn đè màn hình cực to kèm đếm ngược (VD: 15s).

---

## 📡 Danh sách API Cốt lõi (Full Suite)

### 🔐 A. Auth & User
- `POST /api/v1/auth/register`: Đăng ký (User/Merchant/Driver).
- `POST /api/v1/auth/login`: Đăng nhập (trả về JWT & lưu Session vào Redis).
- `GET /api/v1/users/profile`: Lấy thông tin cá nhân.
- `PUT /api/v1/users/address`: Quản lý danh sách địa chỉ nhận hàng (Home, Office...).

### 🍱 B. Khách hàng & Đặt hàng (Customer & Ordering)
- `GET /api/v1/restaurants/search?lat=&lng=&q=`: Tìm kiếm quán ăn gần nhất (PostGIS).
- `GET /api/v1/restaurants/:id/menu`: Lấy Menu (Cache qua Redis).
- `POST /api/v1/cart/sync`: Đồng bộ giỏ hàng từ LocalStorage lúc người dùng chọn món.
- `POST /api/v1/orders/checkout`: Tính toán giá cuối (phí ship, thuế, mã giảm).
- `POST /api/v1/orders/place-order`: Chốt đơn, đẩy vào Queue xử lý thanh toán.
- `GET /api/v1/orders/history`: Xem lịch sử đơn.

### 🏪 C. Nhà hàng & Quản lý (Merchant)
- `GET /api/v1/merchant/dashboard`: Thống kê doanh thu, số đơn.
- `PATCH /api/v1/merchant/menu-items/:id`: Cập nhật trạng thái (Hết hàng/Còn hàng).
- `POST /api/v1/merchant/orders/:id/accept`: Nhà hàng xác nhận nấu đơn.
- `POST /api/v1/merchant/orders/:id/ready`: Báo nấu xong (Kích hoạt luồng tìm Shipper).

### 🛵 D. Tài xế & Vận chuyển (Driver & Logistics)
- `PATCH /api/v1/driver/status`: Cập nhật trạng thái (Online/Offline).
- `PATCH /api/v1/driver/location`: Tọa độ thời gian thực (Lưu cache Redis Geo).
- `GET /api/v1/driver/orders/available`: Danh sách đơn đang chờ trong khu vực.
- `POST /api/v1/driver/orders/:id/pickup`: Shipper đã lấy hàng thành công từ quán.
- `POST /api/v1/driver/orders/:id/complete`: Shipper đã giao tận tay khách.

### 📣 E. Hệ thống & Khuyến mãi (System & Marketing)
- `POST /api/v1/promotions/apply`: Áp dụng mã giảm giá.
- `POST /api/v1/reviews`: Đánh giá 2 chiều (Khách đánh giá quán/tài xế).
- `GET /api/v1/notifications`: Lấy thông báo theo thời gian thực (SSE/Socket.io).

---

## 🗄 Thiết kế Database (PostgreSQL)

Hệ thống yêu cầu các Table với quan hệ RDBMS khóa ngoại chặt chẽ:

- **`users`**: `id` (UUID), `full_name`, `email`, `phone`, `password_hash`, `role` (ENUM: customer, merchant, driver, admin).
- **`restaurants`**: `id`, `owner_id`, `name`, `address`, `location` (GEOGRAPHY POINT), `is_active`.
- **`menu_items`**: `id`, `restaurant_id`, `name`, `description`, `price`, `category`, `stock_quantity`.
- **`orders`**: `id`, `customer_id`, `restaurant_id`, `driver_id`, `total_amount`, `shipping_fee`, `promotion_id`, `status` (ENUM), `payment_method`, `created_at`.
- **`order_items`**: `id`, `order_id`, `menu_item_id`, `quantity`, `price_at_purchase` (Lưu giá lúc chốt đơn).
- **`driver_locations`**: `driver_id`, `current_location`, `updated_at` (Chủ yếu vận hành qua Redis, bảng này chỉ để log chậm).

---

## ⚡ Logic Hàng Đợi & Tìm Shipper (Redis + BullMQ)

Để hệ thống không sập khi có hàng ngàn đơn cùng lúc:

1. **Queueing**: Đơn chuyển sang trạng thái `READY` -> Hệ thống Push `order_id` vào Redis List (Ví dụ: `pending_deliveries`).
2. **Worker**: `BullMQ` (chạy ngầm trong Node.js) nhận tín hiệu có đơn mới.
3. **Geo-Matching**: Worker quét Redis `GEORADIUS` quanh tọa độ quán tìm ra 5 tài xế đang `Online` gần nhất.
4. **Broadcasting**: Socket.io gửi Popup có chuông báo đến 5 tài xế này.
5. **Acceptance**: Tài xế nào thao tác bấm "Nhận đơn" nhanh nhất thao tác qua API thì hệ thống sẽ gán `driver_id` ở DB và hủy Ping các tài xế còn lại.

---

## 💻 Hướng dẫn Cài đặt (Setup Workspace)

Sử dụng chuỗi lệnh sau để khởi tạo nhanh tất cả các package chuyên dụng (All-in-one):

```bash
# Cài đặt nền tảng API, CSDL và State Management
npm install express pg sequelize redis socket.io bullmq @reduxjs/toolkit react-redux axios react-router-dom json-server

# Cài đặt công cụ Dev và Types
npm install -D concurrently nodemon typescript @types/node
```