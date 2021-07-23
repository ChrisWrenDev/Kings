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

const Gallery = () => {
  const galleryDetails = {
    step: 0,
    title: "Our Gallery",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    type: "dark",
  };

  const galleryImages = [
    { group: "Barber", img: galleryImg1 },
    { group: "Beards", img: galleryImg2 },
    { group: "Haircut", img: galleryImg3 },
    { group: "Interior", img: galleryImg4 },
    { group: "Barber", img: galleryImg5 },
    { group: "Barber", img: galleryImg6 },
    { group: "Barber", img: galleryImg7 },
    { group: "Barber", img: galleryImg8 },
    { group: "Barber", img: galleryImg9 },
  ];

  const filterItems = [
    "All",
    ...new Set(galleryImages.map((img) => img.group)),
  ];

  return (
    <Section type={"dark"}>
      <SectionDetails details={galleryDetails} />
      <GalleryFilter items={filterItems} />
      <GalleryImages imgs={galleryImages} />
    </Section>
  );
};

export default Gallery;
