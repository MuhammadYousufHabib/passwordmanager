import Link from 'next/link';

export default function SidebarItem({ href, label, icon }) {
  return (
    <li className="mb-6">
      <Link href={href} className="flex items-center text-md font-medium text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-400   p-2 pl-6  transition duration-300 ease-in-out">
        <span className="mr-3 text-gray-500  transition duration-300 ease-in-out">
          {icon}
        </span>
        {label}
      </Link>
    </li>
  );
}
