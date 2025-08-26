// src/data/data.ts
import { StaticImageData } from "next/image";

// 👉 Food Images
import img1 from "../../assets/food/Chilli Chicken Dry.webp";
import img2 from "../../assets/food/Chilli Fish.webp";
import img3 from "../../assets/food/Crispy Babycorn.webp";
import img4 from "../../assets/food/Crispy Corns.webp";
import img5 from "../../assets/food/Hara Bhara Kebab  - Copy.webp";
import img6 from "../../assets/food/Makhmali seekh kebab.webp";
import img7 from "../../assets/food/Murg Banno Kebab.webp";
import img8 from "../../assets/food/Murgh Malai Kebab.webp";
import img9 from "../../assets/food/Mutton Galouti.webp";
import img10 from "../../assets/food/Non-Veg Kebab Paltter.webp";
import img11 from "../../assets/food/Tandoori Chicken.webp";
import img12 from "../../assets/food/Veg Manchurian Dry.webp";
import img13 from "../../assets/food/Fish Curry.webp";
import img14 from "../../assets/food/Mutton Roganjosh.webp";
import img15 from "../../assets/food/Diwani Handi.webp";
import img16 from "../../assets/food/Shahi Paneer.webp";
import img17 from "../../assets/food/Paneer Lababdar.webp";
import img18 from "../../assets/food/Dal Stellar.webp";
import img19 from "../../assets/food/Kshmiri Fish Tikka.webp";

// 👉 Restaurant Images
import rest1 from "../../assets/interior/Int1 (1).webp";
import rest2 from "../../assets/interior/Int1 (2).webp";
import rest3 from "../../assets/interior/Int1 (3).webp";
import rest4 from "../../assets/interior/Int1 (4).webp";
import rest5 from "../../assets/interior/Int1 (5).webp";
import rest6 from "../../assets/interior/Int1 (6).webp";
import rest7 from "../../assets/interior/Int1 (7).webp";
import rest8 from "../../assets/interior/Int1 (8).webp";
import rest9 from "../../assets/interior/Int1 (9).webp";
import rest10 from "../../assets/interior/Int1 (10).webp";
import rest11 from "../../assets/interior/Int1 (11).webp";
import rest12 from "../../assets/interior/Int1 (12).webp";
import rest13 from "../../assets/interior/Int1 (13).webp";
import rest14 from "../../assets/interior/Int1 (14).webp";
import rest15 from "../../assets/interior/Int1 (15).webp";
import rest16 from "../../assets/interior/Int1 (16).webp";
import rest17 from "../../assets/interior/Int1 (17).webp";
import rest18 from "../../assets/interior/Int1 (18).webp";
import rest19 from "../../assets/interior/Int1 (19).webp";
import rest20 from "../../assets/interior/Int1 (20).webp";
import rest21 from "../../assets/interior/Int1 (21).webp";
import rest22 from "../../assets/interior/Int1 (22).webp";
import rest23 from "../../assets/interior/Int1 (23).webp";
import rest24 from "../../assets/interior/Int1 (24).webp";
import rest25 from "../../assets/interior/Int1 (25).webp";
import rest26 from "../../assets/interior/Int1 (26).webp";
import rest27 from "../../assets/interior/Int1 (27).webp";
import rest28 from "../../assets/interior/Int1 (28).webp";
import rest29 from "../../assets/interior/Int1 (29).webp";
import rest30 from "../../assets/interior/Int1 (30).webp";
import rest31 from "../../assets/interior/Int1 (31).webp";
import rest32 from "../../assets/interior/Int1 (32).webp";
import rest33 from "../../assets/interior/Int1 (33).webp";
import rest34 from "../../assets/interior/Int1 (34).webp";
import rest35 from "../../assets/interior/Int1 (35).webp";
import rest36 from "../../assets/interior/Int1 (36).webp";
import rest37 from "../../assets/interior/Int1 (37).webp";
import rest38 from "../../assets/interior/Int1 (38).webp";
import rest39 from "../../assets/interior/Int1 (39).webp";
import rest40 from "../../assets/interior/Int1 (40).webp";
import rest41 from "../../assets/interior/Int1 (41).webp";
import rest42 from "../../assets/interior/Int1 (42).webp";

// banquate

import banquet1 from "../../assets/banqutes/img1.webp";
import banquet2 from "../../assets/banqutes/img1.webp";
import banquet3 from "../../assets/banqutes/img1.webp";

// ✅ Shared type
export type GalleryItem = {
  name: string;
  img: StaticImageData;
  type?: "veg" | "non-veg"; // only applies to food
};

