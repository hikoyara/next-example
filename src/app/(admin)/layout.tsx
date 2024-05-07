import React from "react";

const AdminLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="bg-green-300 p-4">
            <div>管理者レイアウト</div>
            {children}
        </div>
    );
};

export default AdminLayout;
