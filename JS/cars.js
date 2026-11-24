// const cars = [
//   {
//     id: 1,
//     name: "Toyota Corolla",
//     brand: "Toyota",
//     price: 8500,
//     fuel: "Petrol",
//     seats: 5,
//     transmission: "Automatic",
//     status: "Available",
//     year: 2023,
//     image:
//       "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=900&q=80",
//     features: [
//       "Air Conditioning",
//       "Bluetooth",
//       "Backup Camera",
//       "Cruise Control",
//     ],
//     description:
//       "A comfortable and reliable sedan for city drives and longer journeys.",
//   },
//   {
//     id: 2,
//     name: "Honda Civic",
//     brand: "Honda",
//     price: 11000,
//     fuel: "Petrol",
//     seats: 5,
//     transmission: "Automatic",
//     status: "Available",
//     year: 2024,
//     image:
//       "https://images.unsplash.com/photo-1594070319944-7c0cbebb6f58?auto=format&fit=crop&w=900&q=80",
//     features: ["Touchscreen", "Sunroof", "Parking Sensors", "Bluetooth"],
//     description:
//       "A stylish sedan offering a smooth drive and a comfortable cabin.",
//   },
//   {
//     id: 3,
//     name: "Kia Sportage",
//     brand: "Kia",
//     price: 14000,
//     fuel: "Petrol",
//     seats: 5,
//     transmission: "Automatic",
//     status: "Available",
//     year: 2023,
//     image:
//       "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80",
//     features: ["Panoramic Roof", "Rear Camera", "Climate Control", "Smart Key"],
//     description:
//       "A spacious SUV designed for family trips and comfortable travel.",
//   },
//   {
//     id: 4,
//     name: "Suzuki Swift",
//     brand: "Suzuki",
//     price: 5500,
//     fuel: "Petrol",
//     seats: 5,
//     transmission: "Manual",
//     status: "Available",
//     year: 2022,
//     image:
//       "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
//     features: ["Air Conditioning", "Power Windows", "USB Audio", "ABS"],
//     description:
//       "A compact and economical hatchback, ideal for busy city streets.",
//   },
//   {
//     id: 5,
//     name: "Toyota Fortuner",
//     brand: "Toyota",
//     price: 20000,
//     fuel: "Diesel",
//     seats: 7,
//     transmission: "Automatic",
//     status: "Available",
//     year: 2024,
//     image:
//       "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80",
//     features: ["7 Seats", "4x4 Drive", "Leather Seats", "Rear AC"],
//     description:
//       "A powerful and roomy SUV with extra seating for group travel.",
//   },
//   {
//     id: 6,
//     name: "Hyundai Tucson",
//     brand: "Hyundai",
//     price: 15000,
//     fuel: "Hybrid",
//     seats: 5,
//     transmission: "Automatic",
//     status: "Booked",
//     year: 2023,
//     image:
//       "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80",
//     features: [
//       "Hybrid Efficiency",
//       "Smart Cruise",
//       "Wireless Charging",
//       "Lane Assist",
//     ],
//     description:
//       "A modern SUV combining efficient performance and smart features.",
//   },
//   {
//     id: 7,
//     name: "Honda City",
//     brand: "Honda",
//     price: 7500,
//     fuel: "Petrol",
//     seats: 5,
//     transmission: "Manual",
//     status: "Available",
//     year: 2022,
//     image:
//       "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?auto=format&fit=crop&w=900&q=80",
//     features: ["Power Steering", "Air Conditioning", "Bluetooth", "ABS"],
//     description: "A practical and fuel-efficient sedan for everyday travel.",
//   },
//   {
//     id: 8,
//     name: "Tesla Model 3",
//     brand: "Tesla",
//     price: 18000,
//     fuel: "Electric",
//     seats: 5,
//     transmission: "Automatic",
//     status: "Available",
//     year: 2024,
//     image:
//       "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=900&q=80",
//     features: ["Electric Range", "Driver Assist", "Glass Roof", "Touchscreen"],
//     description:
//       "Enjoy a quiet electric driving experience with advanced technology.",
//   },
//   {
//     id: 9,
//     name: "Suzuki Alto",
//     brand: "Suzuki",
//     price: 4000,
//     fuel: "Petrol",
//     seats: 4,
//     transmission: "Manual",
//     status: "Available",
//     year: 2023,
//     image:
//       "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
//     features: [
//       "Fuel Efficient",
//       "Compact Size",
//       "Air Conditioning",
//       "Power Steering",
//     ],
//     description:
//       "A budget-friendly compact car that is easy to park and economical.",
//   },
// ];

// const grid = document.getElementById("carGrid");
// const search = document.getElementById("search");
// const brand = document.getElementById("brand");
// const fuel = document.getElementById("fuel");
// const trans = document.getElementById("transmission");
// const price = document.getElementById("price");

// // Fill these options once so they remain available with every filter combination.
// [...new Set(cars.map((car) => car.brand))].sort().forEach((value) => {
//   brand.add(new Option(value, value));
// });
// // Fuel options with the matching car names are listed in cars.html.

// function getMatchingCars() {
//   const query = search.value.trim().toLowerCase();

//   return cars.filter((car) => {
//     const matchesSearch = car.name.toLowerCase().includes(query);
//     const matchesBrand = !brand.value || car.brand === brand.value;
//     const matchesFuel = !fuel.value || car.fuel === fuel.value;
//     const matchesTransmission =
//       !trans.value || car.transmission === trans.value;

