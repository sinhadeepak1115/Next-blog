import FormNewPost from "@/components/form-new-post";
import { getCurrentUser } from "@/lib/session";

export default async function Home() {
  const user = await getCurrentUser();
  return (
    <>
      <div>
        <FormNewPost />
        Welcome, {user?.name}
      </div>
    </>
  );
}
