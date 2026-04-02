USE Food_Delivery_System;
GO

-- ============================================================================
-- PHẦN 1: DỌN DẸP DỮ LIỆU CŨ VÀ RESET SỐ NHẢY ID (SAFE DROP)
-- ============================================================================
PRINT N'--- Bắt đầu xóa dữ liệu cũ ---';

DELETE FROM Disputes;
DELETE FROM Reviews;
DELETE FROM Payments;
DELETE FROM OrderDetails;
DELETE FROM Orders;
DELETE FROM MenuItems;
DELETE FROM MenuCategories;
DELETE FROM Vouchers;
DELETE FROM Restaurants;
DELETE FROM DriverProfiles;
DELETE FROM Users;

DBCC CHECKIDENT ('Users', RESEED, 0);
DBCC CHECKIDENT ('MenuCategories', RESEED, 0);
DBCC CHECKIDENT ('MenuItems', RESEED, 0);
GO

-- ============================================================================
-- PHẦN 2: KHỞI TẠO TÀI KHOẢN (USERS) & HỒ SƠ TÀI XẾ
-- ============================================================================
PRINT N'--- Khởi tạo Users ---';

DECLARE @Hash NVARCHAR(255) = '$2b$10$rUjh6TTg2NYOsIeSw11yVeMGMMo8.5zOOIqpIAhX1DF/4WMBxGrLW';

-- 2.1. Users cho luồng Đơn hàng (Phở Thìn)
INSERT INTO Users (Phone, PasswordHash, FullName, Email, Role, Status, AvatarURL) VALUES 
('0901234567', @Hash, N'Nguyễn Trọng Khách Hàng', 'customer@gmail.com', 'CUSTOMER', 'ACTIVE', 'https://avatar.iran.liara.run/public/outfit/13'),
('0988888888', @Hash, N'Hệ Thống Phở Thìn', 'phothin@gmail.com', 'MERCHANT', 'ACTIVE', 'https://avatar.iran.liara.run/public/outfit/64'),
('0912222222', @Hash, N'Lê Văn Tài Xế', 'shipper@gmail.com', 'DRIVER', 'ACTIVE', 'https://avatar.iran.liara.run/public/job/driver'),
('0999999999', @Hash, N'Quản Trị Viên (Admin)', 'admin@gmail.com', 'ADMIN', 'ACTIVE', 'https://avatar.iran.liara.run/public/job/police');

-- 2.2. Users từ file JSON
INSERT INTO Users (Phone, PasswordHash, FullName, Email, Role, CreatedAt, Status) VALUES 
('0990000001', @Hash, N'Phạm Công Thành', 'user@gmail.com', 'CUSTOMER', '2026-03-22T16:11:21', 'ACTIVE'),
('0990000002', @Hash, N'Phạm Công Thành', 'phamcongt56@gmail.com', 'CUSTOMER', '2026-03-23T07:35:52', 'ACTIVE'),
('0888888888', @Hash, N'Hệ thống Nhà Hàng JSON', 'json_merchant@gmail.com', 'MERCHANT', GETDATE(), 'ACTIVE');

-- Lấy ID các Actor để thao tác
DECLARE @CustomerID INT = (SELECT UserID FROM Users WHERE Email='customer@gmail.com');
DECLARE @DriverID INT = (SELECT UserID FROM Users WHERE Email='shipper@gmail.com');
DECLARE @Merchant_PhoThin INT = (SELECT UserID FROM Users WHERE Email='phothin@gmail.com');
DECLARE @Merchant_JSON INT = (SELECT UserID FROM Users WHERE Email='json_merchant@gmail.com');

-- 2.3. Hồ sơ Tài xế
INSERT INTO DriverProfiles (DriverID, LicenseNumber, VehiclePlate, Rating, WalletBalance, CurrentLat, CurrentLong, OperationStatus) VALUES
(@DriverID, 'A1-778899', '29-S1 888.88', 4.9, 1500000, 21.028511, 105.804817, 'AVAILABLE');


