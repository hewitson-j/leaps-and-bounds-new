import { Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import TermsOfService from "./TermsOfService";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="terms-of-service" element={<TermsOfService/>} />
            <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
    )
}