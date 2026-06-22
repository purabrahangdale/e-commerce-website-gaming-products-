import "./Categories.css";

function Categories() {

  const categories = [

    {
      title: "Gaming Mouse",

      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db",

      subtitle:
        "Ultra-fast precision mice built for competitive gaming."
    },

    {
      title: "Mechanical Keyboard",

      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",

      subtitle:
        "Responsive RGB keyboards designed for esports players."
    },

    {
      title: "Gaming Headset",

      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",

      subtitle:
        "Immersive surround sound headsets with crystal-clear audio."
    },

    {
      title: "Gaming Monitor",

      image:
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",

      subtitle:
        "High refresh rate displays for ultra-smooth gameplay."
    }

  ];

  return (

    <section className="categories">

      <h1>
        Explore Gaming Categories
      </h1>

      <p className="categories-text">

        Premium gaming accessories
        for professional gamers
        and high-performance setups.

      </p>

      <div className="categories-container">

        {
          categories.map((item, index) => (

            <div
              className="category-card"
              key={index}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="category-content">

                <h2>
                  {item.title}
                </h2>

                <p>
                  {item.subtitle}
                </p>

                <button>
                  View Products
                </button>

              </div>

            </div>

          ))
        }

      </div>

    </section>
  );
}

export default Categories;