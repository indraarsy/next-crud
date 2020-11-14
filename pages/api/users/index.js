import { query as q } from "faunadb";
import { serverClient } from "../../../config/fauna-auth";

export default async (req, res) => {
    try {
        const users = await serverClient.query(
            q.Map(
                // iterate each item in result
                q.Paginate(
                    // make paginatable
                    q.Match(
                        //query index
                        q.Index("all_users"), // spesifik
                    ),
                ),
            ),
            (ref) => q.Get(ref),
        );

        res.status(200).json(users.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
