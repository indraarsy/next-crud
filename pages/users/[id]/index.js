import { useRouter } from "next/router";
import useSWR from "swr";
import Layout from "../../../components/layout";

const fetcher = (url) => fetch(url).then((r) => r.json());

const User = () => {
    const router = useRouter();
    const { id } = router.query;

    const { data, error } = useSWR(`/api/users/${id}`, fetcher);

    if (error) return <div>failed to load</div>;

    return (
        <Layout>
            <h1>User</h1>
            {data ? (
                <div>
                    <p>
                        {data.firstName} {data.lastName}
                    </p>
                    <p>{data.telephone}</p>
                </div>
            ) : (
                <div>Loading</div>
            )}
        </Layout>
    );
};

export default User;
