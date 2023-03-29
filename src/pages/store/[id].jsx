import CarDetail from "@/components/screens/car-detail/car-detail";
import { CarService } from "@/service/service";

const CarPage = (car) => {
  return <CarDetail car={car} />;
};
export const getStaticPaths = async () => {
  const cars = await CarService.getAll();
  return {
    paths: cars.map((car) => ({
      params: {
        id: car.id.toString(),
      },
    })),
    fallback: "blocking",
  };
};
export const getStaticProps = async ({ params }) => {
  const car = await CarService.getById(String(params?.id));
  return {
    props: car,
    revalidate: 60,
  };
};
export default CarPage;
