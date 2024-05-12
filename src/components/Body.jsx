import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Card from './Card';

export default function Body() {
  
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  const loadItems = async () => {
    try {
      const response = await fetch("http://localhost:8000/items");
      const data = await response.json();
      setItems(data);
  
    } catch (error) {
      console.error("Error loading food items:", error);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  // Function to filter items by category and search query
  const filterItems = (category) => {
    return items.filter(item => item.category === category && item.name.toLowerCase().includes(search.toLowerCase()));
  };

  // Get unique categories from items
  const uniqueCategories = Array.from(new Set(items.map(item => item.category)));

  return (
    <div>
      <div className="container container1 pt-5">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-2">
            <Sidebar />
          </div>
          <div className="col-lg-9 row flex">
            <div className="flex">
              <div className="container mt-3">
                {/* Bootstrap is mobile-first */}
                {uniqueCategories.length !== 0 ? uniqueCategories.map((category) => {
                  const categoryItems = filterItems(category);
                  if (categoryItems.length === 0) return null; // Skip rendering if no items in the category
                  return (
                    <div key={category}>
                      <div className="fs-3 m-3 text-black">{category}</div>
                      <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 255),rgb(0, 0, 0))" }} />
                      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {categoryItems.map((filteredItem) => (
                          <div key={filteredItem.id} className="col">
                            {console.log(filteredItem.url)}
                            <Card
                              name={filteredItem.name}
                              description={filteredItem.description}
                              category={filteredItem.category}
                              price={filteredItem.price}
                              ImgSrc={filteredItem.img}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }) : <div>No Such Data</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
