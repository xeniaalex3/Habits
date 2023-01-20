interface HabitProps {
  completed: number
}

function Habit(props: HabitProps) {
  return (
  <div>
<p>{props.completed}</p>
  </div>
  )
}

export default Habit
