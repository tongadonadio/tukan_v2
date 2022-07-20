import { useState } from "react";
import ActivityForm from "./activity-form/activity-form";
import ActivityStudentsList from "./activity-students-list/activity-students-list";
import BottomMenu from "../../common/menu/bottom/bottom-menu";
import TopMenu from "../../common/menu/top/top-menu";
import "./activity.css";

function Activity() {
  const [showStudentsList, setShowStudentsList] = useState(true);
  const [showActivityForm, setShowActivityForm] = useState(false);

  const formConfirm = () => {
    setShowActivityForm(!showActivityForm);
    setShowStudentsList(!showStudentsList);
  };

  return (
    <div>
      <TopMenu title="Nueva actividad" />

      <div className="activity-container">
        {showStudentsList && <ActivityStudentsList formConfirm={formConfirm} />}
        {showActivityForm && <ActivityForm formConfirm={formConfirm} />}
      </div>

      <BottomMenu />
    </div>
  );
}

export default Activity;
