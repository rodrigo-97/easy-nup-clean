import { DashboardTile } from "../components/shared/DashboardTile";
import { Row } from "../components/shared/Row";
import { Scaffold } from "../components/shared/Scaffold";

export function Dashboard() {
  return (
    <Scaffold
      title="Dashboard"
      body={
        <Row wrap="wrap">
          <DashboardTile>Contratualizações 12</DashboardTile>
          <DashboardTile>Contratualizações 12</DashboardTile>
          <DashboardTile>Contratualizações 12</DashboardTile>
          <DashboardTile>Contratualizações 12</DashboardTile>
        </Row>
      }
    />
  );
}
