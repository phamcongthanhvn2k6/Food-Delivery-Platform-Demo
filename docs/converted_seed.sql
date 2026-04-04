-- ============================================================================
-- PHẦN 1: DỌN DẸP DỮ LIỆU CŨ VÀ RESET SỐ NHẢY ID (SAFE DROP)
-- ============================================================================
-- CASCADE sẽ tự động dọn dẹp các bảng có quan hệ khóa ngoại (Foreign Key)
TRUNCATE TABLE 
    Disputes, 
    Reviews, 
    Payments, 
    OrderDetails, 
    Orders, 
    MenuItems, 
    MenuCategories, 
    Vouchers, 
    Restaurants, 
    DriverProfiles, 
    Users 
RESTART IDENTITY CASCADE;

-- ============================================================================
-- PHẦN 2, 3 & 4: KHỞI TẠO DỮ LIỆU BẰNG PL/pgSQL
-- ============================================================================
DO $$
DECLARE
    _hash VARCHAR(255) := '$2b$10$rUjh6TTg2NYOsIeSw11yVeMGMMo8.5zOOIqpIAhX1DF/4WMBxGrLW';
    _customer_id INT;
    _driver_id INT;
    _merchant_phothin INT;
    _merchant_json INT;
    _cat_main INT;
    _cat_side INT;
    _cat_drink INT;
    _pho_item INT;
    _quay_item INT;
    _order1 UUID := gen_random_uuid();
    _order2 UUID := gen_random_uuid();
