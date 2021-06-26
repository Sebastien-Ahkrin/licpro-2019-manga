import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { add, remove } from "../actions";

export interface Episode {
  name: string;
  grade: number;
  episode: number;
  code: string;
  id: string;
}

export type ActionType<Action, Payload = void> = Payload extends void
  ? { type: Action }
  : { type: Action; payload: Payload };

type AppActions =
  | ActionType<"ADD_EPISODE", { episode: Episode }>
  | ActionType<"LOAD_EPISODES", Array<Episode>>
  | ActionType<"DELETE_EPISODE", string>;

type AppDispatch = Dispatch<AppActions>;

interface AppState {
  episodes: Array<Episode>;
}

const Context = createContext<[AppState, AppDispatch] | null>(null);
const initial: AppState = {
  episodes: [],
};

export default function useApp(): [AppState, AppDispatch] {
  const context = useContext(Context);

  if (!context) {
    throw new Error("context doesnt have any initializer");
  }

  return context;
}

function reducer(previous: AppState, actions: AppActions): AppState {
  switch (actions.type) {
    case "ADD_EPISODE": {
      void add(actions.payload.episode);
      return { episodes: [...previous.episodes, actions.payload.episode] };
    }
    case "LOAD_EPISODES": {
      return { episodes: actions.payload };
    }
    case "DELETE_EPISODE": {
      const episodes = previous.episodes;
      remove(actions.payload);
      return { episodes: episodes.filter((ep) => ep.id !== actions.payload) };
    }
    default:
      throw new Error("Not implemented yet");
  }
}

export function AppProvider(props: { children: ReactNode }) {
  const ctx = useReducer(reducer, initial);
  return <Context.Provider value={ctx}>{props.children}</Context.Provider>;
}
