# Danh sách các Trang và Vai trò (User Roles & Routes)

Dưới đây là bảng liệt kê tất cả các trang trong ứng dụng **Culinary Flow**, được phân loại theo quyền truy cập của người dùng.

## 1. Public Routes (Công khai - Ai cũng truy cập được)
Các trang này dành cho khách vãng lai hoặc người dùng chưa đăng nhập.

| Đường dẫn (Path) | Chức năng | Thành phần (Component) |
| :--- | :--- | :--- |
| `/` | Trang chủ (Home) | `Home` |
| `/login` | Đăng nhập | `Login` |
| `/register` | Đăng ký tài khoản | `Register` |
| `/forgot-password` | Quên mật khẩu | `ForgotPassword` |
| `/category/:categoryId` | Danh sách món ăn theo danh mục | `CategoryPage` |
| `/product/:id` | Chi tiết món ăn | `ProductDetailPage` |
| `/restaurant/:id` | Hồ sơ nhà hàng | `RestaurantProfilePage` |
| `/search` | Tìm kiếm món ăn/nhà hàng | `SearchResultsPage` |
| `/offers` | Trang khuyến mãi | `OffersPage` |
| `/about` | Giới thiệu về chúng tôi | `AboutPage` |
| `/support` | Hỗ trợ khách hàng | `SupportPage` |
| `/privacy` | Chính sách bảo mật | `PrivacyPolicyPage` |
| `/partner` | Trở thành đối tác | `PartnerPage` |
| `/cart-empty-test` | Kiểm tra giỏ hàng trống | `EmptyCart` |

---

## 2. Customer Routes (Dành cho Khách hàng - Role: `CUSTOMER`)
Yêu cầu đăng nhập với vai trò người mua hàng.

| Đường dẫn (Path) | Chức năng | Thành phần (Component) |
| :--- | :--- | :--- |
| `/customer/orders` | Lịch sử đơn hàng | `OrderHistoryPage` |
| `/customer/profile` | Hồ sơ cá nhân | `UserProfilePage` |
| `/customer/settings` | Cài đặt tài khoản | `AccountSettingsPage` |
| `/customer/rating/:orderId` | Đánh giá đơn hàng | `OrderRatingPage` |
| `/checkout` | Trang thanh toán (Giỏ hàng) | `CheckoutPage` |
| `/checkout/payment` | Phương thức thanh toán | `PaymentMethodsPage` |
| `/checkout/success` | Xác nhận đặt hàng thành công | `OrderConfirmationPage` |
| `/tracking/:orderId` | Theo dõi đơn hàng thời gian thực | `LiveTrackingPage` |
| `/notifications` | Trung tâm thông báo | `NotificationsPage` |

---

## 3. Merchant Routes (Dành cho Chủ cửa hàng - Role: `MERCHANT`)
Dành cho người quản lý nhà hàng hoặc quán ăn.

| Đường dẫn (Path) | Chức năng | Thành phần (Component) |
| :--- | :--- | :--- |
| `/merchant/dashboard` | Bảng điều khiển kinh doanh | `MerchantDashboardPage` |
| `/merchant/menu` | Quản lý thực đơn (Món ăn) | `MenuManagementPage` |
| `/merchant/orders` | Quản lý danh sách đơn hàng | `OrderListPage` |
| `/merchant/reviews` | Quản lý đánh giá của khách | `ReviewManagementPage` |
| `/merchant/reports` | Báo cáo doanh thu hàng tháng | `MonthlyReportsPage` |
| `/merchant/inventory` | Quản lý kho hàng/nguyên liệu | `InventoryControlPage` |
| `/merchant/settings` | Cài đặt thông tin cửa hàng | `StoreSettingsPage` |

---

## 4. Driver Routes (Dành cho Tài xế - Role: `DRIVER`)
Dành cho người giao hàng (Shipper).

| Đường dẫn (Path) | Chức năng | Thành phần (Component) |
| :--- | :--- | :--- |
| `/driver/dashboard` | Bảng điều khiển tài xế | `DriverDashboardPage` |
| `/driver/active` | Đơn hàng đang đi giao | `ActiveDeliveryPage` |
| `/driver/wallet` | Ví tiền tài xế (Thu nhập) | `DriverWalletPage` |
| `/driver/heatmap` | Bản đồ khu vực đông đơn hàng | `DriverHeatmapPage` |
| `/driver/kyc` | Xác minh danh tính tài xế | `DriverKYCPage` |

---

## 5. Admin Routes (Dành cho Quản trị viên - Role: `ADMIN`)
Dành cho nhân viên vận hành hệ thống toàn cục.

| Đường dẫn (Path) | Chức năng | Thành phần (Component) |
| :--- | :--- | :--- |
| `/admin/dashboard` | Bảng điều khiển quản trị | `AdminDashboardPage` |
| `/admin/shippers` | Quản lý danh sách tài xế | `ShipperManagementPage` |
| `/admin/live-orders` | Quản lý đơn hàng thực tế | `LiveOrderManagementPage` |
| `/admin/accounts` | Quản lý tài khoản người dùng | `AccountManagementPage` |
| `/admin/payments` | Quản lý giao dịch và thanh toán | `PaymentManagementPage` |
| `/admin/disputes` | Trung tâm giải quyết khiếu nại | `DisputeCenterPage` |
| `/admin/settings` | Cài đặt hệ thống & Chiết khấu | `CommissionSettingsPage` |

---

## 6. Trang Đặc biệt & Điều hướng

- `/orders`: Tự động chuyển hướng (Redirect) dựa theo Role của user sang trang đơn hàng tương ứng.
- `*`: Trang lỗi 404 (Không tìm thấy trang) đối với bất kỳ đường dẫn nào không hợp lệ.
