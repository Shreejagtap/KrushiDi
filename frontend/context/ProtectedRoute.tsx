import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/(auth)/login"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return null; // Render nothing while redirecting
  }

  return <>{children}</>;
};

export default ProtectedRoute;
