import { Outlet } from "react-router-dom"
import Header from "../Header"

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Page
