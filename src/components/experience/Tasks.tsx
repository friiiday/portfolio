
type TasksProps = {
    tasks: string[]
}

export const Tasks: React.FC<TasksProps> = ({ tasks }) => {

    const list = tasks.map(
        (task) => {
            return (
                <li>{ task }</li>
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