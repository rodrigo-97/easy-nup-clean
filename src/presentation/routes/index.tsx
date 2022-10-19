import { Route, Routes } from "react-router-dom";
import { Analisys } from "@/presentation/pages/Analisys";
import { Analysts } from "@/presentation/pages/Analysts";
import { Clients } from "@/presentation/pages/Clients";
import { Contracts } from "@/presentation/pages/Contracts";
import { Dashboard } from "@/presentation/pages/Dashboard";
import { Projects } from "@/presentation/pages/Projects";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Dashboard />} />
                <Route path="contracts" element={<Contracts />} />
                <Route path="projects" element={<Projects />} />
                <Route path="analisys" element={<Analisys />} />
                <Route path="analysts" element={<Analysts />} />
                <Route path="clients" element={<Clients />} />
            </Route>
        </Routes>
    )
}