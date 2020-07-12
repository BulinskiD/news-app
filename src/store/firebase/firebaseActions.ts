import firebaseConfig from "../../firebaseConfig";

const db = firebaseConfig();

export async function getData<T>(collection: string): Promise<T> {
  const posts = await db.collection(collection).get();
  return (posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
  })) as any) as T;
}
