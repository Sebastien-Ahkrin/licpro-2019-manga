import { Episode } from "../../../context/useApp";
import ListItem from "../ListItem/ListItem";

import "./List.css";

interface ListProps {
  episodes: Array<Episode>;
}

export default function List({ episodes }: ListProps) {
  return (
    <table className="table table-responsive-sm">
      <thead>
        <tr>
          <th scope="col">Série</th>
          <th scope="col">Saison</th>
          <th scope="col">Episode</th>
          <th scope="col">Note</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {episodes.map((episode) => (
          <ListItem key={episode.id} episode={episode} />
        ))}
      </tbody>
    </table>
  );
}
