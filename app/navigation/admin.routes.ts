import Admin from "../components/screens/admin/home/Admin";
import { IRoute } from "./navigarion.inerfaces";



export const adminRoutes: IRoute[] = [{
    name: 'Admin',
    component: Admin,
    isAdmin: true
}]