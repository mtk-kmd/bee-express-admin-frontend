import { useState } from "react";
import Link from "next/link";

export default function Sidebar({ isCollapsed, toggleSidebar }) {
    return (
        <div className={`bg-dark text-white ${isCollapsed ? "collapsed" : ""}`} id="sidebar">
            <div className="p-3">
                <h3 className="text-center text-nowrap">Bee Express Admin</h3>
                <hr />
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link href="/dashboard" className="nav-link text-white active">
                            <i className="bi bi-speedometer2 me-2"></i>
                            {!isCollapsed && <span>Dashboard</span>}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/orders" className="nav-link text-white">
                            <i className="bi bi-box me-2"></i>
                            {!isCollapsed && <span>Orders</span>}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/chat" className="nav-link text-white active">
                            <i className="bi bi-speedometer2 me-2"></i>
                            {!isCollapsed && <span>Chat</span>}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/user" className="nav-link text-white">
                            <i className="bi bi-people me-2"></i>
                            {!isCollapsed && <span>Users</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
