import NavTable from "../components/navTable";
import Table from "../components/table";

const Home = () => {
    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <NavTable />
                <Table />
            </div>
        </div>
    );
};

export default Home;
