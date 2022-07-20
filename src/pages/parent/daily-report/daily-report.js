import { Container } from "react-bootstrap";
import BottomMenu from "../../common/menu/bottom/bottom-menu";
import TopMenu from "../../common/menu/top/top-menu";
import DailyOverview from "./daily-overview/daily-overview";
import DailyPicture from "./daily-picture/daily-picture";
import "./daily-report.css";

function DailyReport() {
  return (
    <div>
      <TopMenu title="Reporte del día" />

      <Container daily-report-container>
        <DailyPicture />

        <div className="decoration-margins" />

        <DailyOverview />
      </Container>

      <BottomMenu />
    </div>
  );
}

export default DailyReport;
