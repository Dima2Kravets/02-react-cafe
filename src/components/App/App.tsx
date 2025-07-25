// import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import css from "./App.module.css";
import { useState } from "react";
import type { Votes } from "../../types/votes";

export default function App() {

const [votes, setVotes] = useState<Votes>({
  good: 0,
  neutral: 0,
  bad: 0
});
  
  const handleVote = (vote: keyof Votes) => {
    setVotes({
      ...votes,
      [vote]: votes[vote] + 1,
    });
    };
  
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0
    });
  }
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes? Math.round((votes.good / totalVotes) * 100): 0;
    return (
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions reset={resetVotes} onUpdate={handleVote} totalVotes={totalVotes} />
        <Notification totalVotes={totalVotes}/>
        <VoteStats good={votes.good} neutral={votes.neutral} bad={votes.bad} totalVotes={totalVotes} positiveRate={positiveRate} />
    </div>
  );
}