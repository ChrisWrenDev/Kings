import { useReducer } from "react";
import Section from "../UI/Section";
import SectionDetails from "../UI/SectionDetails";
import GalleryFilter from "./GalleryFilter";
import GalleryImages from "./GalleryImages";
import galleryImg1 from "../../assets/Gallery-01.jpg";
import galleryImg2 from "../../assets/Gallery-02.jpg";
import galleryImg3 from "../../assets/Gallery-03.jpg";
import galleryImg4 from "../../assets/Gallery-04.jpg";
import galleryImg5 from "../../assets/Gallery-05.jpg";
import galleryImg6 from "../../assets/Gallery-06.jpg";
import galleryImg7 from "../../assets/Gallery-07.jpg";
import galleryImg8 from "../../assets/Gallery-08.jpg";
import galleryImg9 from "../../assets/Gallery-09.jpg";

const galleryDetails = {
  step: 0,
  title: "Our Gallery",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  type: "dark",
};

const galleryImages = [
  { id: "g1", group: "Beards", img: galleryImg1 },
  { id: "g2", group: "Interior", img: galleryImg2 },
  { id: "g3", group: "Beards", img: galleryImg3 },
  { id: "g4", group: "Beards", img: galleryImg4 },
  { id: "g5", group: "Beards", img: galleryImg5 },
  { id: "g6", group: "Interior", img: galleryImg6 },
  { id: "g7", group: "Beards", img: galleryImg7 },
  { id: "g8", group: "Haircut", img: galleryImg8 },
  { id: "g9", group: "Barber", img: galleryImg9 },
];

const filterItems = [
  { id: 0, name: "All" },
  { id: 1, name: "Barber" },
  { id: 2, name: "Beards" },
  { id: 3, name: "Haircut" },
  { id: 4, name: "Interior" },
];

const galleryReducer = function (state, action) {
  if (action.type === "All") {
    return galleryImages;
  }
  if (action.type === "Barber") {
    return galleryImages.filter((img) => img.group === "Barber");
  }
  if (action.type === "Beards") {
    return galleryImages.filter((img) => img.group === "Beards");
  }
  if (action.type === "Haircut") {
    return galleryImages.filter((img) => img.group === "Haircut");
  }
  if (action.type === "Interior") {
    return galleryImages.filter((img) => img.group === "Interior");
  }
  return galleryImages;
};

const Gallery = () => {
  const [galleryState, galleryDispatch] = useReducer(
    galleryReducer,
    galleryImages
  );

  const galleryFilterHandler = function (group) {
    galleryDispatch({ type: group.name });
  };

  return (
    <Section id="gallery" type={"dark"}>
      <SectionDetails details={galleryDetails} />
      <GalleryFilter items={filterItems} onClick={galleryFilterHandler} />
      <GalleryImages imgs={galleryState} />
    </Section>
  );
};

export default Gallery;
