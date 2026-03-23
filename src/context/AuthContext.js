import { createContext, useState, useEffect } from "react"
import { auth, db } from "../firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth"
import { doc, setDoc, getDoc } from "firebase/firestore"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)
  const [loading, setLoading] = useState(true)

  // --------------------
  // SIGNUP
  // --------------------
  const signup = async (userData) => {
    const { name, email, password, phone, state, deliveryLocation, landmark, country } = userData
  
    // 1️⃣ Create user in Firebase Auth
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const uid = res.user.uid
  
    // 2️⃣ Create user document in Firestore
    await setDoc(doc(db, "users", uid), {
      name,
      email,
      phone,
      state,
      deliveryLocation,
      landmark: landmark || "",
      country,
      role: "user",
      createdAt: new Date()
    })
  
    // ✅ Return the actual user
    return res.user
  }

  // --------------------
  // LOGIN
  // --------------------
  const login = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password)
    const uid = res.user.uid
    const docRef = doc(db, "users", uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      setRole(docSnap.data().role)
    } else {
      // auto-create user document if missing
      await setDoc(docRef, {
        email: res.user.email,
        role: "user",
        createdAt: new Date()
      })
      setRole("user")
    }

    setUser(res.user)
    return res.user
  }

  // --------------------
  // LOGOUT
  // --------------------
  const logout = async () => {
    await signOut(auth)
    setUser(null)
    setRole(null)
  }

  // --------------------
  // TRACK USER (onAuthStateChanged)
  // --------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const fetchUser = async () => {
        if (currentUser) {
          const docRef = doc(db, "users", currentUser.uid)
          const docSnap = await getDoc(docRef)

          if (docSnap.exists()) {
            setRole(docSnap.data().role)
          } else {
            // auto-create user document if missing
            await setDoc(docRef, {
              email: currentUser.email,
              role: "user",
              createdAt: new Date()
            })
            setRole("user")
          }
        } else {
          setRole(null)
        }

        setUser(currentUser)
        setLoading(false)
      }
      fetchUser()
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        signup,
        login,
        logout,
        loading
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  )
}