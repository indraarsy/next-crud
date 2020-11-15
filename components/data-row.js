import Link from "next/link";

const DataRow = ({ id, firstName, lastName, telephone, loading }) => (
    <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10">
                    <img
                        className="w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                        alt=""
                    />
                </div>
                <div className="ml-3">
                    <Link href="/users/[id]" as={`/users/${id}`}>
                        <p className="text-gray-900 whitespace-no-wrap">
                            {firstName} {lastName}
                        </p>
                    </Link>
                </div>
            </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">{telephone}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span
                    aria-hidden
                    className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                ></span>
                <span className="relative">Activo</span>
            </span>
        </td>
    </tr>
);

export default DataRow;
