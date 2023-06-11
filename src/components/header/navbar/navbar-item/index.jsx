import { Link, useLocation } from "react-router-dom"
import PropTypes from "prop-types"
import classNames from "classnames";
const NavbarItem = ({ item }) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <Link to={item.path} className={
      classNames("px-5 rounded py-1.5 text-zinc-300 hover:text-zinc-400 transition-colors", {
        "bg-zinc-600": path === item.path
      })
    }>{item.title}</Link>
  )
}
export default NavbarItem


NavbarItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string

  })
}
