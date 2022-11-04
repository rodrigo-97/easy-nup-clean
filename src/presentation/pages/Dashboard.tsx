import { DashboardTile } from "../components/dashboard/DashboardTile";
import { Row } from "../components/shared/Row";
import { Scaffold } from "../components/shared/Scaffold";

export function Dashboard() {
  return (
    <Scaffold
      title="Dashboard"
      body={
        <Row wrap="wrap">
          <DashboardTile>
            <p>Teste</p>
            <p>39</p>
          </DashboardTile>
          <DashboardTile>
            <p>Teste</p>
            <p>39</p>
          </DashboardTile>
          <DashboardTile>
            <p>Teste</p>
            <p>39</p>
          </DashboardTile>
          <DashboardTile>
            <p>Teste</p>
            <p>39</p>
          </DashboardTile>
          <DashboardTile>
            <p>Teste</p>
            <p>39</p>
          </DashboardTile>
          <DashboardTile>
            <p>Teste</p>
            <p>39</p>
          </DashboardTile>
          <DashboardTile>
            <p>Teste</p>
            <p>39</p>
          </DashboardTile>
          <DashboardTile>
            <p>Teste</p>
            <p>39</p>
          </DashboardTile>
        </Row>
      }
    />
  );
}