-- ============================================================================
-- PHẦN 3: KHỞI TẠO NHÀ HÀNG & THỰC ĐƠN (RESTAURANTS & MENU)
-- ============================================================================
PRINT N'--- Khởi tạo Nhà hàng & Thực đơn ---';

-- 3.1. Dữ liệu Nhà hàng
INSERT INTO Restaurants (RestaurantID, BrandName, Address, Category, CommissionRate, Rating, Lat, Long, IsOpen) VALUES
(@Merchant_PhoThin, N'Phở Thìn Lò Đúc - Chính Gốc', N'13 Phố Lò Đúc, Hai Bà Trưng, Hà Nội', N'Bún/Phở', 20.00, 4.8, 21.018511, 105.854817, 1),
(@Merchant_JSON, N'JSON Mega Food Station', N'Hệ thống Online Toàn Quốc', N'Tổng Hợp', 15.00, 4.5, NULL, NULL, 1);

-- 3.2. Danh mục & Món ăn của Phở Thìn
INSERT INTO MenuCategories (RestaurantID, Name) VALUES 
(@Merchant_PhoThin, N'Món Phở Chính'), (@Merchant_PhoThin, N'Món Ăn Kèm'), (@Merchant_PhoThin, N'Nước Uống');

DECLARE @CatMain INT = (SELECT CategoryID FROM MenuCategories WHERE Name=N'Món Phở Chính' AND RestaurantID=@Merchant_PhoThin);
DECLARE @CatSide INT = (SELECT CategoryID FROM MenuCategories WHERE Name=N'Món Ăn Kèm' AND RestaurantID=@Merchant_PhoThin);
DECLARE @CatDrink INT = (SELECT CategoryID FROM MenuCategories WHERE Name=N'Nước Uống' AND RestaurantID=@Merchant_PhoThin);

INSERT INTO MenuItems (RestaurantID, CategoryID, ItemName, Description, Price, ImageURL, IsAvailable) VALUES
(@Merchant_PhoThin, @CatMain, N'Phở Bò Tái Lăn Nghệ Nhân', N'Bò xào lăn siêu dầy thịt, nước dùng hầm xương 24h đậm đà', 75000, 'https://images.unsplash.com/photo-1582878826629-29b7ad1cb438?q=80&w=600&auto=format&fit=crop', 1),
(@Merchant_PhoThin, @CatMain, N'Phở Đặc Biệt (Full Topping)', N'Tái, Chín, Nạm, Gầu, Viên, Trứng Trần', 95000, 'https://images.unsplash.com/photo-1628045973801-b7d15fc3521d?q=80&w=600&auto=format&fit=crop', 1),
(@Merchant_PhoThin, @CatSide, N'Quẩy Giòn Khổng Lồ', N'Quẩy nóng giòn nhúng phở', 10000, 'https://images.pexels.com/photos/14856015/pexels-photo-14856015.jpeg?auto=compress&cs=tinysrgb&w=600', 1),
(@Merchant_PhoThin, @CatDrink, N'Trà Đá Thái Nguyên', N'Thơm ngon mát lạnh', 5000, 'https://images.unsplash.com/photo-1499557404455-87bd33e215f7?q=80&w=600&auto=format&fit=crop', 1);

-- 3.3. Danh mục & Món ăn từ file JSON (Map vào JSON Merchant)
INSERT INTO MenuCategories (RestaurantID, Name) VALUES 
(@Merchant_JSON, N'Cơm'), (@Merchant_JSON, N'Bún / Phở / Mì'), (@Merchant_JSON, N'Đồ ăn nhanh'),
(@Merchant_JSON, N'Ăn vặt'), (@Merchant_JSON, N'Hải sản'), (@Merchant_JSON, N'Lẩu'),
(@Merchant_JSON, N'Đồ nướng'), (@Merchant_JSON, N'Salad & Đồ chay'), (@Merchant_JSON, N'Tráng miệng'),
(@Merchant_JSON, N'Món nhậu'), (@Merchant_JSON, N'Cà phê'), (@Merchant_JSON, N'Trà sữa'),
(@Merchant_JSON, N'Trà trái cây'), (@Merchant_JSON, N'Sinh tố & Nước ép'), (@Merchant_JSON, N'Nước ngọt & Bia');

