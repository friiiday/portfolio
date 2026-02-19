import { TaskBullet } from "./TaskBullet"
import "./tasks.css"

type TasksProps = {
    tasks: string[]
}

export const Tasks: React.FC<TasksProps> = ({ tasks }) => {

    const list = tasks.map(
        (task, i) => {
            return (
                <span 
                    className="task" 
                    key={ i }
                >
                    <TaskBullet />
                    { task }
                </span>
            )
        }
    )

    return (
        <div className="tasks">
            <ul>
                { list }
            </ul>
        </div>
    )
}