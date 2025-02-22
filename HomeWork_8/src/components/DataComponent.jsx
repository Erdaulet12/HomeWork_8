import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/apiSlice";

const DataComponent = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.api);

  return (
    <div>
      <button onClick={() => dispatch(fetchData())}>Загрузить данные</button>
      {status === "loading" && <p>Загрузка...</p>}
      {status === "succeeded" && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {status === "failed" && <p>Ошибка: {error}</p>}
    </div>
  );
};

export default DataComponent;
