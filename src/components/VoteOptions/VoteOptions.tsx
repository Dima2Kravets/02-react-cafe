import css from "./VoteOptions.module.css";
import type { Votes } from "../../types/votes";
interface VoteOptionProps{
  reset: () => void;
  onUpdate: (vote: keyof Votes) => void;
  totalVotes: number,
}
export default function VoteOptions({reset, onUpdate, totalVotes}:VoteOptionProps) {
    return (
        <div className={css.container}>
        <button className={css.button} onClick={()=>onUpdate("good")}>Good</button>
        <button className={css.button} onClick={()=>onUpdate("neutral")}>Neutral</button>
        <button className={css.button} onClick={()=>onUpdate("bad")}>Bad</button>
        {totalVotes>0 && <button className={`${css.button} ${css.reset}`} onClick={reset}>Reset</button>}
        </div>
  );
}