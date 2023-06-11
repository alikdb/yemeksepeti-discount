import { getNavItems } from "~/data"
import NavbarItem from "./navbar-item"
const Navbar = () => {
  return (
    <>
      <div className="navbar">

        <div className="h-14 bg-zinc-800 flex justify-center items-center gap-x-5">


          {getNavItems.map((item, index) => (
            <NavbarItem item={item} key={index} />
          ))}


        </div>

      </div >
    </>
  )
}

export default Navbar
