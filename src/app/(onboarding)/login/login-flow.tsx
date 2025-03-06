 "use client"
import CreateOrganization from "./create-organization-modal"
import SignInForm from "./login-form"
import { useState } from "react"


const LoginFlow = () => {
    const [showCreateOrgModal, setShowCreateOrgModal] = useState<boolean>(false)
  return showCreateOrgModal ? <CreateOrganization/>:<SignInForm isSubmit={setShowCreateOrgModal}  />
}

export default LoginFlow
