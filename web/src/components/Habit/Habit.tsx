interface HabitProps {
  completed: number
}

function Habit(props: HabitProps) {
  return (
  <div className='bg-zinc-400 w-auto h-40 text-grey'>
<p className='flex items-center justify-center'>{props.completed}</p>
  </div>
  )
}

export default Habit
