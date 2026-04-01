type RequestProps = {
  region: string;
  resource: string;
};

export async function fetchCMSData({
  region,
  resource,
}: RequestProps) {
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/api/locale/${region}?projectId=${projectId}&resource=${resource}`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch CMS data");
  } else if (res.status === 200) {
    const data = await res.json();
    const { content } = data;
    return content;
  }
}
