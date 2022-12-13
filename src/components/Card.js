import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import "../styles.css";

const Card = (props) => {
  return (
    <div className="p-4 shadow-lg rounded-lg bg-white" key={props.id}>
      <AspectRatio.Root ratio={256 / 256} className="w-auto">
        <img className="Image rounded-md" src={props.img} alt="Villager" />
      </AspectRatio.Root>
      <h2 className="text-xl font-bold mt-2">{props.name}</h2>
      <p className="text-slate-500">
        <span className="font-bold">Species: </span>
        {props.species}
      </p>
      <p className="text-slate-500">
        <span className="font-bold">Personality: </span>
        {props.personality}
      </p>
    </div>
  );
};

export default Card;
