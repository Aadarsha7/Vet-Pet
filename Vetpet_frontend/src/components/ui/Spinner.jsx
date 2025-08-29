import { ClipLoader } from "react-spinners";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  

const Spinner = (loading) => {
  return (
    <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={455}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default Spinner
