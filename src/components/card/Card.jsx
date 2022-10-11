import "./card.css";

const Card = ({ title, desc, image }) => {
  return (
    <div className="kartdivi">
      <h1 className="title">{title}</h1>
      <img className="images" src={image} alt="image" />

      <p className="paragraf">{desc}</p>
    </div>
  );
};

export default Card;
