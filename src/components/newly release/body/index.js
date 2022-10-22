import "./styles.css";

function Card(props) {
  return (
    <div className="card">
      <div>
        <div>
          <div>
            <img className="img" src={props.img}></img>
          </div>
          <div>
            <b className="songName">{props.songName}</b>
            <p className="singerName">{props.singerName}</p>
            <i className="date">{props.date}</i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
