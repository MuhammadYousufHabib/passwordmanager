import SidebarItem from './SidebarItem';
import { FaUser, FaProjectDiagram, FaLock, FaCog, FaTags } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="pt-10 sidebar bg-black to-cyan-400 text-white h-screen w-64 shadow-md ">
     
      <ul className="space-y-6">
        <SidebarItem href="/dashboard/users" label="Users" icon={<FaUser className="text-white text-xl" />} />
        <SidebarItem href="/dashboard/roles" label="Roles" icon={<FaLock className="text-white text-xl" />} />
        <SidebarItem href="/dashboard/permissions" label="Permissions" icon={<FaCog className="text-white text-xl" />} />
        <SidebarItem href="/dashboard/projects" label="Projects" icon={<FaProjectDiagram className="text-white text-xl" />} />
        <SidebarItem href="/dashboard/modes" label="Modes" icon={<FaTags className="text-white text-xl" />} />
      </ul>
    </div>
  );
}
