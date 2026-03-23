import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import Navbar from "../components/navbar"

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users from Firestore
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const usersCol = collection(db, "users");
      const snapshot = await getDocs(usersCol);
      const usersList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersList);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete user from Firestore
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "users", id));
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-6 bg-gray-50 font-montserrat">
      <Navbar />

      <h1 className="text-xl md:text-2xl font-bold mb-6 mt-20">
        Manage Users
      </h1>

      {loading ? (
        <p>Loading users...</p>
      ) : users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="bg-white shadow rounded-xl overflow-hidden">

          {/* 👇 RESPONSIVE WRAPPER */}
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[600px] text-left border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 md:p-4 font-medium border-b">Name</th>
                  <th className="p-3 md:p-4 font-medium border-b">Email</th>
                  <th className="p-3 md:p-4 font-medium border-b">Role</th>
                  <th className="p-3 md:p-4 font-medium border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="p-3 md:p-4 border-b font-semibold">
                      {user.name || "N/A"}
                    </td>
                    <td className="p-3 md:p-4 border-b text-sm md:text-base break-all">
                      {user.email}
                    </td>
                    <td className="p-3 md:p-4 border-b">
                      {user.role || "User"}
                    </td>
                    <td className="p-3 md:p-4 border-b">
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition text-sm md:text-base"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      )}
    </div>
  );
};

export default ManageUsers;