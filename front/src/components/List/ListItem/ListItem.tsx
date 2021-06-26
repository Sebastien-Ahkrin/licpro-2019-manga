import "./ListItem.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import useApp, { Episode } from "../../../context/useApp";

interface ListItemProps {
  episode: Episode;
}

export default function ListItem({ episode }: ListItemProps) {
  const [, dispatch] = useApp();
  const [, season, ep] = episode.code.split(/[S|E]/g);

  function handleDeleteEpisode() {
    dispatch({ type: "DELETE_EPISODE", payload: episode.id });
  }

  return (
    <tr className="ListItem">
      <td>{episode.name}</td>
      <td>{season}</td>
      <td>{ep}</td>
      <td>{episode.grade}</td>
      <td>
        <i className="btn btn-primary fas fa-edit"></i>
        <i
          className="btn btn-primary far fa-times-circle"
          onClick={handleDeleteEpisode}
        ></i>
      </td>
    </tr>
  );
}