//     let matchesPrice = true;
//     if (price.value === "budget") matchesPrice = car.price <= 7000;
//     if (price.value === "mid")
//       matchesPrice = car.price > 7000 && car.price <= 12000;
//     if (price.value === "premium") matchesPrice = car.price > 12000;

//     return (
//       matchesSearch &&
//       matchesBrand &&
//       matchesFuel &&
//       matchesTransmission &&
//       matchesPrice
//     );
//   });
// }

// function render() {
//   const result = getMatchingCars();

//   grid.innerHTML = result
//     .map(
//       (car) => `
//     <article class="car-card">
//       <img src="${car.image}" alt="${car.name}">
//       <div class="car-info">
//         <h3>${car.name}</h3>
//         <p>${car.year} · ${car.fuel} · ${car.seats} seats · ${car.transmission} · ${car.status}</p>
//         <div class="card-actions">
//           <span class="price">Rs. ${car.price.toLocaleString()} / day</span>
//           <a href="details.html?id=${car.id}">View Details ↗</a>
//         </div>
//       </div>
//     </article>
//   `,
//     )
//     .join("");

//   document.getElementById("count").textContent =
//     `Showing ${result.length} of ${cars.length} cars`;
//   document.getElementById("empty").hidden = result.length !== 0;
// }

// [search, brand, fuel, trans, price].forEach((element) => {
//   element.addEventListener("input", render);
//   element.addEventListener("change", render);
// });

// document.getElementById("reset").addEventListener("click", () => {
//   search.value = "";
//   brand.value = "";
//   fuel.value = "";
//   trans.value = "";
//   price.value = "";
//   render();
// });

// document.getElementById("menuBtn").onclick = () =>
//   document.getElementById("navLinks").classList.toggle("show");

// render();


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

const grid = document.getElementById("carGrid");
const search = document.getElementById("search");
const brand = document.getElementById("brand");
const fuel = document.getElementById("fuel");
const trans = document.getElementById("transmission");
const price = document.getElementById("price");

// Fill these options once so they remain available with every filter combination.
[...new Set(cars.map((car) => car.brand))].sort().forEach((value) => {
  brand.add(new Option(value, value));
});
// Fuel options with the matching car names are listed in cars.html.

function getMatchingCars() {
  const query = search.value.trim().toLowerCase();

  return cars.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(query);
    const matchesBrand = !brand.value || car.brand === brand.value;
    const matchesFuel = !fuel.value || car.fuel === fuel.value;
    const matchesTransmission =
      !trans.value || car.transmission === trans.value;

    let matchesPrice = true;
    if (price.value === "budget") matchesPrice = car.price <= 7000;
    if (price.value === "mid")
      matchesPrice = car.price > 7000 && car.price <= 12000;
    if (price.value === "premium") matchesPrice = car.price > 12000;

    return (
      matchesSearch &&
      matchesBrand &&
      matchesFuel &&
      matchesTransmission &&
      matchesPrice
    );
  });
}

function render() {
  const result = getMatchingCars();

  grid.innerHTML = result
    .map(
      (car) => `
    <article class="car-card">
      <img src="${car.image}" alt="${car.name}">
      <div class="car-info">
        <h3>${car.name}</h3>
        <p>${car.year} · ${car.fuel} · ${car.seats} seats · ${car.transmission} · ${car.status}</p>
        <div class="card-actions">
          <span class="price">Rs. ${car.price.toLocaleString()} / day</span>
          <a href="details.html?id=${car.id}">View Details ↗</a>
        </div>
      </div>
    </article>
  `,
    )
    .join("");

  document.getElementById("count").textContent =
    `Showing ${result.length} of ${cars.length} cars`;
  document.getElementById("empty").hidden = result.length !== 0;
}

// Sirf wohi filter kaam kare jo abhi chuna gaya hai.
// Jab koi filter chuna jaye to baaki sab filters khali (reset) ho jate hain.
const allFilters = [search, brand, fuel, trans, price];

function onFilterChange(changed) {
  allFilters.forEach((el) => {
    if (el !== changed) el.value = "";
  });
  render();
}

allFilters.forEach((element) => {
  element.addEventListener("input", () => onFilterChange(element));
  element.addEventListener("change", () => onFilterChange(element));
});

document.getElementById("reset").addEventListener("click", () => {
  search.value = "";
  brand.value = "";
  fuel.value = "";
  trans.value = "";
  price.value = "";
  // Browsers can restore old/autofilled form values AFTER this script runs,
// so the list and the dropdowns go out of sync. Turn that off and
// re-render whenever the page is shown so the list always matches the filters.
[search, brand, fuel, trans, price].forEach((el) => {
  el.setAttribute("autocomplete", "off");
});

render();
window.addEventListener("load", render);
window.addEventListener("pageshow", render);
});

document.getElementById("menuBtn").onclick = () =>
  document.getElementById("navLinks").classList.toggle("show");

// Browsers can restore old/autofilled form values AFTER this script runs,
// so the list and the dropdowns go out of sync. Turn that off and
// re-render whenever the page is shown so the list always matches the filters.
[search, brand, fuel, trans, price].forEach((el) => {
  el.setAttribute("autocomplete", "off");
});

render();
window.addEventListener("load", render);
window.addEventListener("pageshow", render);