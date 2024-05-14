"use server";

export const createTask = async (taskId: number, formData: FormData) => {
    // DBにタスクを作成
    console.log("タスクを作成しました");
    console.log(formData.get("name"));
    console.log(taskId);
};
