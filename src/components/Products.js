// Products page to display all available products that users can purchase.

// Importing necessary modules.
import React, { useState } from "react";
import { Card, Button, Dropdown } from "react-bootstrap";

// Array of products.
const productsData = [
  {
    id: 1,
    title: "HP 15s Intel Celeron",
    description: `HP 15s Intel Celeron N4500 4GB DDR4 256GB SSD 15.6-Inch HD Laptop is a reliable
      computing solution designed for everyday tasks. With its Intel Celeron N4500 processor,
      this laptop delivers efficient performance, enabling smooth multitasking and
      responsiveness for everyday computing needs.`,
    price: 6999,
    image: require("./images/hp-15s-intel.png"),
    colors: ["Silver", "Black", "Dark Blue"],
  },
  {
    id: 2,
    title: `Dell Inspiron 3520`,
    description: `Dell inspiron 3520 12th gen intel core i7-1255u 16gb 2666mhz ddr4 512
    ssd m.2 intel uhd graphics anti-glare led 15.6-inch laptop a powerhouse laptop
    designed to elevate your computing experience. Featuring a 12th gen intel core i7-1255u
    processor with up to 4.70 ghz turbo boost, 10 cores and 12 threads, this laptop offers
    unparalleled performance for demanding tasks.`,
    price: 16499,
    image: require("./images/dell.png"),
    colors: ["Black", "Blue", "Silver"],
  },
  {
    id: 3,
    title: "HP Zbook firefly 16",
    description: `HP ZBook Firefly 16 G1016" WUXGA Bent Touchscreen, anti-glare UWVA, 250 nits
    for 5MP+IR camera (1920 x 1200)Intel Core i7-1355U Processor (12M Cache, up to 5.0 GHz)16GB
    DDR5-4800 (2x8GB) - 2 SLOT / MAX 64GB1TB PCIe Gen4x4 NVMe TLCNo Optical DriveNVIDIA RTX A500
    (4GB GDDR6 dedicated)Windows 11 Pro.`,
    price: 44990,
    image: require("./images/hp-zbook.png"),
    colors: ["Black", "Red", "Blue"],
  },
  {
    id: 4,
    title: "MSI Modern 15 H Laptop",
    description: `Experience unparalleled performance and sleek design with the MSI Modern 15 H
    Laptop, engineered for professionals and creatives who demand the best. Powered by the latest
    13th Gen Intel Core i9-13900H processor and Intel Iris Xe Graphics, this laptop ensures smooth
    visuals and responsive performance for all your tasks.`,
    price: 19999,
    image: require("./images/msi-modern.png"),
    colors: ["Black", "Silver"],
  },
  {
    id: 5,
    title: `RCT 14" FHD IPS Display Laptop`,
    description: `Say hello to the RCT 14" FHD I3-1005G 4GB RAM 128GB SSD Win 10 Home Laptop with
    USB-C Dock, your new trusty sidekick in the digital world! Powered by an Intel Core i3-1005G1
    processor, this laptop is ready to tackle your daily tasks with ease and a touch of flair.
    Designed for life on the go, this laptop is lightweight and compact.`,
    price: 5499,
    image: require("./images/rct.png"),
    colors: ["Silver", "Grey", "Black"],
  },
  {
    id: 6,
    title: `Apple 2020 MacBook Air`,
    description: `Apple’s thinnest and lightest notebook gets supercharged with the Apple M1 chip.
    Tackle your projects with the blazing-fast 8-core CPU.`,
    price: 14999,
    image: require("./images/macbook-air.png"),
    colors: ["Space Grey", "Silver"],
  },
  {
    id: 7,
    title: `Acer Predator PHN16-71-51J4`,
    description: `Acer Predator PHN16-71-51J4 Intel Core i5 13500HX 16GB RAM 1TB SSD SlimBezel NVIDIA
    GeForce RTX 4060 Windows 11 Home 16-Inch Laptop is engineered for gamers who demand the best, featuring
    16GB of RAM for seamless multitasking and a 1TB SSD for lightning-fast load times and ample storage space.`,
    price: 27500,
    image: require("./images/acer-predator.png"),
    colors: ["Black", "Silver", "Grey"],
  },
  {
    id: 8,
    title: `ACEMAGIC Newest 15.6" Laptop`,
    description: `The notebook computers is practical and light, suitable for business people and students to carry
    around, and can work and study on the spot. he laptop has a built-in camera, which can start online meetings or online
    learning, bringing you unlimited convenience whether you are in the classroom or in the office.`,
    price: 8999,
    image: require("./images/acemagic.png"),
    colors: ["Silver", "Grey", "Black"],
  },
  {
    id: 9,
    title: `Acer A315-510P-337G`,
    description: `Acer Aspire 3 Intel, featuring the i5 1235U processor, 8GB of RAM and 512GB of storage, represents
    a new benchmark for yet high-performing laptops. This model delivers an impressive combination of speed, reliability
    and versatility, enhancing your computing endeavours across various tasks and applications.`,
    price: 7776,
    image: require("./images/acer.png"),
    colors: ["Silver", "Black"],
  },
  {
    id: 10,
    title: `ASUS TUF Gaming A15`,
    description: `ASUS TUF Gaming A15 FA506NF AMD Ryzen™ 5 7535HS 8GB 512GB SSD WIN 11 Home is a powerful gaming laptop`,
    price: 12899,
    image: require("./images/asus.png"),
    colors: ["Black", "Dark Blue", "Grey"],
  },
];

// Products component displaying product cards.
export default function Products({ handleBuy }) {
  //   State to manage products and selected colours.
  const [products, setProducts] = useState(productsData);

  //   Handle colour selection.
  const handleColorSelect = (productId, color) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, selectedColor: color } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="products-container">
      <div className="row">
        {/* Render product cards */}
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="card-price">R{product.price}</Card.Text>
                <div className="card-footer">
                  {/* Dropdown button for colour selection */}
                  <Dropdown onSelect={(e) => handleColorSelect(product.id, e)}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {product.selectedColor
                        ? product.selectedColor
                        : "Choose Colour"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {product.colors.map((color) => (
                        <Dropdown.Item key={color} eventKey={color}>
                          {color}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* Buy Button */}
                  <Button
                    variant="primary"
                    className="mt-2"
                    onClick={() => handleBuy(product)}>
                    Buy
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
