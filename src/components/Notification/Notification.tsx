import css from "./Notification.module.css";
interface NotificationProps{
  totalVotes: number,
}
export default function Notification({ totalVotes }: NotificationProps) {
  return (
    (totalVotes)===0 && <p className={css.message}>No feedback yet</p>);
};