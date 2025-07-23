export default function DashboardPage() {
  return (
    <div className="p-4">
      <div className="flex flex-1 flex-col gap-4 mt-2">
        <div className="grid auto-rows-min auto-cols-auto gap-4 md:grid-cols-3">
          <div className="bg-primary aspect-video rounded-xl" />
          <div className="bg-primary aspect-video rounded-xl" />
          <div className="bg-primary aspect-video rounded-xl" />
        </div>
        <div className="bg-primary min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </div>
  );
}
