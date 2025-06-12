import {
  FaPizzaSlice,
  FaBirthdayCake,
  FaCocktail,
  FaLeaf,
  FaDrumstickBite,
  FaUtensilSpoon,
  FaFish,
  FaMugHot,
  FaSeedling,
} from "react-icons/fa";
import Card from "@/components/Card";

const categories = [
  { title: "Appetizers", icon: <FaPizzaSlice />, count: 2 },
  { title: "Desserts", icon: <FaBirthdayCake />, count: 4, selected: true },
  { title: "Drinks", icon: <FaCocktail />, count: 3 },
  { title: "Healthy", icon: <FaLeaf />, count: 3 },
  { title: "Meat", icon: <FaDrumstickBite />, count: 5 },
  { title: "Salads", icon: <FaUtensilSpoon />, count: 3 },
  { title: "Seafood", icon: <FaFish />, count: 4 },
  { title: "Soups", icon: <FaMugHot />, count: 4 },
  { title: "Vegan", icon: <FaSeedling />, count: 4 },
];


export default function DisplayCard() {
  return (
      <div className="w-10/12 mx-auto flex gap-5 flex-wrap justify-center">
        {categories.map((cat) => (
          <Card key={cat.title} {...cat} />
        ))}
      </div>
  );
}
