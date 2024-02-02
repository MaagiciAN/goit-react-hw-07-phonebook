import { Watch } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { selectorIsLoading } from '../../redux/selectors'; 

export const Loader = () => {
  const isLoading = useSelector(selectorIsLoading);
  return (
    <>
      {isLoading && (
        <Watch
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{ margin: '0 47%' }}
        />
      )}
    </>
  );
};