BEGIN
    RAISE NOTICE '--- Bắt đầu Khởi tạo Users ---';

    -- 2.1. Users cho luồng Đơn hàng (Phở Thìn)
    INSERT INTO Users (Phone, PasswordHash, FullName, Email, Role, Status, AvatarURL) VALUES 
    ('0901234567', _hash, 'Nguyễn Trọng Khách Hàng', 'customer@gmail.com', 'CUSTOMER', 'ACTIVE', 'https://avatar.iran.liara.run/public/outfit/13'),
    ('0988888888', _hash, 'Hệ Thống Phở Thìn', 'phothin@gmail.com', 'MERCHANT', 'ACTIVE', 'https://avatar.iran.liara.run/public/outfit/64'),
    ('0912222222', _hash, 'Lê Văn Tài Xế', 'shipper@gmail.com', 'DRIVER', 'ACTIVE', 'https://avatar.iran.liara.run/public/job/driver'),
    ('0999999999', _hash, 'Quản Trị Viên (Admin)', 'admin@gmail.com', 'ADMIN', 'ACTIVE', 'https://avatar.iran.liara.run/public/job/police');

    -- 2.2. Users từ file JSON
    INSERT INTO Users (Phone, PasswordHash, FullName, Email, Role, CreatedAt, Status) VALUES 
    ('0990000001', _hash, 'Phạm Công Thành', 'user@gmail.com', 'CUSTOMER', '2026-03-22T16:11:21', 'ACTIVE'),
    ('0990000002', _hash, 'Phạm Công Thành', 'phamcongt56@gmail.com', 'CUSTOMER', '2026-03-23T07:35:52', 'ACTIVE'),
    ('0888888888', _hash, 'Hệ thống Nhà Hàng JSON', 'json_merchant@gmail.com', 'MERCHANT', NOW(), 'ACTIVE');

    -- Lấy ID các Actor để thao tác
    SELECT UserID INTO _customer_id FROM Users WHERE Email='customer@gmail.com';
    SELECT UserID INTO _driver_id FROM Users WHERE Email='shipper@gmail.com';
    SELECT UserID INTO _merchant_phothin FROM Users WHERE Email='phothin@gmail.com';
    SELECT UserID INTO _merchant_json FROM Users WHERE Email='json_merchant@gmail.com';

    -- 2.3. Hồ sơ Tài xế
    INSERT INTO DriverProfiles (DriverID, LicenseNumber, VehiclePlate, Rating, WalletBalance, CurrentLat, CurrentLong, OperationStatus) VALUES
    (_driver_id, 'A1-778899', '29-S1 888.88', 4.9, 1500000, 21.028511, 105.804817, 'AVAILABLE');


    RAISE NOTICE '--- Khởi tạo Nhà hàng & Thực đơn ---';

    -- 3.1. Dữ liệu Nhà hàng (Lưu ý: Supabase boolean thường dùng TRUE/FALSE thay vì 1/0)
    INSERT INTO Restaurants (RestaurantID, BrandName, Address, Category, CommissionRate, Rating, Lat, Long, IsOpen) VALUES
    (_merchant_phothin, 'Phở Thìn Lò Đúc - Chính Gốc', '13 Phố Lò Đúc, Hai Bà Trưng, Hà Nội', 'Bún/Phở', 20.00, 4.8, 21.018511, 105.854817, TRUE),
    (_merchant_json, 'JSON Mega Food Station', 'Hệ thống Online Toàn Quốc', 'Tổng Hợp', 15.00, 4.5, NULL, NULL, TRUE);

    -- 3.2. Danh mục & Món ăn của Phở Thìn
    INSERT INTO MenuCategories (RestaurantID, Name) VALUES 
    (_merchant_phothin, 'Món Phở Chính'), (_merchant_phothin, 'Món Ăn Kèm'), (_merchant_phothin, 'Nước Uống');

    SELECT CategoryID INTO _cat_main FROM MenuCategories WHERE Name='Món Phở Chính' AND RestaurantID=_merchant_phothin;
    SELECT CategoryID INTO _cat_side FROM MenuCategories WHERE Name='Món Ăn Kèm' AND RestaurantID=_merchant_phothin;
    SELECT CategoryID INTO _cat_drink FROM MenuCategories WHERE Name='Nước Uống' AND RestaurantID=_merchant_phothin;

    INSERT INTO MenuItems (RestaurantID, CategoryID, ItemName, Description, Price, ImageURL, IsAvailable) VALUES
    (_merchant_phothin, _cat_main, 'Phở Bò Tái Lăn Nghệ Nhân', 'Bò xào lăn siêu dầy thịt, nước dùng hầm xương 24h đậm đà', 75000, 'https://images.unsplash.com/photo-1582878826629-29b7ad1cb438?q=80&w=600&auto=format&fit=crop', TRUE),
    (_merchant_phothin, _cat_main, 'Phở Đặc Biệt (Full Topping)', 'Tái, Chín, Nạm, Gầu, Viên, Trứng Trần', 95000, 'https://images.unsplash.com/photo-1628045973801-b7d15fc3521d?q=80&w=600&auto=format&fit=crop', TRUE),
    (_merchant_phothin, _cat_side, 'Quẩy Giòn Khổng Lồ', 'Quẩy nóng giòn nhúng phở', 10000, 'https://images.pexels.com/photos/14856015/pexels-photo-14856015.jpeg?auto=compress&cs=tinysrgb&w=600', TRUE),
    (_merchant_phothin, _cat_drink, 'Trà Đá Thái Nguyên', 'Thơm ngon mát lạnh', 5000, 'https://images.unsplash.com/photo-1499557404455-87bd33e215f7?q=80&w=600&auto=format&fit=crop', TRUE);

    -- 3.3. Danh mục & Món ăn từ file JSON
    INSERT INTO MenuCategories (RestaurantID, Name) VALUES 
    (_merchant_json, 'Cơm'), (_merchant_json, 'Bún / Phở / Mì'), (_merchant_json, 'Đồ ăn nhanh'),
    (_merchant_json, 'Ăn vặt'), (_merchant_json, 'Hải sản'), (_merchant_json, 'Lẩu'),
    (_merchant_json, 'Đồ nướng'), (_merchant_json, 'Salad & Đồ chay'), (_merchant_json, 'Tráng miệng'),
    (_merchant_json, 'Món nhậu'), (_merchant_json, 'Cà phê'), (_merchant_json, 'Trà sữa'),
    (_merchant_json, 'Trà trái cây'), (_merchant_json, 'Sinh tố & Nước ép'), (_merchant_json, 'Nước ngọt & Bia');

    -- Sử dụng CTE (Common Table Expression) thay cho bảng tạm @TempProducts
    WITH TempProducts(ItemName, Description, Price, CategoryName, ImageURL) AS (
        VALUES
        ('Cơm chiên dương châu', 'Tuyệt phẩm cơm chiên dương châu...', 25000, 'Cơm', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'),
        ('Cơm tấm sườn bì chả', 'Tuyệt phẩm cơm tấm sườn bì chả...', 35000, 'Cơm', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'),
        ('Cơm gà xối mỡ', 'Tuyệt phẩm cơm gà xối mỡ...', 45000, 'Cơm', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'),
        ('Cơm bò lúc lắc', 'Tuyệt phẩm cơm bò lúc lắc...', 55000, 'Cơm', 'https://images.unsplash.com/photo-1484723091791-00d759ce43db'),
        ('Cơm rang dưa bò', 'Tuyệt phẩm cơm rang dưa bò...', 65000, 'Cơm', 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9'),
        ('Cơm thố đà điểu', 'Tuyệt phẩm cơm thố đà điểu...', 75000, 'Cơm', 'https://images.unsplash.com/photo-1432139555190-58524dae6a55'),
        ('Phở bò tái nạm', 'Tuyệt phẩm phở bò tái nạm...', 85000, 'Bún / Phở / Mì', 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'),
        ('Phở gà ta', 'Tuyệt phẩm phở gà ta...', 20000, 'Bún / Phở / Mì', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'),
        ('Bún chả Hà Nội', 'Tuyệt phẩm bún chả hà nội...', 30000, 'Bún / Phở / Mì', 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'),
        ('Bún bò Huế', 'Tuyệt phẩm bún bò huế...', 40000, 'Bún / Phở / Mì', 'https://images.unsplash.com/photo-1554502573-04e8ac7c7a52'),
        ('Mì xào hải sản', 'Tuyệt phẩm mì xào hải sản...', 50000, 'Bún / Phở / Mì', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'),
        ('Miến lươn trộn', 'Tuyệt phẩm miến lươn trộn...', 60000, 'Bún / Phở / Mì', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1'),
        ('Gà rán giòn cay', 'Tuyệt phẩm gà rán giòn cay...', 70000, 'Đồ ăn nhanh', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'),
        ('Hamburger bò phô mai', 'Tuyệt phẩm hamburger bò phô mai...', 80000, 'Đồ ăn nhanh', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'),
        ('Khoai tây chiên', 'Tuyệt phẩm khoai tây chiên...', 15000, 'Đồ ăn nhanh', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'),
        ('Pizza hải sản', 'Tuyệt phẩm pizza với phần đế nướng...', 65000, 'Đồ ăn nhanh', 'https://images.unsplash.com/photo-1484723091791-00d759ce43db'),
        ('Hotdog phô mai', 'Tuyệt phẩm hotdog phô mai...', 35000, 'Đồ ăn nhanh', 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9'),
        ('Gà viên chiên', 'Tuyệt phẩm gà viên chiên...', 45000, 'Đồ ăn nhanh', 'https://images.unsplash.com/photo-1432139555190-58524dae6a55'),
        ('Bánh tráng trộn', 'Tuyệt phẩm bánh tráng trộn...', 55000, 'Ăn vặt', 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'),
        ('Bánh tráng nướng', 'Tuyệt phẩm bánh tráng nướng...', 65000, 'Ăn vặt', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'),
        ('Xúc xích nướng', 'Tuyệt phẩm xúc xích nướng...', 75000, 'Ăn vặt', 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'),
        ('Nem chua rán', 'Tuyệt phẩm nem chua rán...', 85000, 'Ăn vặt', 'https://images.unsplash.com/photo-1554502573-04e8ac7c7a52'),
        ('Bánh gà phô mai', 'Tuyệt phẩm bánh gà phô mai...', 20000, 'Ăn vặt', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'),
        ('Gỏi cuốn tôm thịt', 'Tuyệt phẩm gỏi cuốn tôm thịt...', 30000, 'Ăn vặt', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1'),
        ('Mực hấp gừng', 'Tuyệt phẩm mực hấp gừng...', 40000, 'Hải sản', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'),
        ('Tôm sú nướng muối ớt', 'Tuyệt phẩm tôm sú nướng muối ớt...', 50000, 'Hải sản', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'),
        ('Cua rang me', 'Tuyệt phẩm cua rang me...', 60000, 'Hải sản', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'),
        ('Ốc hương xào bơ tỏi', 'Tuyệt phẩm ốc hương xào bơ tỏi...', 70000, 'Hải sản', 'https://images.unsplash.com/photo-1484723091791-00d759ce43db'),
        ('Lẩu thập cẩm hải sản', 'Tuyệt phẩm lẩu thập cẩm hải sản...', 80000, 'Hải sản', 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9'),
        ('Nghêu hấp thái', 'Tuyệt phẩm nghêu hấp thái...', 15000, 'Hải sản', 'https://images.unsplash.com/photo-1432139555190-58524dae6a55'),
        ('Lẩu thái tomyum', 'Tuyệt phẩm lẩu thái tomyum...', 25000, 'Lẩu', 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'),
        ('Lẩu riêu cua bắp bò', 'Tuyệt phẩm lẩu riêu cua bắp bò...', 35000, 'Lẩu', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'),
        ('Lẩu cá tầm', 'Tuyệt phẩm lẩu cá tầm...', 45000, 'Lẩu', 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'),
        ('Lẩu ếch măng cay', 'Tuyệt phẩm lẩu ếch măng cay...', 55000, 'Lẩu', 'https://images.unsplash.com/photo-1554502573-04e8ac7c7a52'),
        ('Lẩu nấm thiên nhiên', 'Tuyệt phẩm lẩu nấm thiên nhiên...', 65000, 'Lẩu', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'),
        ('Lẩu bò nhúng dấm', 'Tuyệt phẩm lẩu bò nhúng dấm...', 75000, 'Lẩu', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1'),
        ('Bò nướng lá lốt', 'Tuyệt phẩm bò nướng lá lốt...', 85000, 'Đồ nướng', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'),
        ('Sườn heo nướng BBQ', 'Tuyệt phẩm sườn heo nướng bbq...', 20000, 'Đồ nướng', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'),
        ('Dẻ sườn bò nướng', 'Tuyệt phẩm dẻ sườn bò nướng...', 30000, 'Đồ nướng', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'),
        ('Ba chỉ heo nướng tảng', 'Tuyệt phẩm ba chỉ heo nướng tảng...', 40000, 'Đồ nướng', 'https://images.unsplash.com/photo-1484723091791-00d759ce43db'),
        ('Bạch tuộc nướng sa tế', 'Tuyệt phẩm bạch tuộc nướng sa tế...', 50000, 'Đồ nướng', 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9'),
        ('Chim cút nướng mộc', 'Tuyệt phẩm chim cút nướng mộc...', 60000, 'Đồ nướng', 'https://images.unsplash.com/photo-1432139555190-58524dae6a55'),
        ('Salad cá ngừ ngâm dầu', 'Tuyệt phẩm salad cá ngừ ngâm dầu...', 70000, 'Salad & Đồ chay', 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'),
        ('Salad ức gà áp chảo', 'Tuyệt phẩm salad ức gà áp chảo...', 80000, 'Salad & Đồ chay', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'),
        ('Gỏi cuốn chay', 'Tuyệt phẩm gỏi cuốn chay...', 15000, 'Salad & Đồ chay', 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'),
        ('Cơm sen hấp nấm', 'Tuyệt phẩm cơm sen hấp nấm...', 25000, 'Salad & Đồ chay', 'https://images.unsplash.com/photo-1554502573-04e8ac7c7a52'),
        ('Nấm kim châm xào mỡ hành', 'Tuyệt phẩm nấm kim châm xào mỡ hành...', 35000, 'Salad & Đồ chay', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'),
        ('Đậu hũ non sốt nấm xì dầu', 'Tuyệt phẩm đậu hũ non sốt nấm xì dầu...', 45000, 'Salad & Đồ chay', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1'),
        ('Bánh Tiramisu', 'Tuyệt phẩm bánh tiramisu...', 55000, 'Tráng miệng', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'),
        ('Bánh Mousse chanh dây', 'Tuyệt phẩm bánh mousse chanh dây...', 65000, 'Tráng miệng', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'),
        ('Chè khúc bạch nhãn', 'Tuyệt phẩm chè khúc bạch nhãn...', 75000, 'Tráng miệng', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'),
        ('Sữa chua trân châu cốt dừa', 'Tuyệt phẩm sữa chua trân châu cốt dừa...', 85000, 'Tráng miệng', 'https://images.unsplash.com/photo-1484723091791-00d759ce43db'),
        ('Kem bơ Đà Lạt', 'Tuyệt phẩm kem bơ đà lạt...', 20000, 'Tráng miệng', 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9'),
        ('Bánh Flan caramen', 'Tuyệt phẩm bánh flan caramen...', 30000, 'Tráng miệng', 'https://images.unsplash.com/photo-1432139555190-58524dae6a55'),
        ('Mực xé cay', 'Tuyệt phẩm mực xé cay...', 40000, 'Món nhậu', 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'),
        ('Bò khô dẻo', 'Tuyệt phẩm bò khô dẻo...', 50000, 'Món nhậu', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'),
        ('Chả ram tôm đất', 'Tuyệt phẩm chả ram tôm đất...', 60000, 'Món nhậu', 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'),
        ('Nem phùng', 'Tuyệt phẩm nem phùng...', 70000, 'Món nhậu', 'https://images.unsplash.com/photo-1554502573-04e8ac7c7a52'),
        ('Cơm cháy kho quẹt', 'Tuyệt phẩm cơm cháy kho quẹt...', 80000, 'Món nhậu', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'),
        ('Sụn gà rang muối', 'Tuyệt phẩm sụn gà rang muối...', 15000, 'Món nhậu', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1'),
        ('Cà phê đen đá', 'Tuyệt phẩm cà phê đen đá...', 25000, 'Cà phê', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'),
        ('Cà phê sữa đá pha phin', 'Tuyệt phẩm cà phê sữa đá pha phin...', 35000, 'Cà phê', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'),
        ('Bạc xỉu đá', 'Tuyệt phẩm bạc xỉu đá...', 45000, 'Cà phê', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'),
        ('Cà phê muối Huế', 'Tuyệt phẩm cà phê muối huế...', 55000, 'Cà phê', 'https://images.unsplash.com/photo-1484723091791-00d759ce43db'),
        ('Espresso nóng', 'Tuyệt phẩm espresso nóng...', 65000, 'Cà phê', 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9'),
        ('Cappuccino sương sáo', 'Tuyệt phẩm cappuccino sương sáo...', 75000, 'Cà phê', 'https://images.unsplash.com/photo-1432139555190-58524dae6a55'),
        ('Trà sữa trân châu đường đen', 'Tuyệt phẩm trà sữa trân châu đường đen...', 85000, 'Trà sữa', 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'),
        ('Trà sữa thái xanh thạch dừa', 'Tuyệt phẩm trà sữa thái xanh thạch dừa...', 20000, 'Trà sữa', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'),
        ('Trà sữa nướng', 'Tuyệt phẩm trà sữa nướng...', 30000, 'Trà sữa', 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'),
        ('Trà sữa matcha đậu đỏ', 'Tuyệt phẩm trà sữa matcha đậu đỏ...', 40000, 'Trà sữa', 'https://images.unsplash.com/photo-1554502573-04e8ac7c7a52'),
        ('Hồng trà kem cheese', 'Tuyệt phẩm hồng trà kem cheese...', 50000, 'Trà sữa', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'),
        ('Trà sữa kem trứng nướng', 'Tuyệt phẩm trà sữa kem trứng nướng...', 60000, 'Trà sữa', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1'),
        ('Trà đào cam sả', 'Tuyệt phẩm trà đào cam sả...', 70000, 'Trà trái cây', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'),
        ('Trà vải nhiệt đới', 'Tuyệt phẩm trà vải nhiệt đới...', 80000, 'Trà trái cây', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'),
        ('Trà sen vàng macchiato', 'Tuyệt phẩm trà sen vàng macchiato...', 15000, 'Trà trái cây', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'),
        ('Trà dâu tằm', 'Tuyệt phẩm trà dâu tằm...', 25000, 'Trà trái cây', 'https://images.unsplash.com/photo-1484723091791-00d759ce43db'),
        ('Trà chanh dây tuyết', 'Tuyệt phẩm trà chanh dây tuyết...', 35000, 'Trà trái cây', 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9'),
        ('Lục trà ổi hồng', 'Tuyệt phẩm lục trà ổi hồng...', 45000, 'Trà trái cây', 'https://images.unsplash.com/photo-1432139555190-58524dae6a55'),
        ('Sinh tố bơ béo', 'Tuyệt phẩm sinh tố bơ béo...', 55000, 'Sinh tố & Nước ép', 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'),
        ('Sinh tố xoài cát', 'Tuyệt phẩm sinh tố xoài cát...', 65000, 'Sinh tố & Nước ép', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'),
        ('Sinh tố dâu tây', 'Tuyệt phẩm sinh tố dâu tây...', 75000, 'Sinh tố & Nước ép', 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0'),
        ('Nước ép táo nguyên chất', 'Tuyệt phẩm nước ép táo nguyên chất...', 85000, 'Sinh tố & Nước ép', 'https://images.unsplash.com/photo-1554502573-04e8ac7c7a52'),
        ('Nước ép dứa', 'Tuyệt phẩm nước ép dứa...', 20000, 'Sinh tố & Nước ép', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'),
        ('Nước ép dưa hấu', 'Tuyệt phẩm nước ép dưa hấu...', 30000, 'Sinh tố & Nước ép', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1'),
        ('Coca Cola lon', 'Tuyệt phẩm coca cola lon...', 40000, 'Nước ngọt & Bia', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'),
        ('Pepsi lon', 'Tuyệt phẩm pepsi lon...', 50000, 'Nước ngọt & Bia', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'),
        ('Sprite lon', 'Tuyệt phẩm sprite lon...', 60000, 'Nước ngọt & Bia', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445'),
        ('Bia Tiger bạc', 'Tuyệt phẩm bia tiger bạc...', 70000, 'Nước ngọt & Bia', 'https://images.unsplash.com/photo-1484723091791-00d759ce43db'),
        ('Bia Heineken lon', 'Tuyệt phẩm bia heineken lon...', 80000, 'Nước ngọt & Bia', 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9'),
        ('Nước suối Aquafina', 'Tuyệt phẩm nước suối aquafina...', 15000, 'Nước ngọt & Bia', 'https://images.unsplash.com/photo-1432139555190-58524dae6a55')
    )
    INSERT INTO MenuItems (RestaurantID, CategoryID, ItemName, Description, Price, ImageURL, IsAvailable)
    SELECT 
        _merchant_json, C.CategoryID, T.ItemName, T.Description, T.Price, T.ImageURL, TRUE
    FROM TempProducts T
    INNER JOIN MenuCategories C ON T.CategoryName = C.Name AND C.RestaurantID = _merchant_json;


    RAISE NOTICE '--- Khởi tạo Đơn hàng, Voucher & Giao dịch ---';

    -- 4.1. Vouchers
    INSERT INTO Vouchers (Code, DiscountType, DiscountValue, MinOrderValue, ExpiryDate) VALUES
    ('NEWBIE20K', 'FIXED_AMOUNT', 20000, 50000, '2026-12-31'),
    ('GUSTO_SALE50', 'PERCENT', 50.00, 100000, '2026-11-30');

    -- Lấy ID Món ăn của Phở Thìn để tạo đơn test
    SELECT ItemID INTO _pho_item FROM MenuItems WHERE ItemName='Phở Bò Tái Lăn Nghệ Nhân' AND RestaurantID=_merchant_phothin;
    SELECT ItemID INTO _quay_item FROM MenuItems WHERE ItemName='Quẩy Giòn Khổng Lồ' AND RestaurantID=_merchant_phothin;

    -- 4.2. Orders
    INSERT INTO Orders (OrderID, CustomerID, RestaurantID, DriverID, Status, AddressFrom, AddressTo, CustomerNote, SubTotal, DeliveryFee, DiscountAmount, TotalAmount) VALUES
    (_order1, _customer_id, _merchant_phothin, _driver_id, 'DELIVERING', '13 Lò Đúc, HN', 'Landmark 72 Tower, Cầu Giấy, HN', 'Cho nhiều hành chẻ em nhé shop', 85000, 15000, 0, 100000),
    (_order2, _customer_id, _merchant_phothin, NULL, 'FINDING_DRIVER', '13 Lò Đúc, HN', 'Chung cư Time City, Hoàng Mai, HN', NULL, 150000, 20000, 20000, 150000);

    -- 4.3. Order Details
    INSERT INTO OrderDetails (OrderID, ItemID, Quantity, UnitPrice, Options) VALUES
    (_order1, _pho_item, 1, 75000, 'Hành chẻ (Không lấy hành tây)'),
    (_order1, _quay_item, 1, 10000, NULL),
    (_order2, _pho_item, 2, 75000, NULL);

    -- 4.4. Payments, Reviews & Disputes
    INSERT INTO Payments (OrderID, Method, Status, PaidAt) VALUES
    (_order1, 'PAYOS', 'PAID', NOW()),
    (_order2, 'COD', 'UNPAID', NULL);

    INSERT INTO Reviews (OrderID, CustomerID, DriverRating, RestaurantRating, Comment) VALUES
    (_order2, _customer_id, 5, 4, 'Phở ngon nhưng ship hơi chậm xíu!');

    INSERT INTO Disputes (OrderID, ReporterID, Reason, Status) VALUES
    (_order1, _customer_id, 'Món ăn bị đổ nước lèo ra ngoài túi!', 'OPEN');

    RAISE NOTICE '✅ HOÀN TẤT! Dữ liệu mẫu Order và toàn bộ JSON Data đã được hợp nhất thành công!';
END $$;