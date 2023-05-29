const Card = ({ image, selected, onClick }) => {
  return (
    <div className="card">
      <div className={selected && "selected"}>
        <img src={image} className="card-face" alt={image} />

        <img
          src={"assets/fireship.png"}
          alt="fireship logo"
          className="card-back"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Card;
