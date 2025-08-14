import { TbLogout } from "react-icons/tb";
import { useAuth } from "../Context/AuthProvider.js";
import toast from "react-hot-toast";

const Logout = ({ mode }) => {
  const [authuser, setAuthuser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthuser({
        ...authuser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logged out Successfully");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className={`btn ${
        mode === "light"
          ? "btn-outline-danger"
          : "btn-danger text-light"
      } fw-semibold px-4 py-2 shadow-sm`}
      style={{
        borderRadius: "25px",
        fontWeight: "600",
        letterSpacing: "0.05em",
        transition: "all 0.3s ease",
        boxShadow: mode === "light" ? "0 4px 8px rgba(220,53,69,0.3)" : "0 4px 12px rgba(255,99,71,0.7)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = mode === "light" ? "#dc3545" : "#ff6347";
        e.currentTarget.style.color = "white";
        e.currentTarget.style.boxShadow = "0 6px 15px rgba(255,99,71,0.9)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "";
        e.currentTarget.style.color = mode === "light" ? "" : "white";
        e.currentTarget.style.boxShadow = mode === "light" ? "0 4px 8px rgba(220,53,69,0.3)" : "0 4px 12px rgba(255,99,71,0.7)";
      }}
    >
      Logout <TbLogout  size={20} />
    </button>
  );
};

export default Logout;
