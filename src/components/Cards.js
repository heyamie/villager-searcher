import Card from "./Card";

const Cards = (props) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {props.villager?.map((villager) => (
          <Card
            key={villager.id}
            name={villager.name}
            species={villager.species}
            personality={villager.personality}
            img={villager.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