// ✅ VEG Food Menu Items
export const vegMenuItems: GalleryItem[] = [
  { name: "🍃 Crispy Babycorn", img: img3, type: "veg" },
  { name: "🍃 Crispy Corns", img: img4, type: "veg" },
  { name: "🍃 Hara Bhara Kebab", img: img5, type: "veg" },
  { name: "🍃 Veg Manchurian Dry", img: img12, type: "veg" },
  { name: "🍃 Diwani Handi", img: img15, type: "veg" },
  { name: "🍃 Shahi Paneer", img: img16, type: "veg" },
  { name: "🍃 Paneer Lababdar", img: img17, type: "veg" },
  { name: "🍃 Dal Stellar", img: img18, type: "veg" },
];

// ✅ NON-VEG Food Menu Items
export const nonVegMenuItems: GalleryItem[] = [
  { name: "🍗 Chilli Chicken Dry", img: img1, type: "non-veg" },
  { name: "🍗 Chilli Fish", img: img2, type: "non-veg" },
  { name: "🍗 Makhmali Seekh Kebab", img: img6, type: "non-veg" },
  { name: "🍗 Murg Banno Kebab", img: img7, type: "non-veg" },
  { name: "🍗 Murgh Malai Kebab", img: img8, type: "non-veg" },
  { name: "🍗 Mutton Galouti", img: img9, type: "non-veg" },
  { name: "🍗 Non-Veg Kebab Platter", img: img10, type: "non-veg" },
  { name: "🍗 Tandoori Chicken", img: img11, type: "non-veg" },
  { name: "🍗 Fish Curry", img: img13, type: "non-veg" },
  { name: "🍗 Mutton Roganjosh", img: img14, type: "non-veg" },
  { name: "🍗 Kashmiri Fish Tikka", img: img19, type: "non-veg" },
];

export const menuItems: GalleryItem[] = [...vegMenuItems, ...nonVegMenuItems];

// ✅ Restaurant Images
export const restaurantImages: GalleryItem[] = [
  { name: "Restaurant Interior 1", img: rest1 },
  { name: "Restaurant Interior 2", img: rest2 },
  { name: "Restaurant Interior 3", img: rest3 },
  { name: "Restaurant Interior 3", img: rest3 },
  { name: "Restaurant Interior 3", img: rest4 },
  { name: "Restaurant Interior 3", img: rest5 },
  { name: "Restaurant Interior 3", img: rest6 },
  { name: "Restaurant Interior 3", img: rest7 },
  { name: "Restaurant Interior 3", img: rest8 },
  { name: "Restaurant Interior 3", img: rest9 },
  { name: "Restaurant Interior 3", img: rest10 },
  { name: "Restaurant Interior 3", img: rest11 },
  { name: "Restaurant Interior 3", img: rest12 },
  { name: "Restaurant Interior 3", img: rest13 },
  { name: "Restaurant Interior 3", img: rest14 },
  { name: "Restaurant Interior 3", img: rest15 },
  { name: "Restaurant Interior 3", img: rest16 },
  { name: "Restaurant Interior 3", img: rest17 },
  { name: "Restaurant Interior 3", img: rest18 },
  { name: "Restaurant Interior 3", img: rest19 },
  { name: "Restaurant Interior 3", img: rest20 },
  { name: "Restaurant Interior 3", img: rest21 },
  { name: "Restaurant Interior 3", img: rest22 },
  { name: "Restaurant Interior 3", img: rest23 },
  { name: "Restaurant Interior 3", img: rest24 },
  { name: "Restaurant Interior 3", img: rest25 },
  { name: "Restaurant Interior 3", img: rest26 },
  { name: "Restaurant Interior 3", img: rest27 },
  { name: "Restaurant Interior 3", img: rest28 },
  { name: "Restaurant Interior 3", img: rest29 },
  { name: "Restaurant Interior 3", img: rest30 },
  { name: "Restaurant Interior 3", img: rest31 },
  { name: "Restaurant Interior 3", img: rest32 },
  { name: "Restaurant Interior 3", img: rest33 },
  { name: "Restaurant Interior 3", img: rest34 },
  { name: "Restaurant Interior 3", img: rest35 },
  { name: "Restaurant Interior 3", img: rest36 },
  { name: "Restaurant Interior 3", img: rest37 },
  { name: "Restaurant Interior 3", img: rest38 },
  { name: "Restaurant Interior 3", img: rest39 },
  { name: "Restaurant Interior 3", img: rest40 },
  { name: "Restaurant Interior 3", img: rest41 },
  { name: "Restaurant Interior 3", img: rest42 },
];

export const banquetImages = [
  { src: banquet1, alt: "Banquet Hall 1" },
  { src: banquet2, alt: "Banquet Hall 2" },
  { src: banquet3, alt: "Banquet Hall 3" },
];
