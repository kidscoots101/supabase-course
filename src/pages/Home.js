import supabase from "../config/supabaseclient";
import React, { useEffect, useState } from "react";
import "./Home.css";
// components
import ItemCard from "../component/ItemCard";

export default function Home() {
  const [fetchError, setFetchError] = useState(null);
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase.from("items").select();
      if (error) {
        setFetchError("Could not fetch items");
        console.log(error);
        setItems(null);
      }
      if (data) {
        setItems(data);
        setFetchError(null);
      }
    };
    fetchItems();
  }, []);
  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      {items && (
        <div className="items">
          {/* Maps through item */}
          <div className="items-grid">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
