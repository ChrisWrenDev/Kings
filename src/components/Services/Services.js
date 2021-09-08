import { useState, useEffect } from "react";
import Section from "../UI/Section";
import backgroundImg from "../../assets/global-background.jpg";
import SectionDetails from "../UI/SectionDetails";
import ServicesGroups from "./ServicesGroups";
import useHttp from "../../hooks/use-http";
import { ItemsContext } from "../../store/items-context";

const Services = () => {
  const [loadServices, setLoadServices] = useState(false);

  const { itemsState, itemsDispatch } = ItemsContext();

  const { loadingStatus, error, httpRequest } = useHttp();

  useEffect(() => {
    const transformData = (services) => {
      if (loadServices) return;

      const servicesData = [];

      for (const id in services) {
        servicesData.push({
          id: id,
          name: services[id].name,
          price: services[id].price,
          description: services[id].description,
          group: services[id].group,
          status: false,
        });
      }

      itemsDispatch({
        type: "ADD_ITEMS",
        items: servicesData,
        group: "services",
      });
    };

    httpRequest(
      {
        url: "https://kings-barbers-85e2a-default-rtdb.europe-west1.firebasedatabase.app/services.json",
      },
      transformData
    );

    setLoadServices(true);
  }, [httpRequest, loadServices, itemsDispatch]);

  const serviceDetails = {
    step: 1,
    title: "Choose Your Services",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    type: "light",
  };

  return (
    <Section
      id="services"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <SectionDetails details={serviceDetails} />
      {!loadingStatus && !error && (
        <ServicesGroups services={itemsState.services} />
      )}
      {loadingStatus && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </Section>
  );
};

export default Services;
