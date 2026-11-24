const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    brand: "Toyota",
    price: 8500,
    fuel: "Petrol",
    seats: 5,
    transmission: "Automatic",
    status: "Available",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=900&q=80",
    features: [
      "Air Conditioning",
      "Bluetooth",
      "Backup Camera",
      "Cruise Control",
    ],
    description:
      "A comfortable and reliable sedan for city drives and longer journeys.",
  },
  {
    id: 2,
    name: "Honda Civic",
    brand: "Honda",
    price: 11000,
    fuel: "Petrol",
    seats: 5,
    transmission: "Automatic",
    status: "Available",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1594070319944-7c0cbebb6f58?auto=format&fit=crop&w=900&q=80",
    features: ["Touchscreen", "Sunroof", "Parking Sensors", "Bluetooth"],
    description:
      "A stylish sedan offering a smooth drive and a comfortable cabin.",
  },
  {
    id: 3,
    name: "Kia Sportage",
    brand: "Kia",
    price: 14000,
    fuel: "Petrol",
    seats: 5,
    transmission: "Automatic",
    status: "Available",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80",
    features: ["Panoramic Roof", "Rear Camera", "Climate Control", "Smart Key"],
    description:
      "A spacious SUV designed for family trips and comfortable travel.",
  },
  {
    id: 4,
    name: "Suzuki Swift",
    brand: "Suzuki",
    price: 5500,
    fuel: "Petrol",
    seats: 5,
    transmission: "Manual",
    status: "Available",
    year: 2022,
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
    features: ["Air Conditioning", "Power Windows", "USB Audio", "ABS"],
    description:
      "A compact and economical hatchback, ideal for busy city streets.",
  },
  {
    id: 5,
    name: "Toyota Fortuner",
    brand: "Toyota",
    price: 20000,
    fuel: "Diesel",
    seats: 7,
    transmission: "Automatic",
    status: "Available",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80",
    features: ["7 Seats", "4x4 Drive", "Leather Seats", "Rear AC"],
    description:
      "A powerful and roomy SUV with extra seating for group travel.",
  },
  {
    id: 6,
    name: "Hyundai Tucson",
    brand: "Hyundai",
    price: 15000,
    fuel: "Hybrid",
    seats: 5,
    transmission: "Automatic",
    status: "Booked",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80",
    features: [
      "Hybrid Efficiency",
      "Smart Cruise",
      "Wireless Charging",
      "Lane Assist",
    ],
    description:
      "A modern SUV combining efficient performance and smart features.",
  },
  {
    id: 7,
    name: "Honda City",
    brand: "Honda",
    price: 7500,
    fuel: "Petrol",
    seats: 5,
    transmission: "Manual",
    status: "Available",
    year: 2022,
    image:
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=900&q=80",
    features: ["Power Steering", "Air Conditioning", "Bluetooth", "ABS"],
    description: "A practical and fuel-efficient sedan for everyday travel.",
  },
  {
    id: 8,
    name: "Tesla Model 3",
    brand: "Tesla",
    price: 18000,
    fuel: "Electric",
    seats: 5,
    transmission: "Automatic",
    status: "Available",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=900&q=80",
    features: ["Electric Range", "Driver Assist", "Glass Roof", "Touchscreen"],
    description:
      "Enjoy a quiet electric driving experience with advanced technology.",
  },
  {
    id: 9,
    name: "Suzuki Alto",
    brand: "Suzuki",
    price: 4000,
    fuel: "Petrol",
    seats: 4,
    transmission: "Manual",
    status: "Available",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
    features: [
      "Fuel Efficient",
      "Compact Size",
      "Air Conditioning",
      "Power Steering",
    ],
    description:
      "A budget-friendly compact car that is easy to park and economical.",
  },
];
const id = Number(new URLSearchParams(location.search).get("id"));
const car = cars.find((c) => c.id === id);
const root = document.getElementById("details");
if (!car) {
  root.innerHTML = '<h2>Car not found</h2><a href="cars.html">Browse cars</a>';
} else {
  root.innerHTML = `<div class="two-col"><img src="${car.image}" alt="${car.name}" style="width:100%;height:360px;object-fit:cover;border-radius:12px"><div><p class="eyebrow">${car.brand} · ${car.year}</p><h1 class="page-title">${car.name}</h1><p class="price" style="font-size:22px;margin:12px 0">Rs. ${car.price.toLocaleString()} <small style="font-size:11px;color:#718078">/ day</small></p><p class="muted">${car.description}</p><div class="feature-list"><span>Fuel: ${car.fuel}</span><span>Seats: ${car.seats}</span><span>Transmission: ${car.transmission}</span><span>Status: ${car.status}</span></div><h3 style="margin:22px 0 10px">Features</h3><div class="feature-list">${car.features.map((f) => `<span>✓ ${f}</span>`).join("")}</div><a class="btn" style="margin-top:25px;${car.status !== "Available" ? "pointer-events:none;opacity:.5" : ""}" href="booking.html?id=${car.id}">Book This Car →</a></div></div>`;
}
document.getElementById("menuBtn").onclick = () =>
  document.getElementById("navLinks").classList.toggle("show");
