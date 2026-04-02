import React from "react";

const NotificationsPage = () => {
  return (
    <div className="bg-background min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-display font-bold text-3xl">
            Trung tâm Thông báo
          </h1>
          <button className="text-primary font-sans font-semibold hover:underline">
            Đánh dấu tất cả đã đọc
          </button>
        </div>

        {/* Group: Hôm nay */}
        <h2 className="font-display font-semibold text-lg text-on-surface-variant mb-4">
          Hôm nay
        </h2>
        <div className="space-y-4 mb-8">
          {/* Notification Item */}
          <div className="bg-surface-low p-4 rounded-2xl flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0 text-primary">
              🔔
            </div>
            <div className="flex-1 pt-1">
              <h3 className="font-sans font-semibold text-gray-900">
                Đơn hàng đang đến!
              </h3>
              <p className="font-sans text-on-surface-variant text-sm mt-1">
                Tài xế đang trên đường giao đơn hàng #1928 đến bạn.
              </p>
              <span className="font-sans text-xs text-on-surface-variant/70 mt-2 block">
                14:30
              </span>
            </div>
            {/* Unread badge */}
            <div className="w-3 h-3 bg-[#fb5151] rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
