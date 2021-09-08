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
  switch (action.type) {
    case "All":
      return {
        group: "All",
        images: galleryImages,
      };
    case "Barber":
      return {
        group: "Barber",
        images: galleryImages.filter((img) => img.group === "Barber"),
      };
    case "Beards":
      return {
        group: "Beards",
        images: galleryImages.filter((img) => img.group === "Beards"),
      };
    case "Haircut":
      return {
        group: "Haircut",
        images: galleryImages.filter((img) => img.group === "Haircut"),
      };
    case "Interior":
      return {
        group: "Interior",
        images: galleryImages.filter((img) => img.group === "Interior"),
      };
    default:
      return state;
  }
};

const Gallery = () => {
  const [galleryState, galleryDispatch] = useReducer(galleryReducer, {
    group: "All",
    images: galleryImages,
  });

  const galleryFilterHandler = function (group) {
    galleryDispatch({ type: group.name });
  };

  return (
    <Section id="gallery" type={"dark"}>
      <SectionDetails details={galleryDetails} />
      <GalleryFilter
        active={galleryState.group}
        items={filterItems}
        onClick={galleryFilterHandler}
      />
      <GalleryImages imgs={galleryState.images} />
    </Section>
  );
};

export default Gallery;
