
type TasksProps = {
    tasks: string[]
}

export const Tasks: React.FC<TasksProps> = ({ tasks }) => {

    const list = tasks.map(
        (task, i) => {
            return (
                <li key={ i }>{ task }</li>
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