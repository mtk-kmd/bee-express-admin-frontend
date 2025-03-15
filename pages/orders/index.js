import { useAuth } from "@/context/AuthContext";
import OrderDashboard from "@/components/admin/dashboard";

export default function Order() {
    const { getUserDetails } = useAuth();
    const user = getUserDetails();

    return (
        <>
            <OrderDashboard />
        </>
    );
}
