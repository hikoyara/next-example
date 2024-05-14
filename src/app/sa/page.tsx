import { createTask } from "@/actions/sampleActions";

const ServerActionsPage = () => {
    const taskId = 1;
    const createTaskWithTaskId = createTask.bind(null, taskId);

    return (
        <div>
            <form action={createTaskWithTaskId}>
                <input type="text" id="name" name="name" className="bg-gray-200" />
                <button type="submit" className="bg-gray-400 ml-2 px-2">
                    送信
                </button>
            </form>
        </div>
    );
};

export default ServerActionsPage;
