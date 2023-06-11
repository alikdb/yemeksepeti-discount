
import _getDiscount from "./getDiscount"
import _getFifty from "./getFifty"
import _getNavItems from "./getNavItems"

const getDiscount = async () => {

  const data = await _getDiscount();
  return data;

}
const getFifty = async () => {
  const data = await _getFifty();
  return data;
}
const getNavItems = _getNavItems;
export {
  getDiscount,
  getFifty,
  getNavItems
}
