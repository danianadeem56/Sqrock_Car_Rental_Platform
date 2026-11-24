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
const form = document.getElementById("bookingForm");
const today = new Date().toISOString().split("T")[0];
document.getElementById("pickup").min = today;
document.getElementById("return").min = today;
if (!car) {
  document.getElementById("selectedCar").textContent =
    "Please select a car from the Cars page.";
  form.querySelector("button").disabled = true;
} else {
  document.getElementById("selectedCar").textContent =
    `${car.name} — Rs. ${car.price.toLocaleString()} per day`;
}
function estimate() {
  if (!car) return;
  const a = document.getElementById("pickup").value,
    b = document.getElementById("return").value;
  if (!a || !b) return;
  const days = Math.ceil((new Date(b) - new Date(a)) / 86400000);
  document.getElementById("estimate").textContent =
    days > 0
      ? `Estimated total: ${days} day(s) × Rs. ${car.price.toLocaleString()} = Rs. ${(days * car.price).toLocaleString()}`
      : "Return date must be after pickup date.";
}
document.getElementById("pickup").addEventListener("change", () => {
  document.getElementById("return").min =
    document.getElementById("pickup").value;
  estimate();
});
document.getElementById("return").addEventListener("change", estimate);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const pickup = document.getElementById("pickup").value,
    ret = document.getElementById("return").value;
  if (!car || new Date(ret) <= new Date(pickup)) {
    document.getElementById("status").textContent =
      "Please select a valid return date after pickup.";
    return;
  }
  const data = {
    car: car.name,
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    pickup,
    return: ret,
    location: document.getElementById("location").value,
  };
  const all = JSON.parse(localStorage.getItem("driveEaseBookings") || "[]");
  all.push(data);
  localStorage.setItem("driveEaseBookings", JSON.stringify(all));
  document.getElementById("status").textContent =
    "Booking request saved in this browser demo. Thank you!";
  form.reset();
});
document.getElementById("menuBtn").onclick = () =>
  document.getElementById("navLinks").classList.toggle("show");
