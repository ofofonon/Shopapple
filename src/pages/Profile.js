import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { db } from "../firebase"
import Navbar from "../components/navbar"

const Profile = () => {
  const { user, role, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  // Editable fields
  const [name, setName] = useState("")
  const [transferAccount, setTransferAccount] = useState("")
  const [phone, setPhone] = useState("")
  const [state, setState] = useState("Abuja")
  const [deliveryLocation, setDeliveryLocation] = useState("")
  const [landmark, setLandmark] = useState("")
  const country = "Nigeria"

  const [editMode, setEditMode] = useState(false)
  const [loading, setLoading] = useState(false)

  // LOAD USER DATA FROM FIRESTORE
  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return

      try {
        const userRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(userRef)

        if (docSnap.exists()) {
          const data = docSnap.data()

          setName(data.name || "")
          setTransferAccount(data.transferAccount || "")
          setPhone(data.phone || "")
          setState(data.state || "Abuja")
          setDeliveryLocation(data.deliveryLocation || "")
          setLandmark(data.landmark || "")
        }
      } catch (err) {
        console.error("Error fetching profile:", err)
      }
    }

    fetchProfile()
  }, [user])

  const handleLogout = async () => {
    await logout()
    navigate("/login")
  }

  // Save profile changes to Firestore
  const handleSaveProfile = async () => {
    setLoading(true)
    try {
      const userRef = doc(db, "users", user.uid)

      await setDoc(
        userRef,
        {
          name,
          transferAccount,
          phone,
          state,
          deliveryLocation,
          landmark
        },
        { merge: true }
      )

      setEditMode(false)
    } catch (err) {
      console.error("Error updating profile:", err)
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-4 font-montserrat">
        <Navbar />
        
      <div className="w-full max-w-md space-y-6 mt-10">
      <h1 className="text-4xl text-black font-bold ">Profile</h1>
        {/* User Card */}
        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <div className="flex items-center gap-4">

            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-xl font-bold text-white">
              {name ? name[0].toUpperCase() : user?.email[0].toUpperCase()}
            </div>

            {/* Name, Email, Role */}
            <div className="flex-1">
              {editMode ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-2 py-1"
                />
              ) : (
                <p className="text-lg font-semibold text-gray-800">
                  {name || "User Name"}
                </p>
              )}

              <p className="text-gray-500 text-sm">{user?.email}</p>
              <p className="text-gray-400 text-xs mt-1 uppercase tracking-wide">
                Role: {role}
              </p>
            </div>

            <button
              onClick={() => setEditMode(!editMode)}
              className="text-blue-500 hover:underline text-sm"
            >
              {editMode ? "Cancel" : "Edit"}
            </button>

          </div>

          {/* Transfer Account */}
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-1">Transfer Account</label>
            {editMode ? (
              <input
                type="text"
                value={transferAccount}
                onChange={(e) => setTransferAccount(e.target.value)}
                placeholder="Enter transfer account name"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            ) : (
              <p className="text-gray-600 font-semibold">{transferAccount || "Not set"}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            {editMode ? (
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            ) : (
              <p className="text-gray-600 font-semibold">{phone || "Not set"}</p>
            )}
          </div>

          {/* Country & State */}
          <div className="mt-4 flex gap-2">
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">Country</label>
              <p className="text-gray-600 font-semibold">{country}</p>
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">State</label>
              {editMode ? (
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                >
                  <option>Abuja</option>
                  <option>Lagos</option>
                  <option>Uyo</option>
                  <option>Port Harcourt</option>
                </select>
              ) : (
                <p className="text-gray-600 font-semibold">{state}</p>
              )}
            </div>
          </div>

          {/* Delivery Location */}
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-1">Delivery Location</label>
            {editMode ? (
              <input
                type="text"
                value={deliveryLocation}
                onChange={(e) => setDeliveryLocation(e.target.value)}
                placeholder="Enter delivery location"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            ) : (
              <p className="text-gray-600 font-semibold">{deliveryLocation || "Not set"}</p>
            )}
          </div>

          {/* Landmark */}
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-1">Landmark</label>
            {editMode ? (
              <input
                type="text"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
                placeholder="Enter notable landmark"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            ) : (
              <p className="text-gray-600 font-semibold">{landmark || "Not set"}</p>
            )}
          </div>

          {/* Save Button */}
          {editMode && (
            <button
              onClick={handleSaveProfile}
              disabled={loading}
              className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded font-semibold transition"
            >
              {loading ? "Saving..." : "Save Profile"}
            </button>
          )}
        </div>

        {/* Links / Actions */}
        <div className="bg-white rounded-xl shadow divide-y divide-gray-200">
          <button
            onClick={() => setEditMode(true)}
            className="w-full text-left px-6 py-4 hover:bg-gray-50 flex items-center gap-3 text-gray-800"
          >
            <i className="fa-solid fa-credit-card"></i> Transfer Account
          </button>

          <button
            onClick={() => navigate("/my-orders")}
            className="w-full text-left px-6 py-4 hover:bg-gray-50 flex items-center gap-3 text-gray-800"
          >
            <i className="fa-solid fa-history"></i> Sales History
          </button>

          <button
            onClick={() => navigate("/faq")}
            className="w-full text-left px-6 py-4 hover:bg-gray-50 flex items-center gap-3 text-gray-800"
          >
            <i className="fa-solid fa-question-circle"></i> FAQ
          </button>

          <button
            onClick={() => navigate("/tnc")}
            className="w-full text-left px-6 py-4 hover:bg-gray-50 flex items-center gap-3 text-gray-800"
          >
            <i className="fa-solid fa-file-contract"></i> Terms & Services
          </button>

          <button
            onClick={handleLogout}
            className="w-full text-left px-6 py-4 hover:bg-gray-50 flex items-center gap-3 text-red-600"
          >
            <i className="fa-solid fa-sign-out-alt"></i> Logout
          </button>
        </div>

      </div>
    </div>
  )
}

export default Profile