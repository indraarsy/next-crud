import { query as q } from "faunadb";
import { serverClient } from "../../../../config/fauna-auth";

export default async (req, res) => {
    const {
        query: { id },
    } = req;

    try {
        const user = await serverClient.query(
            q.Get(q.Ref(q.Collection("users"), id)),
        );

        res.status(200).json(user.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
