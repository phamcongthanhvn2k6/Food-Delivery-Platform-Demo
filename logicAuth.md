# Luồng Xử Lý Đăng Ký & Đăng Nhập (Authentication Flow)

Tài liệu này mô tả chi tiết luồng xử lý Đăng ký và Đăng nhập hiện tại trong dự án, từ Frontend (React) tới Backend (Express) và Database (`db.json`).

---

## 1. Luồng xử lý Đăng ký (Register Flow)

**Tại Frontend (`src/features/auth/Register.tsx`):**
1. Người dùng điền form với 4 trường thông tin: `fullName`, `email`, `password`, và `role` (mặc định là "user").
2. Khi ấn Submit, form gọi `handleRegister` và dùng Axios (`api.post`) gửi một payload JSON chứa các thông tin này lên endpoint `POST /api/auth/register`.
3. Nếu thành công, tự động chuyển hướng (navigate) người dùng qua trang `/login`. Nếu thất bại, bắt lỗi và hiển thị thông báo lỗi (VD: "Email đã được sử dụng").

**Tại Backend (`backend/server.js`):**
1. Express nhận request, kiểm tra xem các trường có bị trống hay không.
2. Gọi hàm `readDB()` để đọc dữ liệu từ file `db.json`.
3. Kiểm tra xem `email` đã tồn tại trong mảng `users` chưa. Nếu có rồi thì trả về lỗi `400`.
4. Dùng thư viện `bcryptjs` để "băm" (hash) mật khẩu (tạo ra một mã bảo mật không thể dịch ngược).
5. Tạo một Object `newUser` chứa các thông tin (cùng `id` random và chuỗi password đã hash), `.push()` vào mảng `users` và gọi `writeDB()` để lưu đè lại vào file `db.json`.
6. Trả về status `201` thành công cùng với thông tin user (đã loại bỏ trường password để bảo mật).

---

## 2. Luồng xử lý Đăng nhập (Login Flow)

**Tại Frontend (`src/features/auth/Login.tsx`):**
1. Người dùng điền `email` và `password`, form gọi `handleLogin`.
2. Gửi request `POST /api/auth/login` kèm email và password lên server.
3. Nếu Backend trả về thành công (chứa `token` và `user`), Frontend gọi dispatch hàm `loginSuccess` (của Redux Store - `authSlice`) để lưu trạng thái đăng nhập vào biến toàn cục.
4. Chuyển hướng người dùng về trang chủ `/`.

**Tại Backend (`backend/server.js`):**
1. Express nhận request, đọc `db.json` tìm kiếm user có `email` tương ứng. Nếu không thấy -> trả về lỗi `400` ("Sai email hoặc mật khẩu").
2. Nếu tìm thấy user, lấy `password` (dạng hash) đang lưu ở database đem đi so sánh với mật khẩu dạng text người dùng vừa gõ thông qua hàm `bcrypt.compare()`.
3. Nếu mật khẩu không khớp -> trả về lỗi `400`.
4. Nếu khớp hoàn toàn, hệ thống xác nhận người dùng thành công và sử dụng thư viện `jsonwebtoken` (JWT) để ký (sign) ra một chuỗi **Token**. Token này chứa `id` và `role` của user, kèm khóa bí mật và có thời hạn sử dụng 1 ngày.
5. Cuối cùng, phản hồi JSON về cho Frontend chứa chuỗi **Token** này cộng với chi tiết thông tin user.

---

## 3. Quản lý Phiên Đăng Nhập (Session & API Requests)

Tại `src/services/api.js`, hệ thống đã thiết lập một **Axios Interceptor**:
- Bất cứ khi nào Frontend cần gọi các API yêu cầu quyền truy cập (lấy dữ liệu cá nhân, xử lý giỏ hàng, v.v.), `api.js` sẽ tự động lấy **Token** từ `localStorage`.
- Token này được gắn định dạng cố định vào Header của mọi request: `Authorization: Bearer <token>`.
- Các Route bảo mật ở Backend chỉ việc đọc header này, dùng JWT để giải mã và xem xét Token có hợp lệ/hết hạn hay chưa, đồng thời lấy được `role` để cấp quyền tương ứng (admin, user, shipper, v.v.) mà không bắt người dùng phải đăng nhập lại mỗi lần chuyển trang.
