import Badge from "../components/badge";
import Text from "../components/text";
import useTasks from "../hooks/use-tasks";

export default function TasksSummary() {
  const { createdTasksCount, concludedTasksCount, loading } = useTasks();

  return (
    <>
      <div className="flex items-center gap-2">
        <Text className="!text-gray-300" variant="body-sm-bold">
          Tasks created
        </Text>
        <Badge variant="secondary" loading={loading}>
          {createdTasksCount}
        </Badge>
      </div>

      <div className="flex items-center gap-2">
        <Text className="!text-gray-300" variant="body-sm-bold">
          Completed
        </Text>
        <Badge variant="primary" loading={loading}>
          {concludedTasksCount} of {createdTasksCount}
        </Badge>
      </div>
    </>
  );
}
