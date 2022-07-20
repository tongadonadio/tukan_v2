import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activity from "./pages/teacher/activity/activity";
import Attendance from "./pages/teacher/attendance/attendance";
import TeacherGallery from "./pages/teacher/gallery/gallery";
import Messages from "./pages/parent/messages/message";
import Login from "./pages/common/login/login";
import Program from "./pages/teacher/program/program";
import ParentHome from "./pages/parent/home/home";
import ParentGallery from "./pages/parent/gallery/gallery";
import TeacherHome from "./pages/teacher/home/home";
import DailyReport from "./pages/parent/daily-report/daily-report";

function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Commons */}
        <Route path="/" element={<Login />}>
          <Route index element={<Login />} />
        </Route>

        {/* Teacher */}
        <Route path="teacher" element={<TeacherHome />} />
        <Route path="teacher/activity" element={<Activity />} />
        <Route path="teacher/attendance" element={<Attendance />} />
        <Route path="teacher/gallery" element={<TeacherGallery />} />
        <Route path="teacher/program" element={<Program />} />

        {/* Parent */}
        <Route path="parent" element={<ParentHome />} />
        <Route path="parent/messages" element={<Messages />} />
        <Route path="parent/photos" element={<ParentGallery />} />
        <Route path="parent/daily-report" element={<DailyReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesConfig;
