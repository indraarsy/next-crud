import useSWR from "swr";
import DataRow from "./data-row.js";
import Layout from "./layout";
const { default: NavControl } = require("./navControl");
const fetcher = (url) => fetch(url).then((r) => r.json());

const Table = () => {
    const { data, error } = useSWR("/api/users", fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading</div>;

    const countData = data.length;
    console.log(data);
    return (
        <Layout>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    User
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Rol
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Created at
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data ? (
                                data.map((d) => (
                                    <DataRow
                                        key={d.ref["@ref"].id}
                                        id={d.ref["@ref"].id}
                                        firstName={d.data.firstName}
                                        lastName={d.data.lastName}
                                        telephone={d.data.telephone}
                                    ></DataRow>
                                ))
                            ) : (
                                <DataRow loading />
                            )}
                        </tbody>
                    </table>
                    <NavControl countData={countData} />
                </div>
            </div>
        </Layout>
    );
};

export default Table;