-- Tạo bảng tạm chứa 90 món
DECLARE @TempProducts TABLE (ItemName NVARCHAR(150), Description NVARCHAR(MAX), Price DECIMAL(18,2), CategoryName NVARCHAR(100), ImageURL NVARCHAR(255));

INSERT INTO @TempProducts (ItemName, Description, Price, CategoryName, ImageURL) VALUES
(N'Cơm chiên dương châu', N'Tuyệt phẩm cơm chiên dương châu...', 25000, N'Cơm', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'),
(N'Cơm tấm sườn bì chả', N'Tuyệt phẩm cơm tấm sườn bì chả...', 35000, N'Cơm', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'),
(N'Cơm gà xối mỡ', N'Tuyệt phẩm cơm gà xối mỡ...', 45000, N'Cơm', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'),
(N'Cơm bò lúc lắc', N'Tuyệt phẩm cơm bò lúc lắc...', 55000, N'Cơm', 'https://images.unsplash.com/photo-1484723091791-00d759ce43db'),
(N'Cơm rang dưa bò', N'Tuyệt phẩm cơm rang dưa bò...', 65000, N'Cơm', 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9'),
(N'Cơm thố đà điểu', N'Tuyệt phẩm cơm thố đà điểu...', 75000, N'Cơm', 'https://images.unsplash.com/photo-1432139555190-58524dae6a55'),
(N'Phở bò tái nạm', N'Tuyệt phẩm phở bò tái nạm...', 85000, N'Bún / Phở / Mì', 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'),
(N'Phở gà ta', N'Tuyệt phẩm phở gà ta...', 20000, N'Bún / Phở / Mì', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'),
(N'Bún chả Hà Nội', N'Tuyệt phẩm bún chả hà nội...', 30000, N'Bún / Phở / Mì', 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'),
(N'Bún bò Huế', N'Tuyệt phẩm bún bò huế...', 40000, N'Bún / Phở / Mì', 'https://images.unsplash.com/photo-1554502573-04e8ac7c7a52'),
(N'Mì xào hải sản', N'Tuyệt phẩm mì xào hải sản...', 50000, N'Bún / Phở / Mì', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'),
(N'Miến lươn trộn', N'Tuyệt phẩm miến lươn trộn...', 60000, N'Bún / Phở / Mì', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1'),
(N'Gà rán giòn cay', N'Tuyệt phẩm gà rán giòn cay...', 70000, N'Đồ ăn nhanh', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'),
(N'Hamburger bò phô mai', N'Tuyệt phẩm hamburger bò phô mai...', 80000, N'Đồ ăn nhanh', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'),
(N'Khoai tây chiên', N'Tuyệt phẩm khoai tây chiên...', 15000, N'Đồ ăn nhanh', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'),
(N'Pizza hải sản', N'Tuyệt phẩm pizza với phần đế nướng...', 65000, N'Đồ ăn nhanh', 'https://images.unsplash.com/photo-1484723091791-00d759ce43db'),
(N'Hotdog phô mai', N'Tuyệt phẩm hotdog phô mai...', 35000, N'Đồ ăn nhanh', 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9'),
(N'Gà viên chiên', N'Tuyệt phẩm gà viên chiên...', 45000, N'Đồ ăn nhanh', 'https://images.unsplash.com/photo-1432139555190-58524dae6a55'),
(N'Bánh tráng trộn', N'Tuyệt phẩm bánh tráng trộn...', 55000, N'Ăn vặt', 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'),
(N'Bánh tráng nướng', N'Tuyệt phẩm bánh tráng nướng...', 65000, N'Ăn vặt', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'),
(N'Xúc xích nướng', N'Tuyệt phẩm xúc xích nướng...', 75000, N'Ăn vặt', 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'),
(N'Nem chua rán', N'Tuyệt phẩm nem chua rán...', 85000, N'Ăn vặt', 'https://images.unsplash.com/photo-1554502573-04e8ac7c7a52'),
(N'Bánh gà phô mai', N'Tuyệt phẩm bánh gà phô mai...', 20000, N'Ăn vặt', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'),
(N'Gỏi cuốn tôm thịt', N'Tuyệt phẩm gỏi cuốn tôm thịt...', 30000, N'Ăn vặt', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1'),
(N'Mực hấp gừng', N'Tuyệt phẩm mực hấp gừng...', 40000, N'Hải sản', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'),
(N'Tôm sú nướng muối ớt', N'Tuyệt phẩm tôm sú nướng muối ớt...', 50000, N'Hải sản', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'),
(N'Cua rang me', N'Tuyệt phẩm cua rang me...', 60000, N'Hải sản', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'),
(N'Ốc hương xào bơ tỏi', N'Tuyệt phẩm ốc hương xào bơ tỏi...', 70000, N'Hải sản', 'https://images.unsplash.com/photo-1484723091791-00d759ce43db'),
(N'Lẩu thập cẩm hải sản', N'Tuyệt phẩm lẩu thập cẩm hải sản...', 80000, N'Hải sản', 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9'),
(N'Nghêu hấp thái', N'Tuyệt phẩm nghêu hấp thái...', 15000, N'Hải sản', 'https://images.unsplash.com/photo-1432139555190-58524dae6a55'),
(N'Lẩu thái tomyum', N'Tuyệt phẩm lẩu thái tomyum...', 25000, N'Lẩu', 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'),
(N'Lẩu riêu cua bắp bò', N'Tuyệt phẩm lẩu riêu cua bắp bò...', 35000, N'Lẩu', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'),
(N'Lẩu cá tầm', N'Tuyệt phẩm lẩu cá tầm...', 45000, N'Lẩu', 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'),
(N'Lẩu ếch măng cay', N'Tuyệt phẩm lẩu ếch măng cay...', 55000, N'Lẩu', 'https://images.unsplash.com/photo-1554502573-04e8ac7c7a52'),
(N'Lẩu nấm thiên nhiên', N'Tuyệt phẩm lẩu nấm thiên nhiên...', 65000, N'Lẩu', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'),
(N'Lẩu bò nhúng dấm', N'Tuyệt phẩm lẩu bò nhúng dấm...', 75000, N'Lẩu', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1'),
(N'Bò nướng lá lốt', N'Tuyệt phẩm bò nướng lá lốt...', 85000, N'Đồ nướng', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'),
(N'Sườn heo nướng BBQ', N'Tuyệt phẩm sườn heo nướng bbq...', 20000, N'Đồ nướng', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'),
(N'Dẻ sườn bò nướng', N'Tuyệt phẩm dẻ sườn bò nướng...', 30000, N'Đồ nướng', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'),
(N'Ba chỉ heo nướng tảng', N'Tuyệt phẩm ba chỉ heo nướng tảng...', 40000, N'Đồ nướng', 'https://images.unsplash.com/photo-1484723091791-00d759ce43db'),
(N'Bạch tuộc nướng sa tế', N'Tuyệt phẩm bạch tuộc nướng sa tế...', 50000, N'Đồ nướng', 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9'),
(N'Chim cút nướng mộc', N'Tuyệt phẩm chim cút nướng mộc...', 60000, N'Đồ nướng', 'https://images.unsplash.com/photo-1432139555190-58524dae6a55'),
(N'Salad cá ngừ ngâm dầu', N'Tuyệt phẩm salad cá ngừ ngâm dầu...', 70000, N'Salad & Đồ chay', 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'),
(N'Salad ức gà áp chảo', N'Tuyệt phẩm salad ức gà áp chảo...', 80000, N'Salad & Đồ chay', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'),
(N'Gỏi cuốn chay', N'Tuyệt phẩm gỏi cuốn chay...', 15000, N'Salad & Đồ chay', 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'),
(N'Cơm sen hấp nấm', N'Tuyệt phẩm cơm sen hấp nấm...', 25000, N'Salad & Đồ chay', 'https://images.unsplash.com/photo-1554502573-04e8ac7c7a52'),
(N'Nấm kim châm xào mỡ hành', N'Tuyệt phẩm nấm kim châm xào mỡ hành...', 35000, N'Salad & Đồ chay', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'),
(N'Đậu hũ non sốt nấm xì dầu', N'Tuyệt phẩm đậu hũ non sốt nấm xì dầu...', 45000, N'Salad & Đồ chay', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1'),
(N'Bánh Tiramisu', N'Tuyệt phẩm bánh tiramisu...', 55000, N'Tráng miệng', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'),
(N'Bánh Mousse chanh dây', N'Tuyệt phẩm bánh mousse chanh dây...', 65000, N'Tráng miệng', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'),
(N'Chè khúc bạch nhãn', N'Tuyệt phẩm chè khúc bạch nhãn...', 75000, N'Tráng miệng', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'),
(N'Sữa chua trân châu cốt dừa', N'Tuyệt phẩm sữa chua trân châu cốt dừa...', 85000, N'Tráng miệng', 'https://images.unsplash.com/photo-1484723091791-00d759ce43db'),
(N'Kem bơ Đà Lạt', N'Tuyệt phẩm kem bơ đà lạt...', 20000, N'Tráng miệng', 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9'),
(N'Bánh Flan caramen', N'Tuyệt phẩm bánh flan caramen...', 30000, N'Tráng miệng', 'https://images.unsplash.com/photo-1432139555190-58524dae6a55'),
(N'Mực xé cay', N'Tuyệt phẩm mực xé cay...', 40000, N'Món nhậu', 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'),
(N'Bò khô dẻo', N'Tuyệt phẩm bò khô dẻo...', 50000, N'Món nhậu', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'),
(N'Chả ram tôm đất', N'Tuyệt phẩm chả ram tôm đất...', 60000, N'Món nhậu', 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'),
(N'Nem phùng', N'Tuyệt phẩm nem phùng...', 70000, N'Món nhậu', 'https://images.unsplash.com/photo-1554502573-04e8ac7c7a52'),
(N'Cơm cháy kho quẹt', N'Tuyệt phẩm cơm cháy kho quẹt...', 80000, N'Món nhậu', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'),
(N'Sụn gà rang muối', N'Tuyệt phẩm sụn gà rang muối...', 15000, N'Món nhậu', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1'),
(N'Cà phê đen đá', N'Tuyệt phẩm cà phê đen đá...', 25000, N'Cà phê', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'),
(N'Cà phê sữa đá pha phin', N'Tuyệt phẩm cà phê sữa đá pha phin...', 35000, N'Cà phê', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'),
(N'Bạc xỉu đá', N'Tuyệt phẩm bạc xỉu đá...', 45000, N'Cà phê', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'),
(N'Cà phê muối Huế', N'Tuyệt phẩm cà phê muối huế...', 55000, N'Cà phê', 'https://images.unsplash.com/photo-1484723091791-00d759ce43db'),
(N'Espresso nóng', N'Tuyệt phẩm espresso nóng...', 65000, N'Cà phê', 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9'),
(N'Cappuccino sương sáo', N'Tuyệt phẩm cappuccino sương sáo...', 75000, N'Cà phê', 'https://images.unsplash.com/photo-1432139555190-58524dae6a55'),
(N'Trà sữa trân châu đường đen', N'Tuyệt phẩm trà sữa trân châu đường đen...', 85000, N'Trà sữa', 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'),
(N'Trà sữa thái xanh thạch dừa', N'Tuyệt phẩm trà sữa thái xanh thạch dừa...', 20000, N'Trà sữa', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'),
(N'Trà sữa nướng', N'Tuyệt phẩm trà sữa nướng...', 30000, N'Trà sữa', 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'),
(N'Trà sữa matcha đậu đỏ', N'Tuyệt phẩm trà sữa matcha đậu đỏ...', 40000, N'Trà sữa', 'https://images.unsplash.com/photo-1554502573-04e8ac7c7a52'),
(N'Hồng trà kem cheese', N'Tuyệt phẩm hồng trà kem cheese...', 50000, N'Trà sữa', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'),
(N'Trà sữa kem trứng nướng', N'Tuyệt phẩm trà sữa kem trứng nướng...', 60000, N'Trà sữa', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1'),
(N'Trà đào cam sả', N'Tuyệt phẩm trà đào cam sả...', 70000, N'Trà trái cây', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'),
(N'Trà vải nhiệt đới', N'Tuyệt phẩm trà vải nhiệt đới...', 80000, N'Trà trái cây', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'),
(N'Trà sen vàng macchiato', N'Tuyệt phẩm trà sen vàng macchiato...', 15000, N'Trà trái cây', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'),
(N'Trà dâu tằm', N'Tuyệt phẩm trà dâu tằm...', 25000, N'Trà trái cây', 'https://images.unsplash.com/photo-1484723091791-00d759ce43db'),
(N'Trà chanh dây tuyết', N'Tuyệt phẩm trà chanh dây tuyết...', 35000, N'Trà trái cây', 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9'),
(N'Lục trà ổi hồng', N'Tuyệt phẩm lục trà ổi hồng...', 45000, N'Trà trái cây', 'https://images.unsplash.com/photo-1432139555190-58524dae6a55'),
(N'Sinh tố bơ béo', N'Tuyệt phẩm sinh tố bơ béo...', 55000, N'Sinh tố & Nước ép', 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'),
(N'Sinh tố xoài cát', N'Tuyệt phẩm sinh tố xoài cát...', 65000, N'Sinh tố & Nước ép', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'),
(N'Sinh tố dâu tây', N'Tuyệt phẩm sinh tố dâu tây...', 75000, N'Sinh tố & Nước ép', 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'),
(N'Nước ép táo nguyên chất', N'Tuyệt phẩm nước ép táo nguyên chất...', 85000, N'Sinh tố & Nước ép', 'https://images.unsplash.com/photo-1554502573-04e8ac7c7a52'),
(N'Nước ép dứa', N'Tuyệt phẩm nước ép dứa...', 20000, N'Sinh tố & Nước ép', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'),
(N'Nước ép dưa hấu', N'Tuyệt phẩm nước ép dưa hấu...', 30000, N'Sinh tố & Nước ép', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1'),
(N'Coca Cola lon', N'Tuyệt phẩm coca cola lon...', 40000, N'Nước ngọt & Bia', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'),
(N'Pepsi lon', N'Tuyệt phẩm pepsi lon...', 50000, N'Nước ngọt & Bia', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'),
(N'Sprite lon', N'Tuyệt phẩm sprite lon...', 60000, N'Nước ngọt & Bia', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'),
(N'Bia Tiger bạc', N'Tuyệt phẩm bia tiger bạc...', 70000, N'Nước ngọt & Bia', 'https://images.unsplash.com/photo-1484723091791-00d759ce43db'),
(N'Bia Heineken lon', N'Tuyệt phẩm bia heineken lon...', 80000, N'Nước ngọt & Bia', 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9'),
(N'Nước suối Aquafina', N'Tuyệt phẩm nước suối aquafina...', 15000, N'Nước ngọt & Bia', 'https://images.unsplash.com/photo-1432139555190-58524dae6a55');

-- Join bảng tạm với CategoryID của Nhà hàng JSON để Insert
INSERT INTO MenuItems (RestaurantID, CategoryID, ItemName, Description, Price, ImageURL, IsAvailable)
SELECT 
    @Merchant_JSON, C.CategoryID, T.ItemName, T.Description, T.Price, T.ImageURL, 1
FROM @TempProducts T
INNER JOIN MenuCategories C ON T.CategoryName = C.Name AND C.RestaurantID = @Merchant_JSON;


-- ============================================================================
-- PHẦN 4: KHỞI TẠO VOUCHER & LUỒNG ĐƠN HÀNG GIẢ LẬP (ORDERS)
-- ============================================================================
PRINT N'--- Khởi tạo Đơn hàng, Voucher & Giao dịch ---';

-- 4.1. Vouchers
INSERT INTO Vouchers (Code, DiscountType, DiscountValue, MinOrderValue, ExpiryDate) VALUES
('NEWBIE20K', 'FIXED_AMOUNT', 20000, 50000, '2026-12-31'),
('GUSTO_SALE50', 'PERCENT', 50.00, 100000, '2026-11-30');

-- Bắt ID Món ăn của Phở Thìn để tạo đơn test
DECLARE @PhoItem INT = (SELECT ItemID FROM MenuItems WHERE ItemName=N'Phở Bò Tái Lăn Nghệ Nhân' AND RestaurantID=@Merchant_PhoThin);
DECLARE @QuayItem INT = (SELECT ItemID FROM MenuItems WHERE ItemName=N'Quẩy Giòn Khổng Lồ' AND RestaurantID=@Merchant_PhoThin);

DECLARE @Order1 UNIQUEIDENTIFIER = NEWID();
DECLARE @Order2 UNIQUEIDENTIFIER = NEWID();

-- 4.2. Orders
INSERT INTO Orders (OrderID, CustomerID, RestaurantID, DriverID, Status, AddressFrom, AddressTo, CustomerNote, SubTotal, DeliveryFee, DiscountAmount, TotalAmount) VALUES
(@Order1, @CustomerID, @Merchant_PhoThin, @DriverID, 'DELIVERING', N'13 Lò Đúc, HN', N'Landmark 72 Tower, Cầu Giấy, HN', N'Cho nhiều hành chẻ em nhé shop', 85000, 15000, 0, 100000),
(@Order2, @CustomerID, @Merchant_PhoThin, NULL, 'FINDING_DRIVER', N'13 Lò Đúc, HN', N'Chung cư Time City, Hoàng Mai, HN', NULL, 150000, 20000, 20000, 150000);

-- 4.3. Order Details
INSERT INTO OrderDetails (OrderID, ItemID, Quantity, UnitPrice, Options) VALUES
(@Order1, @PhoItem, 1, 75000, N'Hành chẻ (Không lấy hành tây)'),
(@Order1, @QuayItem, 1, 10000, NULL),
(@Order2, @PhoItem, 2, 75000, NULL);

-- 4.4. Payments, Reviews & Disputes
INSERT INTO Payments (OrderID, Method, Status, PaidAt) VALUES
(@Order1, 'PAYOS', 'PAID', GETDATE()),
(@Order2, 'COD', 'UNPAID', NULL);

INSERT INTO Reviews (OrderID, CustomerID, DriverRating, RestaurantRating, Comment) VALUES
(@Order2, @CustomerID, 5, 4, N'Phở ngon nhưng ship hơi chậm xíu!');

INSERT INTO Disputes (OrderID, ReporterID, Reason, Status) VALUES
(@Order1, @CustomerID, N'Món ăn bị đổ nước lèo ra ngoài túi!', 'OPEN');

PRINT N'✅ HOÀN TẤT! Dữ liệu mẫu Order và toàn bộ JSON Data đã được hợp nhất thành công!';
GO
