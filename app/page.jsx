import CustomTable from "./components/CustomTable";

const baseUrl = process.env.BASE_URL;

const getUser = async () => {
  const res = await fetch(`${baseUrl}/users`);
  const data = await res.json();

  return data;
};

const Home = async () => {
  const { data } = await getUser();

  return (
    <div className="px-4 ">
      <CustomTable dataSource={data} />
    </div>
  );
};

export default Home;
