import Layout from "@/components/layout/Layout";
import Image from "next/image";

const ErrorPage = () => {
  return (
    <Layout title="404 Not found">
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Image src="/404.png" alt="" width={512} height={512} />
      </div>
    </Layout>
  );
};

export default ErrorPage;
