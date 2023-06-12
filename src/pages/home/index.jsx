import { useState, useEffect } from "react"
import { getDiscount } from "~/data"
import classNames from "classnames"
import ItemCard from "~/components/cards/item"
import ReactLoading from 'react-loading';
const Home = () => {

  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])
  const [filtredItems, setFiltredItems] = useState([])
  const [items, setItems] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null)

  const clickCategory = (category) => {
    if (selectedCategory && selectedCategory === category) {
      setSelectedCategory(null)
      return
    }
    setSelectedCategory(category)
  }
  const filterItems = (e) => {
    const value = e.target.value;
    if (value.length < 3) {
      setFiltredItems(items)
      return
    }
    const copiedItems = items.map((item) => ({ ...item, items: [...item.items] })); // items dizisini kopyalama
    const filtered = copiedItems.filter((item) => {
      item.items = item.items.filter((subItem) => {
        return subItem.name.toLowerCase().includes(value.toLowerCase())
      })
      return item.items.length > 0
    })
    setFiltredItems(filtered)
  }

  useEffect(() => {
    getDiscount().then((response) => {

      if (response.feed.items.length > 0) {
        const dataItems = response.feed.items[0].items;
        setItems(dataItems);
        setFiltredItems(dataItems)
        const currentCategories = [];
        dataItems.map((item) => {
          currentCategories.push(item.headline);
        })
        setCategories(currentCategories);
      }
      setLoading(false)
    })
  }, [])

  return (
    <>

      <div className="container mx-auto px-5">
        <div className="flex flex-wrap gap-5 justify-center my-5">

          {loading && <ReactLoading type="spin" color="#fff" height={100} width={100} />}

          {!loading && (
            <div className="w-full flex justify-center">
              <input
                type="text"
                className="h-10  bg-zinc-600 text-white border border-zinc-400 outline-none px-5 max-w-10"
                onChange={(e) => filterItems(e)}
                placeholder="Ürün ara.."
              />
            </div>
          )}
          {!loading && categories.map((category, index) => (
            <button
              key={index}
              className={classNames("bg-zinc-500 text-sm px-5 py-2 rounded font-light text-white hover:bg-zinc-600", {
                'bg-red-600': selectedCategory == category
              })}
              onClick={() => clickCategory(category)}
            >{category}</button>
          ))}
        </div>
        {!loading && <hr />}

        {!loading && filtredItems.length == 0 && (
          <div className="w-full flex items-center rounded justify-center my-5 bg-red-500 h-12">
            Bu katagoride ürün bulunamadı.
          </div>
        )}
        {!loading && filtredItems.map((item, index) => {
          if (selectedCategory && selectedCategory != item.headline) {
            return null
          }
          return (
            <div key={index + "a"}>
              <div className="w-full bg-zinc-500 p-5 my-5">{item.headline}</div>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-5">
                {item.items.map((item, index) => (
                  <ItemCard key={index} item={item} />
                ))}
              </div>



            </div>
          )
        })}


      </div>

    </>
  )
}

export default Home
