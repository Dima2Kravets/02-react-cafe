import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";
interface VoteOptionsProps{
  onReset: () => void;
  onVote: (vote: VoteType) => void;
  canReset:boolean,
}
export default function VoteOptions({onReset, onVote, canReset}:VoteOptionsProps) {
    return (
        <div className={css.container}>
        <button className={css.button} onClick={()=>onVote("good")}>Good</button>
        <button className={css.button} onClick={()=>onVote("neutral")}>Neutral</button>
        <button className={css.button} onClick={()=>onVote("bad")}>Bad</button>
        {canReset && <button className={`${css.button} ${css.reset}`} onClick={onReset}>Reset</button>}
        </div>
  );
}