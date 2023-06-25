import PropTypes from "prop-types";
import L from "react-lazy-load";
export default function ItemCard({ item }) {
  const percent = Math.round(
    ((item.original_price - item.price) / item.original_price) * 100
  );

  return (
    <div>
      <div className=" h-22">
        <L height={200}>
          <img src={item.image_url} />
        </L>
      </div>
      <div className="w-full">
        <span className="text-sm text-gray-300 font-medium">
          {" "}
          {item.price} TL{" "}
        </span>
        {item.price != item.original_price ? (
          <span className="text-sm text-gray-500 line-through font-light">
            {" "}
            {item.original_price} TL{" "}
          </span>
        ) : null}
      </div>
      {item.price != item.original_price ? (
        <div className="w-full">
          <span className="bg-red-700 text-xs py-1 px-2 rounded-full font-bold">
            {" "}
            %{percent} İndirim{" "}
          </span>
        </div>
      ) : null}

      <div className="w-full">
        <span className="text-sm text-gray-500 font-light"> {item.name} </span>
      </div>
      <div className="w-full">
        <a
          href={`https://www.akakce.com/arama/?q=${item.name}`}
          target="_blank"
          rel="noreferrer"
          className={
            "w-full block text-center mt-2 bg-zinc-500 text-sm px-5 py-2 rounded font-light text-white hover:bg-zinc-600"
          }
        >
          Akakçe
        </a>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    image_url: PropTypes.string,
    price: PropTypes.number,
    original_price: PropTypes.number,
    name: PropTypes.string,
  }),
};
