'use client';

import AdminPanel from '../../components/AdminPanel';

export default function AdminPage() {
    return (
        <div className="container" style={{ padding: '100px 0' }}>
            <h2>Admin Dashboard</h2>
            <AdminPanel />
        </div>
    );
}