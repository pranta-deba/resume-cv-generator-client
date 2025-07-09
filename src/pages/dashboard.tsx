import MyResumes from "@/components/dash-ui/my-resumes";
import QuickAction from "@/components/dash-ui/quick-action";
import Welcome from "@/components/dash-ui/welcome";
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Welcome />
        <QuickAction />
        <MyResumes />
      </div>
    </div>
  );
};

export default Dashboard;
