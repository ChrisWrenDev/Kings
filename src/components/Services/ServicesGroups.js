import ServicesBlock from "./ServicesBlock";
import classes from "./ServicesGroups.module.css";
import servicesIcon1 from "../../assets/Service_Hair_Icon.svg";
import servicesIcon2 from "../../assets/Service_Beard_Icon.svg";
import servicesIcon3 from "../../assets/Service_Both_Icon.svg";

const ServicesGroup = function (props) {
  const servicesHairFiltered = props.services.filter(
    (service) => service.group === "hair"
  );
  const servicesBeardFiltered = props.services.filter(
    (service) => service.group === "beard"
  );
  const servicesOtherFiltered = props.services.filter(
    (service) => service.group === "other"
  );

  return (
    <div className={classes.services__group}>
      <ServicesBlock
        key={"block1"}
        icon={servicesIcon1}
        services={servicesHairFiltered}
      />
      <ServicesBlock
        key={"block2"}
        icon={servicesIcon2}
        services={servicesBeardFiltered}
      />
      <ServicesBlock
        key={"block3"}
        icon={servicesIcon3}
        services={servicesOtherFiltered}
      />
    </div>
  );
};

export default ServicesGroup;
