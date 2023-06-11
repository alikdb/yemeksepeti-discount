import { useEffect, useState } from "react"
import { getFifty } from "~/data"
import classNames from "classnames"
import ItemCard from "~/components/cards/item"
import ReactLoading from 'react-loading';

export default function FiftyDiscounts() {

  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])
  const [items, setItems] = useState([])

  const [selectedCategory, setSelectedCategory] = useState(null)

  const clickCategory = (category) => {
    if (selectedCategory && selectedCategory === category) {
      setSelectedCategory(null)
      return
    }
    setSelectedCategory(category)
  }

  useEffect(() => {
    getFifty().then((response) => {
      const dataItems = response.feed.items[0].items;
      setItems(dataItems);
      const currentCategories = [];
      dataItems.map((item) => {
        currentCategories.push(item.headline);
      })
      setCategories(currentCategories);
      setLoading(false)
    })
  }, [])

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-5 justify-center my-5">

          {loading && <ReactLoading type="spin" color="#fff" height={100} width={100} />}

          {!loading && categories.map((category, index) => (
            <button
              key={index}
              className={classNames("bg-zinc-500 text-sm px-5 py-2 rounded font-light text-white hover:bg-zinc-600", {
                'bg-zinc-600': selectedCategory == category
              })}
              onClick={() => clickCategory(category)}
            >{category}</button>
          ))}
        </div>

        <hr />


        {!loading && items.map((item, index) => {
          if (selectedCategory && selectedCategory != item.headline) {
            return null
          }
          return (
            <div key={index + "a"}>
              <div className="w-full bg-zinc-500 p-5 my-5">{item.headline}</div>
              <div className="grid grid-cols-5 gap-5">
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
