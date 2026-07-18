const Card = (props) => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1608734265656-f035d3e7bcbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
        alt=""
      />
      <h1>{props.user}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad recusandae
        mollitia cupiditate?
      </p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
